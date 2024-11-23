import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SignUpPage from './pages/sign-up';
import SignInPage from './pages/sign-in';
import MainPage from './pages/main';
import CreatePage from './pages/create';
import WaitPage from './pages/wait';
import MatchPage from './pages/match';
import TodayPage from './pages/today';
import MissionPage from './pages/mission';
import CheckPage from './pages/check';
import OpenPage from './pages/open';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'sign-up',
        element: <SignUpPage />,
      },
      {
        path: 'sign-in',
        element: <SignInPage />,
      },
      {
        path: 'main',
        element: <MainPage />,
      },
      {
        path: 'create',
        element: <CreatePage />,
      },
      {
        path: 'wait/:roomId',
        element: <WaitPage />,
      },
      {
        path: 'match/:roomId',
        element: <MatchPage />,
      },
      {
        path: 'today/:roomId',
        element: <TodayPage />,
      },
      {
        path: 'mission/:roomId',
        element: <MissionPage />,
      },
      {
        path: 'check/:roomId',
        element: <CheckPage />,
      },
      {
        path: 'open/:roomId',
        element: <OpenPage />,
      },
    ],
  },
]);
