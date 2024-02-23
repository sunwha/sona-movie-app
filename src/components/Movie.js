import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, synopsis, genres, rating, url }) {
  return (
    <div className="border-t flex flex-column">
      <div className="p-5 shrink-0">
        <img src={coverImg} alt={`${title}'s poster`} />
      </div>
      <div className="py-5 grow-0 shrink">
        <h3 className="text-lg pb-2 hover:bg-sky-700">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <p>
          <strong className="font-blod">URL</strong>:{" "}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title="Open in New Tab"
            className="hover:bg-sky-700"
          >
            {url}
          </a>
        </p>
        {synopsis ? (
          <p className="text-ellipsis overflow-hidden line-clamp-4">
            <strong className="font-blod">Synopsis</strong>: {synopsis}
          </p>
        ) : null}
        <p>
          <strong className="font-blod">Rating</strong>: {rating}
        </p>
        <div>
          <strong className="font-blod">Genres</strong>:
          <ul className="list-disc pl-5">
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  synopsis: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
