import { useSideBarContext } from '@/hooks/useSideBarContext';

const Collapsible = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Collapsible;
