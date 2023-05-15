import { useSideBarContext } from '@/hooks/useSideBarContext';

const RadioGroup = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default RadioGroup;
