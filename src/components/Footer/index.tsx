import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by&nbsp;
      <a href='https://github.com/IamGalexing' target='_blank' rel='noreferrer'>
        @IamGalexing
      </a>
      &nbsp;with
      <span role='img' aria-label='heart'>
        ♥
      </span>
    </footer>
  );
};

export default Footer;
