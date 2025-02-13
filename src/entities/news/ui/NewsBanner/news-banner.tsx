import { formatTimeAgo } from "@/shared/helpers/format-time-ago";
import { INews } from "../../model/types";
import Image from "@/shared/ui/Image/image";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
