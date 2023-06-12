import CopyIcon from '@/assets/svg/CopyIcon';
import CheckMarkIcon from '@/assets/svg/CheckMarkIcon';
import styles from './CodeContainer-styles.module.css';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { FC, ReactNode, useRef, useState } from 'react';

interface CodeContainerProps {
  children: ReactNode;
}

const CodeContainer: FC<CodeContainerProps> = ({ children }) => {
  const [deviceType] = useResolution();

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isToolTipHovered, setIsTooltipHovered] = useState<boolean>(false);
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
      }, 3000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {[DeviceType.TABLET, DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && (
          <button
            className={styles.copy_icon_container}
            onMouseEnter={() => setIsTooltipHovered(true)}
            onMouseLeave={() => setIsTooltipHovered(false)}
            onClick={handleCopy}
          >
            <div className={styles.copy_icon}>
              {isCopied ? <CheckMarkIcon /> : <CopyIcon />}
              <div data-hover={isToolTipHovered} className={styles.tooltip}>
                {isCopied ? 'Copied' : 'Copy to clipboard'}
              </div>
            </div>
          </button>
        )}

        <pre className={styles.pre}>
          <code ref={codeRef}>{children}</code>
        </pre>
      </div>
    </>
  );
};

export default CodeContainer;
