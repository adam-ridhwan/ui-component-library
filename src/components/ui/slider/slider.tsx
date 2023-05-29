import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Slider = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Slider;
