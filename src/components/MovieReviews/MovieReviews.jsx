import s from './MovieReviews.module.css'
import { fetchMovieReviews } from '../../service/api'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { FaUser } from 'react-icons/fa';

const MovieReviews = () => {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getData = async () => {
            if (!movieId) return;
            try {
                setIsLoading(true);
                const data = await fetchMovieReviews(movieId, page);
                setReviews(data.results);
                setTotalPages(data.total_pages);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getData();
    }, [movieId, page]);

    const handleNextPage = () => {
    setPage(prev => prev + 1);
    };

    return (
            <div className={s.wrapReviews}>
            {isError && <ErrorMessage />}
            {isLoading && <Loader />}
            <h2 className={s.title}>Reviews</h2>
            {reviews.length > 0 ? (
                <ul className={s.list}>
                    {reviews.map(review => (
                        <li key={review.id} className={s.info}>
                            <FaUser className={s.icon} size="18" />
                            <h3 className={s.author}>{review.author}</h3>
                            <p className={s.content}>{review.content}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={s.pReviews}>No reviews</p>
            )}
        {page < totalPages && (
        <button className={s.btn} onClick={handleNextPage}>
            More
        </button>
        )}
        </div>
    );
}

export default MovieReviews;