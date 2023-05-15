import { useSideBarContext } from '@/hooks/useSideBarContext';

const Dialog = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Dialog;
