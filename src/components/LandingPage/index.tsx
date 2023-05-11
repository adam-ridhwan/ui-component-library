import { CSSProperties, useState } from 'react';

import CommandButtonIcon from '@/assets/svg/CommandButtonIcon';
import GithubMiniIcon from '@/assets/svg/GithubMiniIcon';
import Footer from '@/layouts/Footer';
import { EXAMPLES } from '@/utils/constants';

import styles from './styles.module.css';

const LandingPage = () => {
  const [selectedExample, setSelectedExample] = useState<string>(EXAMPLES[0]);

  const exampleFontColorStyle = (example: string): string => {
    return selectedExample === example ? styles.selected_example : styles.unselected_example;
  };

  return (
    <>
      <div className={styles.landing_container}>
        <section className={styles.heading}>
          <h1>Streamline your development.</h1>
        </section>

        <section className={styles.support_heading}>
          <span>
            Customizable library to simplify your development with beautifully designed and versatile components.
          </span>

          <span>
            <span className={styles.underline_instructions}>
              Just press &nbsp;
              <CommandButtonIcon /> &nbsp;+ c and &nbsp;
              <CommandButtonIcon /> &nbsp;+ v
            </span>
          </span>
        </section>

        <section className={styles.call_to_action}>
          <button>
            <span>Get started</span>
          </button>

          <button>
            <GithubMiniIcon />
            <span>GitHub</span>
          </button>
        </section>

        <section>
          <div className={styles.examples}>
            {EXAMPLES.map((example, index) => {
              return (
                <div key={index} onClick={() => setSelectedExample(example)}>
                  <span className={exampleFontColorStyle(example)}>{example}</span>
                </div>
              );
            })}
          </div>

          <div className={styles.images}>
            <img />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
