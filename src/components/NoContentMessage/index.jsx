import styles from "./noContentMessage.module.css";

const NoContentMessage = () => {
  return (
    <div className={styles.noContent}>
      Ooops, no results found
      <span role='img' aria-label='sad smile'>
        😟
      </span>
    </div>
  );
};

export default NoContentMessage;
