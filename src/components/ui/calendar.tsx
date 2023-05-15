import { useSideBarContext } from '@/hooks/useSideBarContext';

const Calendar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Calendar;
