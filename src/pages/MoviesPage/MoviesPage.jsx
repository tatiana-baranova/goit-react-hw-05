import { fetchMovieSearch } from '../../service/api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar';
import s from './MoviesPage.module.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [movie, setMovie] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchMovieSearch(query, page);
                // console.log("Fetched data:", data);
                const searchMovie = data.results;
                setIsLoading(true);
                setMovie(prev => [...prev, ...searchMovie]);
                const totalPageData = data.total_pages;
                setTotalPages(totalPageData);
            } catch (error) {
                console.error("Fetch error:", error);
                setMovie([])
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [query, page, navigate]);

    const handleChangeQuery = newQuery => {
        if (!newQuery) {
            return setSearchParams({});
        }

        setSearchParams({ query: newQuery }); // Правильний спосіб оновлення параметрів
        setMovie([]);
        setPage(1);
        // searchParams.set('query', newQuery);
        // setSearchParams(searchParams);
        // setMovie([]);
        // setPage(1);
    };

    const loadMoreMovies = () => {
    setPage(prev => prev + 1);
};
    return (
        <div className={s.wrapper}>
            <SearchBar setQuery={handleChangeQuery} />
            {isLoading && <Loader />}
            {movie.length > 0 && <MovieList movies={movie} />}
            {movie.length > 0 && page < totalPages && (
                <button className={s.btn} onClick={loadMoreMovies}>
                    Load More
                </button>
            )}
        </div>
    )


};

export default MoviesPage;