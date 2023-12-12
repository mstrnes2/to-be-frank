import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import Profile from './pages/ProfilePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/loginPage';
import QuestionOnePage from './pages/QuestionOnePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/LoginPage',
				element: <LoginPage />,
			},
			{
				path: '/Profile',
				element: <Profile />,
			},
			{
				path: '/questionOne',
				element: <QuestionOnePage />,
			},
			{
				path: '/QuizPage',
				element: <QuizPage />,
			},
		],
	},
]);

//manually define routes for pages

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
