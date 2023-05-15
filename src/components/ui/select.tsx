import { useSideBarContext } from '@/hooks/useSideBarContext';

const Select = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Select;
