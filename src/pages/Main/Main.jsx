import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";
import NewsList from "../../components/NewsList/NewsList";
import styles from "./styles.module.css";

const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};
export default Main;
