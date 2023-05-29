import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Table = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Table;
