import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Toast = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Toast;
