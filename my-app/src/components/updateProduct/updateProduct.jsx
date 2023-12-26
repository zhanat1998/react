import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { getProdAction, updateProdAction } from "../../store/shop/action";
import { useForm } from "react-hook-form";
import s from './style.module.scss'

const UpdateProduct = () => {
    const product = useSelector((state) => state.updateReducer.data);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const onSubmit = (data) => {
        let product = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image,
        };
        let id = data.id;
        dispatch(updateProdAction({ id, navigate, ...product }));
    }


    useEffect(() => {
        dispatch(getProdAction(params.id))
    }, [])
    const {

        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm({
        defaultValues: {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        }
    });


    useEffect(() => {
        reset({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image
        })
    }, [product])
    return (

        // <div>
        //     <button onClick={toMain}>Отмена</button>
        //     <form onSubmit={handleSubmit(onSubmit)}>
        //         <div className="form-row">
        //             <div className="form-group col-md-6">
        //                 <input type="text" className="form-control"
        //                     id="inputEmail4" placeholder="Введите ссылку фото" {...register('image')} />
        //                 <input type="number" hidden={true}
        //                     {...register('id')} />
        //             </div>

        //             <div className="form-group col-md-6">
        //                 <input type="text"
        //                     className="form-control" id="inputPassword4"
        //                     placeholder="Введите название товара" {...register('title')} />
        //                 <input type="text"
        //                     className="form-control" id="inputPassword4"
        //                     placeholder="Введите описание товара" {...register('description')} />
        //                 <input type="text" className="form-control"
        //                     id="inputPassword4"
        //                     placeholder="Введите цену товара" {...register('price')} />
        //             </div>
        //         </div>
        //         <button type="submit" className="btn btn-primary" >Save</button>
        //     </form>

        // </div>
        <div className={s.block}>
            <form className={s.block__form} onSubmit={handleSubmit(onSubmit)} >
                <Link to={'/'} className={s.block__btn}><button type='button'>Отмена</button></Link>
                <div className={s.block__check}>
                    <div className={s.block__photo}>
                        <input type="text" className={s.img}
                            id="inputEmail4" placeholder="Введите ссылку фото" {...register('image')} />
                        <input type="number" hidden={true}{...register('id')} />
                    </div>
                    <div className={s.block__inp}>
                        <input className={s.inp} type="text" placeholder='Введите название товара' {...register('title')} />
                        <span className={s.post__error}>{errors?.title?.message}</span>
                        <input className={s.inp} type="text" placeholder='Введите описание товара' {...register('description')} />
                        <span className={s.post__error}>{errors?.description?.message}</span>
                        <input className={s.inp} type="number" placeholder='Введите цену товара' {...register('price')} />
                        <span className={s.post__error}>{errors?.price?.message}</span>
                    </div>
                </div>
                <div>
                    <button className={s.block__btn} type='submit'>Сохранит</button>
                </div>
            </form>
        </div>

    )
}
export default UpdateProduct;
