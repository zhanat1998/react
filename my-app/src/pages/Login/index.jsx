import { useEffect, useState } from "react";
import { Authorization, Registration } from "../../components/login";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, registerAction } from "../../store/login/action";
import { useNavigate } from "react-router-dom";
// import { loginAction, registerAction } from "../../store/login/action";


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(false);

    const onSubmit = (
        data
    ) => {
        if (isRegister) {
            dispatch(registerAction({
                navigate,
                username: data.username,
                password: data.password
            }));
        } else {
            dispatch(loginAction({ navigate, ...data }));
        }
    }

    if (isRegister) return <Registration onSubmit={onSubmit} setIsRegister={setIsRegister} />
    return <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister} />
}

export default LoginPage;