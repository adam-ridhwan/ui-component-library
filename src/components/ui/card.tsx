import { useSideBarContext } from '@/hooks/useSideBarContext';

const Card = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Card;
