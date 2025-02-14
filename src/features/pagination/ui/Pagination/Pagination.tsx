import { IPaginationProps } from "../../model/types";
import PaginationButtons from "../pagination-buttons/pagination-buttons";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};
export default Pagination;
