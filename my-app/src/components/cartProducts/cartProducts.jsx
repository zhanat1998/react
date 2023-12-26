import { useDispatch, useSelector } from "react-redux"
import EachCart from "../eachCart/eachCart"
import Navbar from "../navbar"
import SearchBar from "../searchbar"
import { useEffect } from "react"
import { getCartAction } from "../../store/shop/action"
import s from './style.module.scss'

const CartProducts = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.data);
    useEffect(() => { dispatch(getCartAction()) }, [])
    return (
        <div>
            <Navbar />
            <h3>Корзина</h3>
            <div className={s.cartProducts}>
                {cart.map(item => <EachCart item={item} key={item.product.id} />)}
            </div>

        </div>
    )
}
export default CartProducts;