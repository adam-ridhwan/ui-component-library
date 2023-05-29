import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Menubar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Menubar;
