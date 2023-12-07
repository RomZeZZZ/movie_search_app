import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import styles from './Header.module.css';
import logo from '../../assets/icons896.svg';
import SearchBar from '../searchBar/SearchBar';

function Header() {
  const [ativeLink, setActiveLink] = useState('Home');
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_left_side}>
          <img className={styles.logo} src={logo} alt="NETFLIX" />
          <ul className={styles.navigation_tab}>
            <li>
              <Link
                className={
                  ativeLink === 'Home' ? styles.activeLink : styles.link
                }
                to="/"
                onClick={() => setActiveLink('Home')}
              >
                Главная
              </Link>
            </li>
            <li>
              <Link
                className={
                  ativeLink === 'Series' ? styles.activeLink : styles.link
                }
                to="/series"
                onClick={() => setActiveLink('Series')}
              >
                Сериалы
              </Link>
            </li>
            <li>
              <Link
                className={
                  ativeLink === 'Movies' ? styles.activeLink : styles.link
                }
                to="/movies"
                onClick={() => setActiveLink('Movies')}
              >
                Фильмы
              </Link>
            </li>
            <li>
              <Link
                className={
                  ativeLink === 'New_popular' ? styles.activeLink : styles.link
                }
                to="/new_popular"
                onClick={() => setActiveLink('New_popular')}
              >
                Новинки и популярное
              </Link>
            </li>
            <li>
              <Link
                className={
                  ativeLink === 'Mylist' ? styles.activeLink : styles.link
                }
                to="/mylist"
                onClick={() => setActiveLink('Mylist')}
              >
                Мой список
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.header_right_side}>
          <SearchBar />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
export default Header;
