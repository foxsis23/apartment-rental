import { createBrowserRouter, RouterProvider } from 'react-router';
import MainView from '@/views/MainView';
import ApartmentDetailView from '@/views/ApartmentDetailView';
import { Layout } from '@/components/layout/Layout.tsx';
import OrganizersView from '@/views/OrganizersView';
import AddApartmentView from '@/views/AddApartmentView';
import { Toaster } from '@/components/ui/sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainView /> },
      { path: '/apartments/:id', element: <ApartmentDetailView /> },
      { path: '/organizers', element: <OrganizersView /> },
      { path: '/add-apartment', element: <AddApartmentView /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
