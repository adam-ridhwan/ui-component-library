import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Switch = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Switch;
