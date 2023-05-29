import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Badge = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Badge;
