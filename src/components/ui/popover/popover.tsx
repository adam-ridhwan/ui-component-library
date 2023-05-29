import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const PopOver = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default PopOver;
