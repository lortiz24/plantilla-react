import { Routes, Route } from 'react-router-dom';
import { HomeView } from '../views/home/HomeView';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeView />}></Route>
		</Routes>
	);
};
