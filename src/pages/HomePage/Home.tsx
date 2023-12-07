import { useEffect, useState } from 'react';
import ReactFlipCard from 'reactjs-flip-card';
import { CardBackDrop, CardFront } from '../../components/movieCard/MovieCard';
import getMovies from '../../fetches/fetchMovies';
import styles from './Home.module.css';

function Home() {
  const [movies, setMoviesDb] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await getMovies();
        setMoviesDb(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, []);
  const style = {
    card: {
      background: '#141414',
      color: 'white',
      boxShadow: '10px 4px 10px rgba(0, 0, 0, 0.6)',
    },
    container: {
      padding: '10px',
      width: '300px',
      height: '450px',
    },
  };
  return (
    <main className={styles.main}>
      <div data-testid="results-container" className={styles.card_field}>
        {movies.length !== 0 ? (
          <>
            {movies.map((item) => (
              <ReactFlipCard
                containerStyle={style.container}
                key={item.id}
                frontStyle={style.card}
                backStyle={style.card}
                frontComponent={<CardFront card={item} />}
                backComponent={<CardBackDrop card={item} />}
              />
            ))}
          </>
        ) : (
          <div>lOADING....</div>
        )}
      </div>
    </main>
  );
}
export default Home;
