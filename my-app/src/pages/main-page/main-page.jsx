import { useEffect } from "react";
import Navbar from "../../components/navbar";
import ProductCard from "../../components/product/product-card";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../store/shop/action";
import { Link, useNavigate } from "react-router-dom";
import s from './style.module.scss'
import SearchBar from "../../components/searchBar/searchBar";
import { reset, sortByPrice, sortNew, sortOld } from "../../store/shop/slice";
const MainPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.shopReducer.data)
    const navigate = useNavigate();
    const toCreateProduct = () => {
        navigate('/add-product')
    }
    useEffect(() => {
        dispatch(getProductsAction())
    }, [])
    const handleSortPrice = (e) => {
        e.preventDefault();
        dispatch(sortByPrice());

    };
    const handleSortNew = (e) => {
        e.preventDefault();
        dispatch(sortNew());

    };
    const handleSortOld = (e) => {
        e.preventDefault();
        dispatch(sortOld());

    }
    const handleReset = (e) => {
        e.preventDefault();
        dispatch(reset());

    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    };
    return (
        <div>
            <div>
                <Navbar />
                <ul>
                    {localStorage.getItem('token') ? <li> <button
                        onClick={handleLogout}>Выйти</button> </li> : <li className={s.header_login}>
                        <Link to={'/login'}>login</Link></li>}
                </ul>
            </div>
            <SearchBar />
            <div className={s.sort}>
                <h5>Сортировать по:</h5>
                <button onClick={handleSortPrice}>Ценам</button>
                <button onClick={handleSortNew}>Сначала новые</button>
                <button onClick={handleSortOld}>Сначала старые</button>
                <button onClick={handleReset}>Без фильтров</button>
            </div>

            <ul className={s.main__card}>
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </ul>
            <ul className={s.ul__post}>
                <li className={s.post__li} onClick={toCreateProduct}>Создать товар</li>
            </ul>

        </div>
    )
}
export default MainPage; 