import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

export default function PlaceholderPage({ title, description, primaryTo = '/' }) {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="mb-3 text-xs font-semibold tracking-widest text-nexa-purple-light uppercase">
        Coming soon
      </p>
      <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-nexa-gray">{description}</p>
      <Button className="mt-8" onClick={() => navigate(primaryTo)}>
        Back to home
      </Button>
    </section>
  );
}
