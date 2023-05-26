import React from 'react';

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* Accordion
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContextData {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  type: 'single' | 'multiple';
}

const AccordionContext = React.createContext<AccordionContextData | undefined>(undefined);

interface AccordionProps {
  defaultIndex?: number;
  type?: 'single' | 'multiple';
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, defaultIndex = 0, type = 'single', className }) => {
  // Checking 'type' Prop
  if (type && !['single', 'multiple'].includes(type)) {
    throw new Error('Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.');
  }

  if (type === 'multiple' && typeof defaultIndex === 'string') {
    throw new Error(
      'Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.'
    );
  }

  if (type === 'single' && Array.isArray(defaultIndex)) {
    throw new Error(
      'Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.'
    );
  }
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([defaultIndex]);

  return (
    <AccordionContext.Provider value={{ activeIndexes, setActiveIndexes, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordianItem
//* ────────────────────────────────────────────────────────────────────────────────────────────────

type AccordionChild = React.ReactElement<AccordionHeaderProps | AccordionTriggerProps | AccordionContentProps>;

interface AccordionItemProps {
  index: number;
  children: AccordionChild | AccordionChild[];
  className?: string;
}

interface AccordionItemProps extends AccordionProps {
  index: number;
  children: AccordionChild | AccordionChild[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, children, className }) => {
  const { activeIndexes, setActiveIndexes, type } = React.useContext(AccordionContext) as AccordionContextData;

  const isActive = activeIndexes.includes(index);

  const toggleAccordionTab = () => {
    setActiveIndexes((prevIndexes) => {
      const isActive = prevIndexes.includes(index);
      if (isActive) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        if (type === 'single') {
          return [index];
        } else {
          return [...prevIndexes, index];
        }
      }
    });
  };

  return (
    <div className={className} style={{ position: 'relative' }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            index,
            isActive,
            toggleAccordionTab: toggleAccordionTab,
          });
        }
        return child;
      })}
    </div>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordianHeader
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionHeaderChildProps {
  index: number;
  toggleAccordionTab: () => void;
}

type AccordionHeaderChild = React.ReactElement<AccordionHeaderChildProps>;

interface AccordionHeaderProps {
  children: AccordionHeaderChild | AccordionHeaderChild[];
  toggleAccordionTab?: () => void;
  index?: number;
  className?: string;
  isActive?: boolean;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, toggleAccordionTab, index, className }) => {
  if (React.isValidElement<AccordionHeaderChildProps>(children)) {
    return React.cloneElement(children, { index, toggleAccordionTab });
  }
  return null;
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordionTrigger
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionTriggerProps {
  children: React.ReactNode;
  toggleAccordionTab?: () => void;
  index?: number;
  className?: string;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, toggleAccordionTab, index, className }) => {
  const { activeIndexes } = React.useContext(AccordionContext) as AccordionContextData;

  return (
    <button onClick={toggleAccordionTab} className={className}>
      {children}

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        style={{
          height: '1rem',
          width: '1rem',
          transform: activeIndexes.includes(index ?? -1) ? 'rotate(-180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <polyline points='6 9 12 15 18 9'></polyline>
      </svg>
    </button>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordianContent
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContentProps {
  children: React.ReactNode | null;
  className?: string;
  isActive?: boolean;
}

export interface CustomCSSHeightVariable extends React.CSSProperties {
  '--accordion-content-height': string;
  '--accordion-content-width': string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, className, isActive }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(true);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const dummyRef = React.useRef<HTMLDivElement>(null);
  const heightRef = React.useRef<number | undefined>(undefined);
  const widthRef = React.useRef<number | undefined>(undefined);

  const height = heightRef.current;
  const width = widthRef.current;

  React.useEffect(() => {
    const contentNode = contentRef.current;
    const dummyNode = dummyRef.current;
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      if (contentNode && dummyNode) {
        if (!isActive) return;

        contentNode.style.height = 'auto';
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          contentNode.style.height = '';
          const rect = dummyNode.getBoundingClientRect();
          heightRef.current = rect.height;
          widthRef.current = rect.width;
        }, 0);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  React.useLayoutEffect(() => {
    const dummyNode = dummyRef.current;
    if (!dummyNode) return;
    const rect = dummyNode.getBoundingClientRect();
    heightRef.current = rect.height;
    widthRef.current = rect.width;

    setIsOpen(isActive ?? false);
  }, [isActive]);

  const styles = React.useMemo(() => {
    return {
      '--accordion-content-height': height ? `${height}px` : undefined,
      '--accordion-content-width': width ? `${width}px` : undefined,
    } as CustomCSSHeightVariable;
  }, [height, width]);

  return (
    <>
      <div
        ref={contentRef}
        style={styles}
        className={className}
        data-state={isOpen ? 'open' : 'closed'}
        hidden={!isActive}
      >
        {children}
      </div>

      {/*
      //* ──────────────────────────────────────────────────────────────────────────────────────────
      //* Dummy div
      //* ──────────────────────────────────────────────────────────────────────────────────────────
       * This div is used to calculate the height of the content. It is hidden from the user.
       */}
      <div
        ref={dummyRef}
        className={className}
        style={{
          height: 'auto',
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      >
        {children}
      </div>
    </>
  );
};

const Root = Accordion;
const Item = AccordionItem;
const Header = AccordionHeader;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  //
  Root,
  Item,
  Header,
  Trigger,
  Content,
};
