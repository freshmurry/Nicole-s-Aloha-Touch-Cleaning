import { Link } from 'react-router-dom';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" onClick={scrollToTop} className="flex items-center gap-2">
              <span className="font-great-vibes text-3xl font-bold text-gray-800">
                Nicole's Aloha Touch Cleaning
              </span>
            </a>
            <p className="mt-4 text-gray-500">
              Personalized cleaning, the Aloha way. Serving Northwest Indiana with a touch of care.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="text-gray-500 hover:text-aloha">Standard Cleaning</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-aloha">Deep Cleaning</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-aloha">Add-On Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/why-deep-cleaning-matters" className="text-gray-500 hover:text-aloha">Why Deep Cleaning Matters</Link></li>
              <li><Link to="/how-often-to-clean" className="text-gray-500 hover:text-aloha">Home Cleaning Guide</Link></li>
              <li><Link to="/cleaning-tips-indiana" className="text-gray-500 hover:text-aloha">Cleaning Tips for IN Homes</Link></li>
              <li><Link to="/why-local-cleaning" className="text-gray-500 hover:text-aloha">Why Local Matters</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-500">
              <li>St. John, IN</li>
              <li>(555) 123-4567</li>
              <li>contact@alohacleannwi.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Aloha Clean NWI. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}