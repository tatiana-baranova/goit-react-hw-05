import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Navigation from './components/Navigation/Navigation'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { lazy, Suspense } from 'react'
// import HomePage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'))
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))

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
            {/* <Route path='reviews' element={ } /> */}
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        
    </>
  )
}

export default App
