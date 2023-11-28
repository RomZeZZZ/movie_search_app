import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/icons896.svg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_left_side}>
          <img className={styles.logo} src={logo} alt="NETFLIX" />
          <ul className={styles.navigation_tab}>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/series">Сериалы</Link>
            </li>
            <li>
              <Link to="/movies">Фильмы</Link>
            </li>
            <li>
              <Link to="/new_popular">Новинки и популярное</Link>
            </li>
            <li>
              <Link to="/mylist">Мой список</Link>
            </li>
          </ul>
        </div>
        <div className={styles.header_right_side}>
          <div>search</div>
        </div>
      </div>
    </header>
  );
}
export default Header;
