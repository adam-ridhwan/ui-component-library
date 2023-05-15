import { useSideBarContext } from '@/hooks/useSideBarContext';

const PopOver = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default PopOver;
