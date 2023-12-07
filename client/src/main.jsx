import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage.jsx'
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/loginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/LoginPage',
        element: <LoginPage />
      }, 
      // {
      //   path: '/signup',
      //   element: <Signup />
      // }, 
      {
        path: '/profiles/:username',
        element: <Profile />
      }, 
      
      {
        path: '/quiz',
        element: <QuizPage />
      }
            
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
