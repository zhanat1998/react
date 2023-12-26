import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createProductAction } from "../../store/shop/action";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        let product = {
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image
        }
        dispatch(createProductAction({ navigate, ...product }));
    }

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm();

    const toMain = () => {
        navigate('/')
    }
    return (

        <div>
            <button onClick={toMain}>Отмена</button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control"
                            id="inputEmail4" placeholder="Введите ссылку фото" {...register('image')} />
                    </div>
                    <div className="form-group col-md-6">
                        <input type="text"
                            className="form-control" id="inputPassword4"
                            placeholder="Введите название товара" {...register('title')} />
                        <input type="text"
                            className="form-control" id="inputPassword4"
                            placeholder="Введите описание товара" {...register('description')} />
                        <input type="text" className="form-control"
                            id="inputPassword4"
                            placeholder="Введите цену товара" {...register('price')} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Save</button>
            </form>

        </div>


    )
}
export default CreateProduct;