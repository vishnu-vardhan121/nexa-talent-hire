import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import AboutPage from '@/pages/About';
import ContactPage from '@/pages/Contact';
import DashboardPage from '@/pages/dashboard/DashboardPage';
import HomePage from '@/pages/marketing/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy';
import TalentPage from '@/pages/talent/TalentPage';
import TermsAndConditionsPage from '@/pages/TermsAndConditions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-and-conditions', element: <TermsAndConditionsPage /> },
      { path: 'talent', element: <TalentPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
