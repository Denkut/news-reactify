import Header from "@/widgets/header/ui/header/header";
import { useTheme } from "../providers/theme-provider";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
export default BaseLayout;
