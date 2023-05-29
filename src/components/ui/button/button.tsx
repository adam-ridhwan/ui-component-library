import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Button = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Button;
