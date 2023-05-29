import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const AspectRatio = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default AspectRatio;
