import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layouts/base-layout";
import { MainPage } from "@/pages/main";
import { NewsPage } from "@/pages/news";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/news/:id", element: <NewsPage /> },
    ],
  },
]);
