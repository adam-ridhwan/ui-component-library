import { useSideBarContext } from '@/hooks/useSideBarContext';

const Skeleton = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Skeleton;
