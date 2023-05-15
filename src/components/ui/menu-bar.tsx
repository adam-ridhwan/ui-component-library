import { useSideBarContext } from '@/hooks/useSideBarContext';

const Menubar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Menubar;
