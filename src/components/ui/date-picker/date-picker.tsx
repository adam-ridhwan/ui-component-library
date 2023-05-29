import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const DatePicker = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DatePicker;
