import { useEffect } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product/product-card";
import SearchBar from "../../components/searchbar";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../store/shop/action";
import { useNavigate } from "react-router-dom";
import s from './style.module.scss'
const MainPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.shopReducer.data)
    // console.log(products, 'products')
    const navigate = useNavigate();
    const toCreateProduct = () => {
        navigate('/add-product')
    }
    useEffect(() => {
        dispatch(getProductsAction())
    }, [])
    return (
        <div>
            <Navbar />
            <SearchBar />
            <div className={s.sort}>
                <h1>Сортировать по:</h1>
                <p>Ценам</p>
                <p>Сначала новые</p>
                <p>Сначала старые</p>
                <p>Без фильтров</p>
            </div>
            <a href="" onClick={toCreateProduct}>создать товарь</a>
            <ul className={s.main__card}>
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </ul>

        </div>
    )
}
export default MainPage; 