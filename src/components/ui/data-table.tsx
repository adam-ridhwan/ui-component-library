import { useSideBarContext } from '@/hooks/useSideBarContext';

const DataTable = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DataTable;
