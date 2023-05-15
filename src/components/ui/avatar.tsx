import { useSideBarContext } from '@/hooks/useSideBarContext';

const Avatar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Avatar;
