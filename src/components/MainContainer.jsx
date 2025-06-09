import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovies = movies[0];

  const { original_title, overview, id } = mainMovies;

  console.log(overview);
  const shortOverview = overview?.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div>
      <VideoTitle title={original_title} overview={shortOverview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
