import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import HomePage from '@/pages/marketing/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import TalentPage from '@/pages/talent/TalentPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'talent', element: <TalentPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
