import { useSideBarContext } from '@/hooks/useSideBarContext';

const DropdownMenu = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DropdownMenu;
