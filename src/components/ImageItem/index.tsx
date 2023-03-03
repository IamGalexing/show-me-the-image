import { IItem } from "../../interfaces";
import styles from "./imageItem.module.css";

const ContentItem = ({ ...item }: IItem) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={item.imagePath} alt={item.title} />
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default ContentItem;
