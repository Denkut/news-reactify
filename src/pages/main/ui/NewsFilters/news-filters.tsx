import { useAppDispatch } from "@/app/app-store";
import { useTheme } from "@/app/providers/theme-provider";
import { useGetCategoriesQuery } from "@/entities/category/api/categories-api";
import { setFilters } from "@/entities/news/model/news-slice";
import { Categories } from "@/features/category/ui";
import { Search } from "@/features/search";
import { Slider } from "@/features/slider";
import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
}
const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider step={200} isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};
export default NewsFilters;
