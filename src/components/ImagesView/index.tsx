import { useState } from "react";
import Filter from "../Filter";
import ContentList from "../ImagesList";
import NoContentMessage from "../NoContentMessage";
import Pagination from "../Pagination";

import DATA from "../../source/data.json";
const ITEMS_PER_PAGE = 3;

const ImagesView = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [inputFilter, setInputFilter] = useState<string>("");

  const filteredData = DATA.filter((item) =>
    item.title.toLowerCase().includes(inputFilter.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <Filter setSearchQuery={setInputFilter} />

      {paginatedData.length ? (
        <ContentList data={paginatedData} />
      ) : (
        <NoContentMessage />
      )}

      {pageCount > 1 && (
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ImagesView;
