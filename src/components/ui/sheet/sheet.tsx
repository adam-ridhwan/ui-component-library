import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Sheet = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Sheet;
