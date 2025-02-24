import { useLocation, useNavigate } from 'react-router-dom';
import s from './GoBackBtn.module.css';
import { useRef } from 'react';


const GoBackBtn = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const backLink = useRef(location.state?.from ?? './movies');
    

    const handleGoBack = () => {
        navigate(backLink.current);
    };

    return (
        <button className={s.btm} onClick={handleGoBack}>
            Go Back
        </button>
    )

}
export default GoBackBtn;