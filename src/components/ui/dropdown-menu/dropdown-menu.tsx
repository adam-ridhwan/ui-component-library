import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const DropdownMenu = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DropdownMenu;
