import { formatTimeAgo } from "@/shared/helpers/format-time-ago";
import Image from "@/shared/ui/image/image";
import { INews } from "../..";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <p>
          {item.description} ({item.language}){" "}
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return <button className={styles.active}>{category}</button>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
