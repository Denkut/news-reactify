import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/use-debounce";
import { useFilters } from "../../helpers/hooks/use-filters";
import { useFetch } from "../../helpers/hooks/useFetch";
import NewsFilters from "../NewsFilters/news-filters";
import NewsList from "../NewsList/news-list";
import PaginationWrapper from "../PaginationWrapper/pagination-wrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

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

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevieousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};
export default NewsByFilters;
