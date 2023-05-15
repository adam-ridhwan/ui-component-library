import { useSideBarContext } from '@/hooks/useSideBarContext';

const ScrollArea = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default ScrollArea;
