import Cookies from 'js-cookie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllAssements from './pages/AllAssements';
import { Assessment } from './pages/Assessment';
import { HomeAssessment } from './pages/HomeAssessment';
import { Login } from './pages/Login';
import { Success } from './pages/Success';

export const MyRoutes = () => {
	const token = Cookies.get('user');

	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={token ? <HomeAssessment /> : <Login />} />
				<Route
					path="/assessment"
					element={token ? <Assessment /> : <Login />}
				/>
				<Route
					path="/allassessments"
					element={token ? <AllAssements /> : <Login />}
				/>
				<Route path="success" element={token ? <Success /> : <Login /> }/>
			</Routes>
		</Router>
	);
};
