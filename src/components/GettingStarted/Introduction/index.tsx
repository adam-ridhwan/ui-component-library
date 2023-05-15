import Path from '@/components/Path';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import styles from './styles.module.css';

const Introduction = () => {
  const { currentSection } = useSideBarContext();
  return (
    <>
      <Path section={currentSection} />
      <h1>{currentSection}</h1>
      <span>Reusable components built from scratch</span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis earum
        a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime perspiciatis
        necessitatibus!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio quidem veniam eos!
        Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
      </span>

      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis earum
        a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime perspiciatis
        necessitatibus!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio quidem veniam eos!
        Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
      </span>

      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis earum
        a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime perspiciatis
        necessitatibus!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio quidem veniam eos!
        Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
      </span>
    </>
  );
};
export default Introduction;
