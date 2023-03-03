import { useCallback } from "react";
import debounce from "lodash.debounce";
import styles from "./filter.module.css";

type Props = {
  setSearchQuery: (val: string) => void;
};

const Filter = ({ setSearchQuery }: Props) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchQueryChange = useCallback(
    debounce((e) => setSearchQuery(e.target.value), 500),
    []
  );

  return (
    <div className={styles.input}>
      <input
        className={styles.textInput}
        type='text'
        placeholder='Search by title...'
        onChange={handleSearchQueryChange}
      />
    </div>
  );
};

export default Filter;
