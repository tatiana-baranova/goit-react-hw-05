import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTkxYzZmOWY4MDNkNTRjZjFjMGY0OTNjZmI0YTFmNSIsIm5iZiI6MTc0MDA3MjM4My4wODYwMDAyLCJzdWIiOiI2N2I3NjViZjQ0NGRkN2ZjZWZiYTExMGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yqPXzI2hDNp6xqFhzyaLfizzk6_WZ_ZG6G2pyIC6Ltw';

export const searchMovieTrending = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day`;
    const options = {
    headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
    },
};
    try {
        const response = await axios.get(url, options); 
        return response.data.results; 
    } catch (err) {
        console.error(err);
        return []; 
    }

};

export const fetchMovieSearch = async (query, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
        return response.data;
        })
        .catch(err => {
            console.error(err);
        });
};

export const fetchMovieDetails = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    try {
        const response = await axios.get(url, options); 
        
        return response.data;
    } catch (err) {
        if (err.response && err.response.status === 404) {
            console.error("Movie not found:", err.response.data.status_message);
        } else {
            console.error("API Fetch Error:", err.message);
        }
        return null;
    }
}

export const fetchMovieCredits = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
        return response.data;
        })
        .catch(err => {
            console.error(err);
        });
}


export const fetchMovieReviews = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    const options = {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            accept: 'application/json',
        },
    };

    return axios
        .get(url, options)
        .then(response => {
        return response.data;
        })
        .catch(err => {
            console.error(err);
        });
}
