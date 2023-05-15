import { useSideBarContext } from '@/hooks/useSideBarContext';

const Checkbox = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Checkbox;
