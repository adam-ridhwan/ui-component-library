// SectionWrapper.tsx
import { useParams } from 'react-router-dom';

const SectionWrapper = () => {
  const { section } = useParams();
  console.log(section);

  switch (section) {
    case 'introduction':
      return <div>Introduction Content</div>;
    case 'installation':
      return <div>Installation Content</div>;
    // Add more cases for each section
    default:
      return <div>Default Content</div>;
  }
};

export default SectionWrapper;
