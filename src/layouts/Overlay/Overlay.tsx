import { FC } from 'react';

// import styles from './Overlay-styles.module.css';

interface OverlayProps {
  handleCloseModal: () => void;
  className?: string;
}

const Overlay: FC<OverlayProps> = ({ className, handleCloseModal }) => {
  return (
    <>
      <div className={`${className}}`} onClick={handleCloseModal} />
    </>
  );
};

export default Overlay;
