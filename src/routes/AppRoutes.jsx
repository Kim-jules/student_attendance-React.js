  import Dashboard from "../pages/Dashboard";
  import Products from "../pages/Products";
  import Sales from "../pages/Sales";
  import Stock from "../pages/Stock";
  import { Routes, Route } from "react-router-dom";

  const AppRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    );
  };

  export default AppRoutes;
