import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./Login";
import MainPage from "./main-page/main-page";
import CreateProduct from "../components/createProduct/createProduct";
import UpdateProduct from "../components/updateProduct/updateProduct";
import ReadProduct from "../components/readProduct/readProduct";
import CartProducts from "../components/cartProducts/cartProducts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: < MainPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/add-product',
        element: <CreateProduct />
    },
    {
        path: '/edit-product/:id',
        element: <UpdateProduct />
    },
    {
        path: '/read-product/:id',
        element: <ReadProduct />
    },
    {
        path: '/cart-products',
        element: <CartProducts />
    },
]);