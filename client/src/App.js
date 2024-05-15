import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import Layouts from "./components/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div> Loading ... </div>}>
        <Routes>
          <Route element={<Layouts />}>
            <Route path="/" element={<Website />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
