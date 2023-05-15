import { useSideBarContext } from '@/hooks/useSideBarContext';

const Button = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Button;
