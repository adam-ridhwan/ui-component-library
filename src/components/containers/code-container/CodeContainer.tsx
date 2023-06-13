import CopyIcon from '@/assets/svg/CopyIcon';
import CheckMarkIcon from '@/assets/svg/CheckMarkIcon';
import styles from './CodeContainer-styles.module.css';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { FC, ReactNode, useRef, useState } from 'react';

interface CodeContainerProps {
  children: ReactNode;
  isExpandable?: boolean;
}

const CodeContainer: FC<CodeContainerProps> = ({ children, isExpandable }) => {
  const [deviceType] = useResolution();

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopyButtonHovered, setIsCopyButtonHovered] = useState<boolean>(false);
  const [isContainerCodeExpanded, setIsContainerCodeExpanded] = useState<boolean>(false);
  const codeRef = useRef<HTMLElement>(null);
  let copyTimeout: number | undefined;

  const handleCopy = async () => {
    const node = codeRef.current;

    if (!node) return;

    const textToCopy = node.innerText;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      if (copyTimeout !== undefined) window.clearTimeout(copyTimeout);

      copyTimeout = window.setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handleToggleContainerExpansion = () => {
    setIsContainerCodeExpanded((isExpandable) => !isExpandable);
  };

  return (
    <>
      <div className={styles.container} data-expanded={isExpandable ? isContainerCodeExpanded : ''}>
        {[DeviceType.TABLET, DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && (
          <button
            className={styles.copy_icon_container}
            onMouseEnter={() => setIsCopyButtonHovered(true)}
            onMouseLeave={() => setIsCopyButtonHovered(false)}
            onClick={handleCopy}
          >
            <div className={styles.copy_icon}>
              {isCopied ? <CheckMarkIcon /> : <CopyIcon />}
              <div data-hover={isCopyButtonHovered} className={styles.tooltip}>
                {isCopied ? 'Copied' : 'Copy to clipboard'}
              </div>
            </div>
          </button>
        )}

        {isExpandable && (
          <button className={styles.toggle_code_button} onClick={handleToggleContainerExpansion}>
            Show code
          </button>
        )}

        <pre className={styles.pre}>
          <code ref={codeRef}>{children}</code>
          {isExpandable && <br />}
        </pre>
      </div>
    </>
  );
};

export default CodeContainer;
