import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log(detail);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={detail.large_cover_image} alt={detail.title}></img>
        <h3>{detail.title}</h3>
        <span>{`rating : ${detail.rating}`}</span>
        <ul>
          {detail.genres && detail.genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetail;
