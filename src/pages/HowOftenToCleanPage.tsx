import { Seo } from '@/components/Seo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
export function HowOftenToCleanPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Often to Clean Your Home: A Guide for NWI Residents",
    "author": {
      "@type": "Organization",
      "name": "Aloha Clean NWI"
    },
    "description": "A practical cleaning schedule for residents of St. John, Munster, and Northwest Indiana to keep their homes fresh and healthy year-round."
  };
  return (
    <>
      <Seo
        title="How Often to Clean Your Home: NWI Guide"
        description="A practical guide for Northwest Indiana residents on creating a cleaning schedule. Learn what to clean daily, weekly, monthly, and seasonally."
        keywords="home cleaning schedule, how often to clean, cleaning guide northwest indiana, weekly cleaning checklist, monthly cleaning tasks"
        schema={pageSchema}
      />
      <div className="bg-white py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="prose lg:prose-xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">How Often to Clean Your Home: A Guide for NWI Residents</h1>
            <p className="lead mt-6 text-xl text-gray-600">
              Keeping a home clean can feel like a never-ending task. Creating a schedule can make it manageable and ensure your home is always a pleasant place to be. Here’s a practical guide for your Northwest Indiana home.
            </p>
            <h2 className="mt-12 text-3xl font-bold text-gray-800">Daily Tasks (5-10 Minutes)</h2>
            <ul>
              <li>Make your bed</li>
              <li>Wipe down kitchen counters and sink</li>
              <li>Sweep kitchen floor</li>
              <li>Tidy up clutter</li>
            </ul>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Weekly Tasks (1-2 Hours)</h2>
            <ul>
              <li>Clean bathrooms (toilets, showers, sinks, mirrors)</li>
              <li>Dust all surfaces</li>
              <li>Vacuum carpets and mop hard floors</li>
              <li>Change bed linens</li>
              <li>Empty all trash cans</li>
            </ul>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Monthly Tasks</h2>
            <ul>
              <li>Wipe down baseboards and light fixtures</li>
              <li>Clean inside of microwave and oven</li>
              <li>Vacuum upholstery and under furniture</li>
              <li>Wash shower curtain liner</li>
            </ul>
            <h2 className="mt-8 text-3xl font-bold text-gray-800">Seasonally / Annually</h2>
            <p>
              This is where a professional service can make a huge difference. We recommend a professional <Link to="/why-deep-cleaning-matters">deep clean</Link> 1-2 times a year.
            </p>
            <ul>
              <li>Wash windows, inside and out</li>
              <li>Clean carpets and upholstery</li>
              <li>Clean out gutters (a must for Indiana weather!)</li>
              <li>Wash walls and ceilings</li>
            </ul>
            <div className="mt-12 rounded-lg bg-aloha-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-aloha-800">Feeling Overwhelmed? We Can Help.</h3>
              <p className="mt-4 text-lg text-aloha-700">
                Let Aloha Clean NWI handle the weekly, monthly, or seasonal cleaning so you can focus on what matters most.
              </p>
              <Button asChild size="lg" className="mt-6 bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95">
                <Link to="/#hero-form">Request a Custom Cleaning Plan</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}