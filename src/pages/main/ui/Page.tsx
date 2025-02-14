import LatestNews from "./LatestNews/latest-news";
import NewsByFilters from "./NewsByFilters/news-by-filters";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default MainPage;
