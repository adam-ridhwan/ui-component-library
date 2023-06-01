import { ForwardedRef, forwardRef, ReactNode } from 'react';
import styles from './BodyContainer-styles.module.css';

interface BodyContainerProps {
  ref: ForwardedRef<HTMLDivElement>;
  children: ReactNode;
}

const BodyContainer = forwardRef<HTMLDivElement, BodyContainerProps>(({ children }, ref) => {
  return (
    <div ref={ref} className={styles.body_container}>
      {children}
    </div>
  );
});

export default BodyContainer;
