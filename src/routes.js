import Products from "./pages/ProductsPage";
import Orders from "./pages/OrdersPage";
import Cart from "./pages/Cart";
import Error from "./pages/Error";

export const routes = [
   { isExact: true, component: Products, path: "/", label: "Products" },
   { isExact: true, component: Error, path: "/404", label: "" },
   { isExact: true, component: Orders, path: "/", label: "Orders" },
   { isExact: true, component: Cart, path: "/", label: "Cart" }
];
