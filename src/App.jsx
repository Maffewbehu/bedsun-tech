import { createElement } from "react";
import { Route, Routes } from "react-router-dom";
import { pageRoutes } from "./routes";
import Layout from "./components/Layout";
import HomeLayout from "./components/HomeLayout";
import RouteScroll from "./components/RouteScroll";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        {pageRoutes.map(({ path, Component }) => (
          <Route key={path} element={path === "/" ? <HomeLayout /> : <Layout />}>
            <Route path={path} element={createElement(Component)} />
          </Route>
        ))}
        <Route element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
