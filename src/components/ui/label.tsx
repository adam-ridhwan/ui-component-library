import { useSideBarContext } from '@/hooks/useSideBarContext';

const Label = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Label;
