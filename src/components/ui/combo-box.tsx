import { useSideBarContext } from '@/hooks/useSideBarContext';

const ComboBox = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default ComboBox;
