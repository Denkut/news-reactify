import Header from "@/widgets/header/ui/header/header";
import { useTheme } from "../providers/theme-provider";
import { MainPage } from "@/pages/main";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  );
}
export default BaseLayout;
