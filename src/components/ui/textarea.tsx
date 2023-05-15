import { useSideBarContext } from '@/hooks/useSideBarContext';

const Textarea = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Textarea;
