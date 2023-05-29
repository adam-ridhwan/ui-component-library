import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Textarea = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Textarea;
