import { useTheme } from "../../context/theme-context";
import { IPaginationProps } from "../../interfaces";
import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
    >
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={index}
              onClick={() => handlePageClick(pageNumber)}
              className={`${styles.pageNumber} ${
                pageNumber === currentPage ? styles.active : ""
              }`}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
