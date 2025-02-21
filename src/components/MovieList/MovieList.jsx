import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css'

const MovieList = ({ movies}) => {
    const location = useLocation();

    return (
        <>
            {movies && movies.length > 0 ? (
                <ul className={s.listMovies}>
                    {movies.map(({ id, title, poster_path }) => {
                        {poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : "https://via.placeholder.com/200x300"}
                        const urlImage = poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'https://via.placeholder.com/350x500?text=No+Image';

                        return (
                            <li key={id} className={s.item}>
                                <Link className={s.link} to={`/movies/${id}`} state={{ from: location }}>
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