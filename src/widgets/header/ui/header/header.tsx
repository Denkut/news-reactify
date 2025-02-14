import { useTheme } from "@/app/providers/theme-provider";
import { formatDate } from "@/shared/helpers/format-date";
import { ThemeButton } from "@/features/theme";
import styles from "./styles.module.css";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};
export default Header;
