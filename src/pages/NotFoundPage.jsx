import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="font-display text-6xl font-extrabold text-nexa-purple-light">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-nexa-gray">The page you requested does not exist.</p>
      <Button className="mt-8" onClick={() => navigate('/')}>
        Go home
      </Button>
    </section>
  );
}
