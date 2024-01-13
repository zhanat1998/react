import { useDispatch } from "react-redux";
import { getCartAction, removeFromCartAction } from "../../store/shop/action";
import s from './style.module.scss'
const EachCart = ({ item }) => {
    const dispatch = useDispatch();
    const deleteCart = (e) => {
        e.preventDefault();
        dispatch(removeFromCartAction(item.product.id))
            .then(() => dispatch(getCartAction()))
    }

    return (
        <div className={s.card}>
            <img src={item.product.image} className={s.cardImg} alt="" />
            <div className={s.cardbody}>
                <h5 className={s.cardtitle}>{item.product.title}</h5>
                <p className={s.cardtext}>{item.product.price * item.quantity}</p>
                <a href="#" onClick={deleteCart} className={s.btnprimary}>удалить из корзины</a>
            </div>
        </div>
    )
}
export default EachCart;

