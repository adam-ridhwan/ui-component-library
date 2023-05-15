import { useSideBarContext } from '@/hooks/useSideBarContext';

const Separator = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Separator;
