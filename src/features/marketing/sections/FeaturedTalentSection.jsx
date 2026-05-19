import { useNavigate } from 'react-router-dom';
import CandidateCard from '@/features/marketing/components/CandidateCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { FEATURED_CANDIDATES } from '@/data/marketing/candidates';

export default function FeaturedTalentSection() {
  const navigate = useNavigate();

  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-10" aria-labelledby="featured-talent-heading">
      <SectionHeader
        tag="Top talent"
        title={
          <>
            Featured <span className="text-nexa-blue">prescreened</span> profiles
          </>
        }
        description="Verified, interview-ready candidates across key tech and business roles."
      />

      <div className="mx-auto grid max-w-[1100px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_CANDIDATES.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onAction={() => navigate('/talent')}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Button variant="outline" onClick={() => navigate('/talent')}>
          View all profiles →
        </Button>
      </div>
    </section>
  );
}
