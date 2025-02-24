import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css'

const MovieList = ({ movies}) => {
    const location = useLocation();

    return (
        <>
            {movies && movies.length > 0 ? (
                <ul className={s.listMovies}>
                    {movies.map(({ id, title, poster_path, index }) => {
                        {poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : "https://via.placeholder.com/200x300"}
                        const movieId = id ?? `temp-${index}`;
                        const urlImage = poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'https://www.movienewz.com/img/films/poster-holder.jpg';

                        return (
                            <li key={`${id}-${index}`} className={s.item}>
                                <Link className={s.link} to={`/movies/${movieId}`} state={{ from: location }}>
                                    <img src={urlImage} alt={title} className={s.img}/>
                                    <p className={s.titleImg}>{title}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className={s.text}>No movies</p>
            )}
        </>
    );
};

export default MovieList;