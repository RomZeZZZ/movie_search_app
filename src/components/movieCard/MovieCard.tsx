/* eslint-disable react/destructuring-assignment */
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import styles from './MovieCard.module.css';

export function CardFront(card) {
  const backdropBase = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div data-testid="card" className={styles.card_container}>
      <img
        className={styles.card_container_img}
        loading="lazy"
        src={backdropBase + card.card.poster_path}
        alt="card"
      />
    </div>
  );
}
export function CardBackDrop(card) {
  const backdropBase = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div data-testid="card" className={styles.card_container}>
      <img
        className={styles.card_container_img_backdrop}
        loading="lazy"
        src={backdropBase + card.card.backdrop_path}
        alt="card"
      />
      <PlayCircleOutlineOutlinedIcon />
      <AddCircleOutlineOutlinedIcon />
      <ThumbUpOutlinedIcon />
      <ExpandCircleDownOutlinedIcon />
      <div className={styles.tmdbRank}>TMDB {card.card.vote_average}</div>
      <div className={styles.card_container_info}>
        <div>Name: {card.card.title}</div>
        <div>Overview: {card.card.overview}</div>
      </div>
    </div>
  );
}
