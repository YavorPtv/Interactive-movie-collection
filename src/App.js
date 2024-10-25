import './App.css';
import Navigation from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import AddMovie from './pages/AddMovie';
import Home from './pages/Home';
import {MovieProvider} from './context/MoviesContext';

function App() {
	return (
		<MovieProvider>
			<Router>
				<header>
					<Navigation />
				</header>

				<Routes>
					<Route path='/' element={<Home />} />
					{/*<Route path="/books" element={<MovieList />} />*/}
					<Route path="/movie-details" element={<MovieDetails />} />
					<Route path="/add-movie" element={<AddMovie />} />
				</Routes>
			</Router>	
		</MovieProvider>
		
	);
}

export default App;
