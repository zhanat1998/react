import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar"
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { readProductSlice } from "../../store/shop/action";
import s from './style.module.scss'
const ReadProduct = () => {
    const product = useSelector((state) => state.readReducer.data)
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(readProductSlice(params.id))
    }, [])
    return (
        <div>
            <Navbar />
            <section>
                <div className={s.container} >
                    <div className={s.info} >
                        <ul className={s.ul}>
                            <li className={s.main}><Link to={'/'}>Вернуться</Link></li>
                            <h1 className={s.info__title} >{product.title}</h1>
                            <li className={s.info__card} key={product.id}>
                                <div className={s.info__div}>
                                    <img className={s.info__image} src={product.image} />
                                </div>
                                <div className={s.description}>
                                    <p className={s.info__desc}><h3>Описание</h3> <br />{product.description}</p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>




        </div >
    )
}
export default ReadProduct;