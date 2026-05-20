import { RouterProvider } from 'react-router-dom';
import { router } from '@/app/router';
import { HiringRequirementModalProvider } from '@/context/HiringRequirementModalContext';

export default function App() {
  return (
    <HiringRequirementModalProvider>
      <RouterProvider router={router} />
    </HiringRequirementModalProvider>
  );
}
