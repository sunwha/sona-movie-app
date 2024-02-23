import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contianer from "../components/Container";
import Loading from "../components/Loading";

function Detail() {
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const selectedMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${params.movieId}`
      )
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    selectedMovie();
  }, []);
  return (
    <Contianer>
      {loading ? (
        <Loading />
      ) : (
        <div className="px-5 py-10">
          <h1 className="text-center text-5xl pb-10">{movie.title}</h1>
          <div className="text-center">
            <img
              src={movie.large_cover_image}
              alt={`${movie.title}'s poster`}
              className="inline-block"
            />
          </div>
          <div className="p-10">
            <ul>
              {movie.synopsis ? (
                <li>
                  <strong className="text-bold">Synopsis</strong>:
                  <p>{movie.synopsis}</p>
                </li>
              ) : null}
              {movie.summary ? (
                <li>
                  <strong className="text-bold">Summary</strong>:
                  <p>{movie.summary}</p>
                </li>
              ) : null}
              {movie.description_full ? (
                <li>
                  <strong className="text-bold">Description</strong>:
                  <p>{movie.description_full}</p>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      )}
    </Contianer>
  );
}

export default Detail;
