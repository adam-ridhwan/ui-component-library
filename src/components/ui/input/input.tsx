import { useSideBarContext } from '@/hooks/useSideBarContext.ts';

const Input = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Input;
