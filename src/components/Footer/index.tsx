import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by @IamGalexing with
      <span role='img' aria-label='heart'>
        ♥
      </span>
    </footer>
  );
};

export default Footer;
