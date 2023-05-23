import React, { FunctionComponent, ReactNode, createContext, useContext, useState } from 'react';

import styles from './AccordionStyles.module.css';

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* Accordion
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContextData {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
}

const AccordionContext = createContext<AccordionContextData | undefined>(undefined);

interface AccordionProps {
  defaultIndex?: number;
  children: ReactNode;
}

// single tabs open at once
// const Accordion: FunctionComponent<AccordionProps> = ({ defaultIndex = 0, children }) => {
//   const [activeIndex, setActiveIndex] = useState(defaultIndex);

//   return (
//     <AccordionContext.Provider value={{ activeIndex, setActiveIndex }}>
//       <div className={styles.accordion_root}>{children}</div>
//     </AccordionContext.Provider>
//   );
// };

// Multiple tabs open at once
const Accordion: FunctionComponent<AccordionProps> = ({ children }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

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

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ index, children }) => {
  const { activeIndexes, setActiveIndexes } = useContext(AccordionContext) as AccordionContextData;

  const isActive = activeIndexes.includes(index);

  return (
    <div className={styles.accordion_item}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isActive,
            onHeaderClick: () => {
              if (isActive) {
                setActiveIndexes(activeIndexes.filter((i) => i !== index)); // if this tab is already open, close it
              } else {
                setActiveIndexes([...activeIndexes, index]); // otherwise, open this tab
              }
            },
          });
        }
        child;
      })}
    </div>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordianHeader
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionHeaderProps {
  children: ReactNode;
  onHeaderClick?: () => void;
  isActive?: boolean;
}

const AccordionHeader: FunctionComponent<AccordionHeaderProps> = ({ children, onHeaderClick }) => {
  return <h3 onClick={onHeaderClick}>{children}</h3>;
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordionTrigger
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionTriggerProps {
  children: ReactNode;
  onHeaderClick?: () => void;
  isActive?: boolean;
}

const AccordionTrigger: FunctionComponent<AccordionTriggerProps> = ({ children, onHeaderClick }) => {
  return (
    <button className={styles.accordian_trigger} onClick={onHeaderClick}>
      {children}
    </button>
  );
};

//* ────────────────────────────────────────────────────────────────────────────────────────────────
//* AccordianContent
//* ────────────────────────────────────────────────────────────────────────────────────────────────

interface AccordionContentProps {
  children: ReactNode | null;
  onHeaderClick?: () => void;
  isActive?: boolean;
}

const AccordionContent: FunctionComponent<AccordionContentProps> = ({ children, isActive }) => {
  // return isActive ? <div className={styles.accordian_content}>{children}</div> : <div></div>;

  return (
    <div className={styles.accordian_content}>
      {isActive ? <div className={styles.accordian_content_child}>{children}</div> : <div></div>}
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
