import { useGetLatestNewsQuery } from "../../store/services/news-api";
import BannersList from "../BannersList/banners-list";
import styles from "./styles.module.css";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};
export default LatestNews;
