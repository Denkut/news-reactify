import { useTheme } from "@/app/providers/theme-provider";
import { formatDate } from "@/shared/helpers/format-date";
import { ThemeButton } from "@/features/theme";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>NEWS REACTIFY</h1>
        </Link>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};
export default Header;
