import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const ComboBox = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default ComboBox;
