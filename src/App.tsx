import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/main";
import Loader from "./components/common/Loader";

// Lazy load components
const Home = lazy(() => import("./pages/home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={
        <Loader />
      }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
