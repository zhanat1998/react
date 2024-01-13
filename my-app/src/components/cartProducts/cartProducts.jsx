import { useDispatch, useSelector } from "react-redux"
import EachCart from "../eachCart/eachCart"
import Navbar from "../navbar"
import { useEffect } from "react"
import { getCartAction, removeAllCartAction } from "../../store/shop/action"
import s from './style.module.scss'

const CartProducts = () => {
    const dispatch = useDispatch();
    const deleteAllCart = (e) => {
        e.preventDefault();
        dispatch(removeAllCartAction())
            .then(() => dispatch(getCartAction()))
    }
    const cart = useSelector((state) => state.cartReducer.data);
    useEffect(() => { dispatch(getCartAction()) }, [])
    return (
        <div>
            <Navbar />
            <div>
                <h3>Корзина</h3>
                <a onClick={deleteAllCart} href="">очистить корзину</a>
            </div>
            <div className={s.cartProducts}>
                {cart.map(item => <EachCart item={item} key={item.product.id} />)}
            </div>

        </div>
    )
}
export default CartProducts;