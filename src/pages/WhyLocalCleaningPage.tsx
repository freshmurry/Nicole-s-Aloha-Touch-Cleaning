import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
export function WhyLocalCleaningPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Choosing a Local Cleaning Service Matters in NWI",
    "author": {
      "@type": "Organization",
      "name": "Aloha Clean NWI"
    },
    "description": "Discover the benefits of hiring a local, community-focused cleaning service in Northwest Indiana over a large national chain."
  };
  return (
    <>
      <Seo
        title="Why Local Cleaning Matters in NWI"
        description="Support your community and get personalized service. Learn why choosing a local cleaning company in St. John and surrounding areas is the better choice."
        keywords="local cleaning service, support local business nwi, personalized cleaning st john, community focused business, northwest indiana"
        schema={pageSchema}
      />
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Why Choosing a Local Cleaning Service Matters</h1>
            <p className="lead mt-6 text-xl text-gray-600">
              When you need your home cleaned, you have a choice: a big national franchise or a local, community-based business. For your Northwest Indiana home, the choice is clear. Here’s why local matters.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-gray-800">Personalized Service and Flexibility</h2>
            <p>
              As a local business, we're not bound by rigid corporate policies. We know our clients in St. John and Munster by name, not by an account number. We can tailor our services to your specific needs and schedule, offering a level of flexibility that large chains simply can't match.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">You're Supporting Your Neighbors</h2>
            <p>
              When you hire Aloha Clean NWI, your money stays right here in the community. You're helping a local entrepreneur, supporting local jobs, and contributing to the local economy. We shop at the same stores, our kids might go to the same schools—we're part of the same community fabric.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Higher Accountability and Trust</h2>
            <p>
              Our reputation in towns like Highland and Schererville is everything. We're accountable to our neighbors, which means we're deeply committed to providing exceptional quality and reliable service. You can trust that the person cleaning your home is a dedicated professional who cares about their work and your satisfaction.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Local Expertise</h2>
            <p>
              We understand the specific cleaning challenges of Northwest Indiana because we live here too. From hard water buildup to seasonal allergens, we have the local knowledge to tackle the issues unique to our area effectively.
            </p>
            <div className="mt-12 rounded-lg bg-aloha-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-aloha-800">Experience the Local Difference</h3>
              <p className="mt-4 text-lg text-aloha-700">
                Choose a cleaning service that cares about your home and our community.
              </p>
              <Button asChild size="lg" className="mt-6 bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95">
                <Link to="/#hero-form">Get Your Free Quote</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}