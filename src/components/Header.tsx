import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Service Area', href: '#service-area' },
  ];
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-white/80 shadow-md backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2">
          <span className="font-great-vibes text-3xl font-bold text-gray-800">
            Nicole's Aloha Touch Cleaning
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-lg font-medium text-gray-600 transition-colors hover:text-aloha"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg" className="bg-aloha text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-aloha-600 active:scale-95">
            <a href="#hero-form">Get My Free Quote</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-white md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium text-gray-600 transition-colors hover:text-aloha"
              >
                {link.name}
              </a>
            ))}
            <Button asChild size="lg" className="bg-aloha text-lg font-semibold text-white shadow-lg">
              <a href="#hero-form" onClick={(e) => scrollToSection(e, '#hero-form')}>Get My Free Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}