import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import SignIn from './pages/login';
import MUIDashboard from './pages/muiDashboard';
import Auth from './components/auth';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/mui',
    element: (
      <Auth>
        <MUIDashboard />
      </Auth>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
