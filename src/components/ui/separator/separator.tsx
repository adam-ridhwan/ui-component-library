import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Separator = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Separator;
