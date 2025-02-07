import { useTheme } from "../../context/theme-context";
import { IFilters } from "../../interfaces";
import { useAppDispatch } from "../../store";
import { useGetCategoriesQuery } from "../../store/services/news-api";
import { setFilters } from "../../store/slices/news-slice";
import Categories from "../Categories/categories";
import Search from "../Search/search";
import Slider from "../Slider/slider";
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
