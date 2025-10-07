import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
export function WhyDeepCleaningMattersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Deep Cleaning Matters for Homes in Northwest Indiana",
    "author": {
      "@type": "Organization",
      "name": "Aloha Clean NWI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aloha Clean NWI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.imgur.com/2vG2E0s.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "description": "Discover the essential benefits of deep cleaning for maintaining a healthy, happy home in Northwest Indiana communities like St. John, Crown Point, and Munster."
  };
  return (
    <>
      <Seo
        title="Why Deep Cleaning Matters in Northwest Indiana"
        description="Learn about the health benefits, improved air quality, and long-term savings of professional deep cleaning services in St. John, Munster, and surrounding NWI areas."
        keywords="deep cleaning northwest indiana, home health st john in, allergy relief cleaning munster, professional deep clean crown point, move in cleaning schererville"
        schema={pageSchema}
      />
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Why Deep Cleaning Matters in Northwest Indiana</h1>
            <p className="lead mt-6 text-xl text-gray-600">
              Beyond the weekly wipe-down, a professional deep clean is one of the best investments you can make for your home and family's health, especially in the unique climate of Northwest Indiana.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-gray-800">Eliminate Hidden Germs and Allergens</h2>
            <p>
              From the spring pollen in Crown Point to the dust that settles during long Schererville winters, our homes trap allergens. A standard clean might miss the dust mites, pet dander, and mold spores hiding in carpets, upholstery, and air vents. A deep clean targets these hidden areas, drastically improving indoor air quality and reducing allergy and asthma triggers.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Extend the Life of Your Home</h2>
            <p>
              Dirt and grime aren't just unsightly; they're corrosive. Grit can wear down carpet fibers, acidic spills can etch countertops, and soap scum can damage bathroom fixtures. Regular deep cleaning removes this build-up, protecting your investment and saving you from costly repairs or replacements down the line. It's proactive maintenance for your biggest asset.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Reduce Stress and Improve Mental Well-being</h2>
            <p>
              Living in a cluttered, dirty space contributes to stress and anxiety. Coming home to a thoroughly cleaned and organized environment in Munster or Highland provides a sense of calm and control. It's not just about a clean space; it's about creating a sanctuary where you can relax and recharge.
            </p>
            <div className="mt-12 rounded-lg bg-aloha-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-aloha-800">Ready for a Truly Clean Home?</h3>
              <p className="mt-4 text-lg text-aloha-700">
                Experience the Aloha Clean difference. Let us handle the deep work so you can enjoy a healthier, happier home.
              </p>
              <Button asChild size="lg" className="mt-6 bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95">
                <Link to="/#hero-form">Get Your Free Quote Today</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}