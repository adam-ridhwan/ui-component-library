import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Calendar = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Calendar;
