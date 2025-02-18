import { TOTAL_PAGES } from "@/shared/constants/constants";
import { Pagination } from "@/features/pagination/ui";
import { NewsList } from "@/widgets/news";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/use-pagination-news";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}
const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePrevieousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePrevieousPage}
      handlePageClick={handlePageClick}
      currentPage={filters.page_number}
      totalPages={TOTAL_PAGES}
    >
      <NewsList
        type="item"
        direction="column"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};
export default NewsListWithPagination;
