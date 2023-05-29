import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Tooltip = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Tooltip;
