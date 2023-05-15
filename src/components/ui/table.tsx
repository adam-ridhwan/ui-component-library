import { useSideBarContext } from '@/hooks/useSideBarContext';

const Table = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Table;
