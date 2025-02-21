import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation/Navigation'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { lazy, Suspense } from 'react'
import HomePage from './pages/HomePage/HomePage';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));



function App() {

  return (
    <>
        <Navigation />
        <Suspense>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route/>
          <Route/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        
    </>
  )
}

export default App
