import { useAppSelector } from "@/app/app-store";
import { useGetNewsQuery } from "@/entities/news/api/news-api";
import { useGetCategoriesQuery } from "@/entities/category/api/categories-api";
import NewsListWithPagination from "../news-list-with-pagination/news-list-with-pagination";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { NewsFilters } from "@/widgets/news";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  });

  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        news={news}
        filters={filters}
      />
    </section>
  );
};
export default NewsByFilters;
