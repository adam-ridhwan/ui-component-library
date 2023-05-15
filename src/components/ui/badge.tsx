import { useSideBarContext } from '@/hooks/useSideBarContext';

const Badge = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Badge;
