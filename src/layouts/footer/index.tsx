import styles from './styles.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <p>
            Built by <span>Adam Ridhwan</span>. The source code is available on <span>Github</span>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
