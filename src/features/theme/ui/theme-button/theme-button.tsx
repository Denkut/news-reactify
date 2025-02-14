import { useTheme } from "@/app/providers/theme-provider";
import { themeIcons } from "@/shared/assets";
import styles from "./styles.module.css";

const ThemeButton = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <img
      src={isDark ? themeIcons.light : themeIcons.dark}
      width={30}
      alt="theme"
      onClick={toggleTheme}
      className={styles["theme-icon"]}
    />
  );
};

export default ThemeButton;
