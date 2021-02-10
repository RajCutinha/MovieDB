import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { Router } from "@reach/router";

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Home path="/" />
				<Movie path="/:movieID" />
				<NotFound default />
			</Router>
		</div>
	);
};

export default App;
