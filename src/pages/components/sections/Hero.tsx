import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function Hero() {
  return (
    <section className="py-20 px-4">
    <div className="container mx-auto text-center">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Know Your Strengths,
          <br />
          <span className="text-secondary">Unlock New Opportunities</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover your professional strengths and identify growth opportunities with our intelligent skill
          profiling system. Take the first step towards career advancement today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
            <Link href="/skill-check">Start Skill Check</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>    
  )
}