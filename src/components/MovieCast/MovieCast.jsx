import s from './MovieCast.module.css';
import { fetchMovieCredits } from '../../service/api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MovieCast= () => {

    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            if (!movieId) return;
            try {
                setIsLoading(true);
                const data = await fetchMovieCredits(movieId,);
                setCredits(data.cast || [])
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [movieId]);

    return (
        <>
                <div className={s.wrap}>
                {isError && <ErrorMessage />}
                {isLoading && <Loader />}
                    <h2 className={s.title}>Actors</h2>
                <ul className={s.listActor}>
                    {credits.map(({ id, name, profile_path, character }) => {
                        const urlImage = profile_path
                            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                            : 'https://via.placeholder.com/350x500?text=No+Image';

                        return (
                            <li key={id} className={s.list}>
                                <img src={urlImage} alt={name} className={s.img} />
                                <h3 className={s.nameActor}>{name}</h3>
                                <p className={s.text}>Character: {character}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        
        </>
    )


}

export default MovieCast;