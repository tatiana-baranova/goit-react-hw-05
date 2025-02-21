import { useEffect, useState } from 'react';
import { searchMovieTrending } from './../../service/api'
import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    // const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        searchMovieTrending().then(data => setMovies(data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            {isLoading && <Loader/>}
            <h1 className={s.title}>Trending Movies</h1>
            <MovieList movies={movies} isLoading={isLoading}/>
        </div>
    )
};

export default HomePage;