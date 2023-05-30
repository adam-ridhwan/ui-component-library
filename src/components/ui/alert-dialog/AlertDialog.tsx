import { useSideBarContext } from '@/hooks/useSideBarContext';

const AlertDialog = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default AlertDialog;
