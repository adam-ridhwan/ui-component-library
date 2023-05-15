import { useSideBarContext } from '@/hooks/useSideBarContext';

const Command = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Command;
