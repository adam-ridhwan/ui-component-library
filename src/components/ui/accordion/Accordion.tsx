import React from 'react';

//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//* Accordion
//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

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

type AccordionChild = React.ReactElement<AccordionTriggerProps | AccordionContentProps>;

const Accordion: React.FC<AccordionProps> = ({ children, defaultIndex = 0, type = 'single', className }) => {
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

//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordionItem
//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

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
        return type === 'single' ? [index] : [...prevIndexes, index];
      }
    });
  };

  return (
    <div className={className} style={{ position: 'relative' }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { index, isActive, toggleAccordionTab });
        }
        return child;
      })}
    </div>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordionTrigger
//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

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

//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordionContent
//* ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

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
  const resizeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const height = heightRef.current;
  const width = widthRef.current;

  React.useEffect(() => {
    const contentNode = contentRef.current;
    const dummyNode = dummyRef.current;
    let resizeTimeout = resizeTimeoutRef.current;

    const handleResize = () => {
      if (!(contentNode && dummyNode) || !isActive) return;

      contentNode.style.height = 'auto';

      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        contentNode.style.height = '';
        const { height, width } = dummyNode.getBoundingClientRect();
        heightRef.current = height;
        widthRef.current = width;
      }, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [isActive]);

  React.useLayoutEffect(() => {
    const dummyNode = dummyRef.current;
    if (!dummyNode) return;

    const { height, width } = dummyNode.getBoundingClientRect();
    heightRef.current = height;
    widthRef.current = width;

    setIsOpen(isActive ?? false);
  }, [isActive]);

  // memoize style object
  const style = React.useMemo(() => {
    return {
      '--accordion-content-height': height ? `${height}px` : undefined,
      '--accordion-content-width': width ? `${width}px` : undefined,
      display: 'flex',
      overflow: 'hidden',
    } as CustomCSSHeightVariable;
  }, [height, width]);

  return (
    <>
      <div ref={contentRef} style={style} className={className} data-state={getState(isOpen)} hidden={!isActive}>
        {children}
      </div>

      <div
        ref={dummyRef}
        style={{
          display: 'flex',
          overflow: 'hidden',
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

function getState(open?: boolean) {
  return open ? 'open' : 'closed';
}

const Root = Accordion;
const Item = AccordionItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  //
  Root,
  Item,
  Trigger,
  Content,
};
