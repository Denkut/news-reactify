import styles from "./styles.module.css";
import LatestNews from "../../components/LatestNews/latest-news";
import NewsByFilters from "../../components/NewsByFilters/news-by-filters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNews />

      <NewsByFilters />
    </main>
  );
};

export default Main;
