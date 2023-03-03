import ContentItem from "../ImageItem";
import { IItem } from "../../interfaces";
import styles from "./imagesList.module.css";

type Props = {
  data: IItem[];
};

const ContentList = ({ data }: Props) => {
  return (
    <ul className={styles.grid}>
      {data.map((item, index) => (
        <li key={index} className={styles.gridItem}>
          <ContentItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ContentList;
