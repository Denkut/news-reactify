import { useAppDispatch, useAppSelector } from "@/app/app-store";
import { useGetNewsQuery } from "@/entities/news/api/news-api";
import { setFilters } from "@/entities/news/model/news-slice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { NewsList } from "@/widgets/news/ui";
import NewsFilters from "../NewsFilters/news-filters";
import styles from "./styles.module.css";
import { Pagination } from "@/features/pagination/ui";

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

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};
export default NewsByFilters;
