import { ClimbingBoxLoader } from 'react-spinners';
import s from './Loader.module.css'

const Loader = (isLoading) => {

    return (
        <div className={s.wrap}>
            <ClimbingBoxLoader
                className={s.loader}
                color="#de4f4f"
                loading={isLoading}
                size={18}
                speedMultiplier={1.5}
            />
        </div>
    );
    
};

export default Loader;