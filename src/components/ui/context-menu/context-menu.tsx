import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const ContextMenu = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default ContextMenu;
