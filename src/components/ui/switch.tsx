import { useSideBarContext } from '@/hooks/useSideBarContext';

const Switch = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Switch;
