import RootLayout from "./shared/component/layout/RootLayout";
import { Route, Routes } from "react-router-dom";
import { React, lazy, Suspense } from "react";

//Pages
const HomePage = lazy(() => import("./pages/Home"));
const NotePage = lazy(() => import("./pages/Note"));
const ListPage = lazy(() => import("./pages/List"));


function App() {
  return (
    <RootLayout>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ListPage />} path="/list" />
          <Route element={<NotePage />} path="/note" />
        </Routes>
      </Suspense>
    </RootLayout>
  );
}

export default App;
