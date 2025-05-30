import { INews } from "@/entities/news";
import withSkeleton from "@/shared/hocs/with-skeleton";
import NewsCard from "@/entities/news/ui/news-card/news-card";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = "item", viewNewsSlot }: Props) => {
  return (
    <ul className={` ${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard
            key={item.id}
            viewNewsSlot={viewNewsSlot}
            item={item}
            type={type}
          />
        );
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
