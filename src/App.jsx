import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/PageNotFound";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Navigate to={"/products"} replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
