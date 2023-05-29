import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Collapsible = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Collapsible;
