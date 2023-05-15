import { useSideBarContext } from '@/hooks/useSideBarContext';

const HoverCard = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default HoverCard;
