import { useSideBarContext } from '@/hooks/useSideBarContext';

const Slider = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Slider;
