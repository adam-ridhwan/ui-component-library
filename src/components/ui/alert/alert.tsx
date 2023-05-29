import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Alert = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Alert;
