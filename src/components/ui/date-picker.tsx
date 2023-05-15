import { useSideBarContext } from '@/hooks/useSideBarContext';

const DatePicker = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DatePicker;
