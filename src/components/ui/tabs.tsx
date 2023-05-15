import { useSideBarContext } from '@/hooks/useSideBarContext';

const Tabs = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Tabs;
