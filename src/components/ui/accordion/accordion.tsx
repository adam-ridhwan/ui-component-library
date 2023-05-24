import React from 'react';
import styles from './AccordionStyles.module.css';

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* Accordion
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContextData {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  type: 'single' | 'multiple'; // Add a type property to the context
}

const AccordionContext = React.createContext<AccordionContextData | undefined>(undefined);

interface AccordionProps {
  defaultIndex?: number;
  type?: 'single' | 'multiple';
  children: React.ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, defaultIndex = 0, type = 'single', className }) => {
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([defaultIndex]);

  React.useEffect(() => {
    console.log(activeIndexes);
  }, [activeIndexes]);

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
    <div className={className}>
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

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleAccordionTab && toggleAccordionTab();
  };

  return (
    <button onClick={handleClick} className={className}>
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
  className?: string;
}

const AccordionContent: React.FC<AccordionContentProps> = ({ children, className, isActive }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={contentRef} className={className} data-state={isActive ? 'open' : 'closed'}>
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
