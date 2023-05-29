import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Navigation = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Navigation;
