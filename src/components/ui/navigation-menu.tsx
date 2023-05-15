import { useSideBarContext } from '@/hooks/useSideBarContext';

const Navigation = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Navigation;
