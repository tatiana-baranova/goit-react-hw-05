import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'))

function App() {

  return (
    <>
        <Navigation />
        <Suspense>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={ <MovieReviews/>} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        
    </>
  )
}

export default App
