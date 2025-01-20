import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/news-filters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {
  const handleNextPage = () => {
    {
      if (filters.page_number < TOTAL_PAGES) {
        changeFilters("page_number", filters.page_number + 1);
      }
    }
  };

  const handlePrevieousPage = () => {
    {
      if (filters.page_number > 1) {
        changeFilters("page_number", filters.page_number - 1);
      }
    }
  };

  const handlePageClick = (pageNumber) => {
    {
      changeFilters("page_number", pageNumber);
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevieousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevieousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};
export default NewsByFilters;