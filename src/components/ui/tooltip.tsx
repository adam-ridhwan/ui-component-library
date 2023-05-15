import { useSideBarContext } from '@/hooks/useSideBarContext';

const Tooltip = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Tooltip;
