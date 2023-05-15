import { useSideBarContext } from '@/hooks/useSideBarContext';

const Sheet = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Sheet;
