import { useSideBarContext } from '@/hooks/useSideBarContext';

const Toast = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Toast;
