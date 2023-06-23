import { useSideBarContext } from '@/hooks/useSideBarContext';

const AspectRatio = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default AspectRatio;
