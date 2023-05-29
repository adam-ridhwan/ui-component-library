import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Toggle = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Toggle;
