import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Select = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Select;
