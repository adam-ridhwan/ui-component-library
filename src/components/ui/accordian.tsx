import { useSideBarContext } from '@/hooks/useSideBarContext';

const Accordian = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Accordian;
