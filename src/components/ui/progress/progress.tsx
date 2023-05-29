import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Progress = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Progress;
