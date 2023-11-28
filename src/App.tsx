import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import NotFound from './pages/NotFound/NotFound';
import './index.css';
import './normalize.css';
import Header from './components/header/Header';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import NewPage from './pages/NewAndPopularPage/NewAndPopularPage';
import MyListPage from './pages/MyListPage/MyListPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/new_popular" element={<NewPage />} />
      <Route path="/mylist" element={<MyListPage />} />
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  );
}
