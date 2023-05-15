import { useSideBarContext } from '@/hooks/useSideBarContext';

const Input = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <div>{currentSection}</div>
    </>
  );
};
export default Input;
