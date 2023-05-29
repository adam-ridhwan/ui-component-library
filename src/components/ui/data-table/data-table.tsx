import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const DataTable = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default DataTable;
