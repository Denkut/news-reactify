import LatestNews from "./latest-news/latest-news";
import NewsByFilters from "./news-by-filters/news-by-filters";
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
