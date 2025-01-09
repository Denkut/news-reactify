import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getCategories, getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/use-debounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/use-filters";

const Main = () => {
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

  const { data: dataCategories } = useFetch(getCategories);

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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilters("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevieousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevieousPage={handlePrevieousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
        totalPages={TOTAL_PAGES}
      />
    </main>
  );
};
export default Main;
