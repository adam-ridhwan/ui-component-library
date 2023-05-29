import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const HoverCard = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default HoverCard;
