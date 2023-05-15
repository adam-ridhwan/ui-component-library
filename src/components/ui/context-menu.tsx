import { useSideBarContext } from '@/hooks/useSideBarContext';

const ContextMenu = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default ContextMenu;
