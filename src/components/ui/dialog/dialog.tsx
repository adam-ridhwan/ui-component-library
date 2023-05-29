import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Dialog = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Dialog;
