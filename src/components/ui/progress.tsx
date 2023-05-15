import { useSideBarContext } from '@/hooks/useSideBarContext';

const Progress = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Progress;
