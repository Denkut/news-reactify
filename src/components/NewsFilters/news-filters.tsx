import { getCategories } from "../../api/apiNews";
import { useTheme } from "../../context/theme-context";
import { useFetch } from "../../helpers/hooks/useFetch";
import { CategoriesApiResponse, IFilters } from "../../interfaces";
import Categories from "../Categories/categories";
import Search from "../Search/search";
import Slider from "../Slider/slider";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilters }: Props) => {
  const { isDark } = useTheme();
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider step={200} isDark={isDark}>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilters("category", category)
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
};
export default NewsFilters;
