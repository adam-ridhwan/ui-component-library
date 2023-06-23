import { useSideBarContext } from '@/hooks/useSideBarContext';

const Alert = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export { Alert };
