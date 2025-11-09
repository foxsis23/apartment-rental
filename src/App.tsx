import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainView from '@/views/MainView';
import ApartmentDetailView from '@/views/ApartmentDetailView';
import { Layout } from '@/components/layout/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainView /> },
      { path: '/apartments/:id', element: <ApartmentDetailView /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
