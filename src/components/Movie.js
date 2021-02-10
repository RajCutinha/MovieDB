// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

//Hook
import useMovieFetch from "./hooks/useMovieFetch";

const Movie = ({ movieID }) => {
	const [movie, loading, error] = useMovieFetch(movieID);

	if (error) return <div>Something went wrong ...</div>;
	if (loading) return <Spinner />;

	return (
		<>
			<Navigation movie={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid header="Actors">
				{movie.actors.map((actor) => {
					return <Actor key={actor.credit_id} actor={actor} />;
				})}
			</Grid>
		</>
	);
};

export default Movie;
