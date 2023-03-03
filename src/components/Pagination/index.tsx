import styles from "./pagination.module.css";

type Props = {
  pageCount: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

const Pagination = ({ pageCount, currentPage, setCurrentPage }: Props) => {
  return (
    <ul className={styles.pagination}>
      {[...Array(pageCount)].map((_, index) => (
        <li
          key={index}
          className={currentPage === index + 1 ? styles.active : ""}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
