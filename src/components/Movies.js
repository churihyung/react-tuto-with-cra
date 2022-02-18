import propTypes from "prop-types";
import { Link, link } from "react-router-dom";

function Movies({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt={title}></img>
      <h3>
        <Link to="/detail">{title}</Link>
      </h3>
      <span>{summary}</span>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movies.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string,
  title: propTypes.string,
  summary: propTypes.string,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movies;
