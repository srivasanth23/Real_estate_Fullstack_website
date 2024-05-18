import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import Layouts from "./components/Layouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div> Loading ... </div>}>
          <Routes>
            <Route element={<Layouts />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties" element={<Properties />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
