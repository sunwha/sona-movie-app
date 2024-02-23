import { useEffect, useState } from "react";
import Contianer from "../components/Container";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Contianer>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-5 py-10">
          <div>
            <h2 className="text-2xl font-bold">
              2024's Journey Through the Year's Top-Rated Films
            </h2>
            <p className="pt-2">
              Exploring the Cinematic Gems of 2024: Unveiling the Year's
              Top-Rated Films Welcome, fellow cinephiles, to a journey through
              the cinematic wonders of 2024! As we bid farewell to another
              remarkable year in film, it's time to celebrate the masterpieces
              that have graced the silver screen and captured the hearts and
              imaginations of audiences worldwide. From pulse-pounding thrillers
              to poignant dramas and captivating epics, 2024 has delivered a
              diverse array of cinematic experiences that have left an indelible
              mark on the landscape of storytelling. Join us as we embark on a
              thrilling odyssey through the year's top-rated films, each a
              shining beacon of creativity, craftsmanship, and storytelling
              prowess. So, grab your popcorn, settle into your favorite
              armchair, and let the magic of cinema transport you to worlds
              beyond imagination.
            </p>
          </div>
          <div className="pt-10">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                synopsis={movie.synopsis}
                genres={movie.genres}
                rating={movie.rating}
                url={movie.url}
              />
            ))}
          </div>
        </div>
      )}
    </Contianer>
  );
}

export default Home;
