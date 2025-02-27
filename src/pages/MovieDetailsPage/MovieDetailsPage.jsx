import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import s from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../service/api';
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            // if (!movieId) return;
            try {
                setIsLoading(true);
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [movieId]);

    const urlImage = movie && movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : 'https://www.movienewz.com/img/films/poster-holder.jpg';

    return movie ? (
        <>
            <div className={s.container}>
                <GoBackBtn />
                {isLoading && <Loader/>}
                <div className={s.wrapper}>
                <div className={s.wrap}>
                        <img src={urlImage} alt={movie.title} className={s.img}/>
                </div>
                <div className={s.infoMovie}>
                    <div>
                        <h2 className={s.title}>{movie.title}</h2>
                        <p className={s.score}>Score: {Math.round(movie.vote_average * 10)}%</p>
                        <p className={s.release}>Release date: {movie.release_date}</p>
                        <h3 className={s.subtitle}>Runtime: {movie.runtime} minutes</h3> 
                        <p className={s.overviews}>Overviews: {movie.overview}</p>
                        {/* <p>Rating: {movie.vote_average}</p> */}
                    </div>
                    <div className={s.textWrap}>
                    <h3 className={s.subtitle}>Genres:</h3>
                    <ul className={s.list}>
                    {movie.genres.map(genre => (
                        <li className={s.text} key={genre.id}>
                        {genre.name}
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
                    {isError && <ErrorMessage />}
            </div>
        <nav className={s.navMovie}>
                    <NavLink className={buildLinkClass} to='cast'>Cast</NavLink>
                    <NavLink className={buildLinkClass} to='reviews'>Reviews</NavLink>
                </nav>
                <Outlet/>
        </>
    ) : (
        <p>Not Found</p>
    );

}

export default MovieDetailsPage;