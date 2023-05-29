import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Command = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Command;
