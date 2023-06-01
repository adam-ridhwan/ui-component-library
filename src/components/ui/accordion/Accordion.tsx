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

  /**
   * Toggles the opened/closed state of an accordion tab.
   *
   * If the tab is already active (open),
   * it's index will be removed from the active indexes,
   * effectively closing the tab.
   *
   * If the tab is not active (closed),
   * it's index will be added to the active indexes,
   * effectively opening the tab.
   *
   * For an accordion where only a single tab can be open at a time (type 'single'),
   * any previously active index will be discarded.
   *
   * For an accordion where multiple tabs can be open at a time (type 'multiple'),
   * any previously active indexes will be preserved.
   */
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
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          height: '1rem',
          width: '1rem',
          transform: activeIndexes.includes(index ?? -1) ? 'rotate(-180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
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

  /**
   * Effect hook that manages responsive resizing for the accordion content.
   *
   * When the accordion content is active, this effect will automatically adjust the height
   * of the content node to ensure correct rendering upon window resizing.
   * It does this by temporarily setting the content height to 'auto', calculating the required
   * height from a dummy node, and then resetting the height.
   */
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

  /**
   * Layout effect hook that updates the accordion's open state and stores the current height and width of the
   * accordion.
   *
   * When the accordion is active, this effect retrieves the dimensions of a dummy node via getBoundingClientRect.
   * These dimensions are then stored in refs for future use.
   * The isOpen state of the accordion is also updated based on the active status.
   */
  React.useLayoutEffect(() => {
    const dummyNode = dummyRef.current;
    if (!dummyNode) return;

    const { height, width } = dummyNode.getBoundingClientRect();
    heightRef.current = height;
    widthRef.current = width;

    setIsOpen(isActive ?? false);
  }, [isActive]);

  /**
   * Memoized CSS custom properties for accordion's content height and width.
   */
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
