import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
export function CleaningTipsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top 5 Cleaning Tips for Homes in Northwest Indiana",
    "author": {
      "@type": "Organization",
      "name": "Aloha Clean NWI"
    },
    "description": "Practical cleaning tips to tackle the unique challenges of Indiana weather, from spring pollen to winter salt stains."
  };
  return (
    <>
      <Seo
        title="Cleaning Tips for Indiana Homes"
        description="Keep your Northwest Indiana home sparkling with these five essential cleaning tips for every season. From Crown Point to Munster, we've got you covered."
        keywords="indiana cleaning tips, seasonal cleaning nwi, winter salt stain removal, spring cleaning pollen, fall cleaning tips"
        schema={pageSchema}
      />
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Top 5 Cleaning Tips for Northwest Indiana Homes</h1>
            <p className="lead mt-6 text-xl text-gray-600">
              Living in NWI means dealing with all four seasons in full force. Here are some practical tips to keep your home clean and comfortable year-round.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-gray-800">1. Combat Spring Pollen</h2>
            <p>
              When everything starts blooming around St. John, a yellow-green dust covers everything. Regularly wipe down windowsills and surfaces with a damp microfiber cloth. Changing your furnace filter monthly during spring can also dramatically reduce indoor allergens.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">2. Manage Summer Humidity</h2>
            <p>
              Humid Indiana summers can promote mold and mildew growth, especially in bathrooms and basements. Use exhaust fans during and after showers, and consider a dehumidifier for damp areas. A diluted white vinegar solution is great for wiping down shower walls to prevent mildew.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">3. Clean Up After Fall Leaves</h2>
            <p>
              The beautiful autumn leaves in Highland and Crown Point can get tracked inside, bringing dirt and moisture. Use durable doormats at every entrance and encourage a "shoes-off" policy. Regularly sweep or vacuum entryways to prevent grit from scratching your floors.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">4. Tackle Winter Salt Stains</h2>
            <p>
              The salt used on Schererville roads is a lifesaver for driving but a nightmare for floors. Create a mixture of equal parts white vinegar and warm water to mop away the white, hazy residue from hardwood or tile floors. For carpets, blot the area with the same solution.
            </p>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">5. Use Professional Help for the Big Stuff</h2>
            <p>
              While these tips help with maintenance, nothing replaces a seasonal <Link to="/why-deep-cleaning-matters">deep clean</Link>. Professionals have the tools and expertise to tackle the deep-seated dirt that builds up over time, ensuring your home is truly clean.
            </p>
            <div className="mt-12 rounded-lg bg-aloha-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-aloha-800">Need a Hand Keeping Up?</h3>
              <p className="mt-4 text-lg text-aloha-700">
                Aloha Clean NWI is here to help with regular maintenance or a one-time deep clean. Let us bring the Aloha spirit to your home!
              </p>
              <Button asChild size="lg" className="mt-6 bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95">
                <Link to="/#hero-form">Get a Free Estimate</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}