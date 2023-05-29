import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Avatar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Avatar;
