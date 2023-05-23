import React from 'react';
import styles from './AccordionStyles.module.css';

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* Accordion
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContextData {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
}

const AccordionContext = React.createContext<AccordionContextData | undefined>(undefined);

interface AccordionProps {
  defaultIndex?: number;
  children: React.ReactNode;
}

// single tabs open at once
// const Accordion: React.FC<AccordionProps> = ({ defaultIndex = 0, children }) => {
//   const [activeIndex, setActiveIndex] = React.useState(defaultIndex);

//   return (
//     <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
//       <div className={styles.accordion_root}>{children}</div>
//     </AccordionContext.Provider>
//   );
// };

// Multiple tabs open at once
const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([]);

  return (
    <AccordionContext.Provider value={{ activeIndexes, setActiveIndexes }}>
      <div className={styles.accordion_root}>{children}</div>
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
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, children }) => {
  const { activeIndexes, setActiveIndexes } = React.useContext(AccordionContext) as AccordionContextData;

  const isActive = activeIndexes.includes(index);

  return (
    <div className={styles.accordion_item}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            index,
            isActive,
            toggleAccordionTab: () =>
              isActive
                ? setActiveIndexes(activeIndexes.filter((i) => i !== index))
                : setActiveIndexes([...activeIndexes, index]),
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
  toggleAccordionTab: () => void;
  index: number;
}

const AccordionHeader: React.FC<AccordionHeaderProps> = ({ children, toggleAccordionTab, index }) => {
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
  toggleAccordionTab: () => void;
  index: number;
}

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, toggleAccordionTab, index }) => {
  const { activeIndexes } = React.useContext(AccordionContext) as AccordionContextData;

  return (
    <button className={styles.accordian_trigger} onClick={toggleAccordionTab}>
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
  toggleAccordionTab?: () => void;
  isActive?: boolean;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, isActive }) => {
  const [contentHeight, setContentHeight] = React.useState<number | null>(null);
  const [padding] = React.useState<number | null>(10);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    isActive ? setContentHeight(getContentHeight(padding)) : setContentHeight(null);
  }, [isActive, padding]);

  const getContentHeight = (padding: number | null): number => {
    if (contentRef.current) return contentRef.current.scrollHeight + (padding || 0) * 2;
    return 0;
  };

  const contentStyle = {
    height: isActive ? `${contentHeight}px` : '0',
    padding: isActive ? `${padding}px 0` : '0',
    overflow: 'hidden',
    transition: 'height 300ms cubic-bezier(0.87, 0, 0.13, 1), padding 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    borderBottom: '1px solid #e0e0e0',
  };

  return (
    <div ref={contentRef} style={contentStyle}>
      {children}
    </div>
  );
};

//* ————————————————————————————————————————————————————————————————————————————————————————————————

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
