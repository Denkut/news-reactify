import { TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/use-debounce";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetNewsQuery } from "../../store/services/news-api";
import { setFilters } from "../../store/slices/news-slice";
import NewsFilters from "../NewsFilters/news-filters";
import NewsList from "../NewsList/news-list";
import PaginationWrapper from "../PaginationWrapper/pagination-wrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });

  const handleNextPage = () => {
    {
      if (filters.page_number < TOTAL_PAGES) {
        dispatch(
          setFilters({ key: "page_number", value: filters.page_number + 1 })
        );
      }
    }
  };

  const handlePrevieousPage = () => {
    {
      if (filters.page_number > 1) {
        dispatch(
          setFilters({ key: "page_number", value: filters.page_number - 1 })
        );
      }
    }
  };

  const handlePageClick = (pageNumber: number) => {
    {
      dispatch(setFilters({ key: "page_number", value: pageNumber }));
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};
export default NewsByFilters;
