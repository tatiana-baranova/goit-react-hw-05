import axios from "axios";

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkxYzZmOWY4MDNkNTRjZjFjMGY0OTNjZmI0YTFmNSIsIm5iZiI6MTc0MDA3MjM4My4wODYwMDAyLCJzdWIiOiI2N2I3NjViZjQ0NGRkN2ZjZWZiYTExMGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yqPXzI2hDNp6xqFhzyaLfizzk6_WZ_ZG6G2pyIC6Ltw';

export const searchMovieTrending = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const options = {
    headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
    },
};
    console.log(searchMovieTrending);
    
    return axios
        .get(url, options)
        .then(response => {
            response.data.results
        })
        .catch(err => {
            console.error(err);
    });
};

export const fetchMovieSearch = async (query, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}include_adult=false&language=en-US&page=${page}`;

    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
            response.data.results
        })
        .catch(err => {
            console.error(err);
        });
};

export const fetchMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/movie_id=${movieId}?language=en-US`;

    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
            response.data.results
        })
        .catch(err => {
            console.error(err);
        });
}

export const fetchMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/movie_id=${movieId}/credits?language=en-US`;

    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
            response.data.results
        })
        .catch(err => {
            console.error(err);
        });
}


export const fetchMovieReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/movie_id=${movieId}/reviews?language=en-US&page=1`;

    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
            response.data.results
        })
        .catch(err => {
            console.error(err);
        });
}
