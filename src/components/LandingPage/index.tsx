import { useState } from 'react';

import CommandButtonIcon from '@/assets/svg/CommandButtonIcon';
import GithubMiniIcon from '@/assets/svg/GithubMiniIcon';
import Footer from '@/layouts/Footer';
import { EXAMPLES } from '@/utils/constants';

import styles from './styles.module.css';

const LandingPage = () => {
  const [selectedExample, setSelectedExample] = useState<string>(EXAMPLES[0]);

  return (
    <>
      <div className={styles.landing_container}>
        <section className={styles.heading}>
          <h1>
            Streamline your development with <span className={styles.underline_h1}>UI Express</span>
            .
          </h1>
        </section>

        <section className={styles.support_heading}>
          <span>
            Customizable library to simplify your UI development with beautifully designed
            components.
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
            GitHub
          </button>
        </section>

        <section>
          <div className={styles.examples}>
            {EXAMPLES.map((example, index) => {
              return (
                <div key={index} onClick={() => setSelectedExample(example)}>
                  <span
                    className={
                      selectedExample === example
                        ? styles.selected_example
                        : styles.unselected_example
                    }
                  >
                    {example}
                  </span>
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
