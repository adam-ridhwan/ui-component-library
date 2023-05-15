import { useSideBarContext } from '@/hooks/useSideBarContext';

const Toggle = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Toggle;
