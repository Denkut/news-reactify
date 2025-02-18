import { useAppDispatch } from "@/app/app-store";
import { setFilters } from "@/entities/news/model/news-slice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/interfaces";

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

  const handleNextPage = () => {
    {
      if (filters.page_number < TOTAL_PAGES) {
        dispatch(
          setFilters({ key: "page_number", value: filters.page_number + 1 })
        );
      }
    }
  };

  const handlePrevieousPage = () => {
    {
      if (filters.page_number > 1) {
        dispatch(
          setFilters({ key: "page_number", value: filters.page_number - 1 })
        );
      }
    }
  };

  const handlePageClick = (pageNumber: number) => {
    {
      dispatch(setFilters({ key: "page_number", value: pageNumber }));
    }
  };

  return { handleNextPage, handlePrevieousPage, handlePageClick };
};
