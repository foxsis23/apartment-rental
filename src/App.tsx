import { createBrowserRouter, RouterProvider } from 'react-router';
import MainView from '@/views/MainView';
import ApartmentDetailView from '@/views/ApartmentDetailView';
import { Layout } from '@/components/layout/Layout.tsx';
import OrganizersView from '@/views/OrganizersView';
import AddApartmentView from '@/views/AddApartmentView';
import { Toaster } from '@/components/ui/sonner';
import { FavoritesProvider } from '@/lib/context/useFavoriteContext.tsx';
import EditApartmentView from '@/views/EditApartmentView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainView /> },
      { path: '/apartments/:id', element: <ApartmentDetailView /> },
      { path: '/organizers', element: <OrganizersView /> },
      { path: '/add-apartment', element: <AddApartmentView /> },
      { path: '/apartment/edit/:id', element: <EditApartmentView /> },
    ],
  },
]);

function App() {
  return (
    <>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
      <Toaster />
    </>
  );
}

export default App;
