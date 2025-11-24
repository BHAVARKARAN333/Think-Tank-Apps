import { useState, useEffect } from 'react';
import { Smartphone, Menu, X, Shield } from 'lucide-react';

interface NavbarProps {
  onPrivacyClick?: () => void;
  currentPage?: 'home' | 'privacy' | 'terms';
}

export function Navbar({ onPrivacyClick, currentPage = 'home' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section only on home page
      if (currentPage === 'home') {
        const sections = ['home', 'apps', 'about', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'apps', label: 'Our Apps' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
              <Smartphone className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[#0B1E2D] tracking-tight" style={{ fontSize: '22px', fontWeight: 700 }}>
              Think Tank Apps
            </span>
          </button>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-2">
            {currentPage === 'home' ? (
              <>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-5 py-2.5 rounded-full transition-all ${
                      activeSection === item.id
                        ? 'bg-[#008037] text-white shadow-md'
                        : 'text-[#0A0A0A] hover:text-[#008037] hover:bg-gray-50'
                    }`}
                    style={{ fontSize: '15px', fontWeight: activeSection === item.id ? 600 : 500 }}
                  >
                    {item.label}
                  </button>
                ))}
                {/* Privacy Policy Button */}
                <button
                  onClick={onPrivacyClick}
                  className="px-5 py-2.5 rounded-full transition-all flex items-center gap-2 text-[#0A0A0A] hover:text-[#008037] hover:bg-gray-50"
                  style={{ fontSize: '15px', fontWeight: 500 }}
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </button>
              </>
            ) : (
              <div className="text-[#0A0A0A]/60" style={{ fontSize: '15px', fontWeight: 500 }}>
                {currentPage === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0B1E2D]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0B1E2D]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && currentPage === 'home' && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-3 rounded-xl text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-[#008037] text-white'
                      : 'text-[#0A0A0A] hover:bg-gray-50'
                  }`}
                  style={{ fontSize: '15px', fontWeight: activeSection === item.id ? 600 : 500 }}
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Privacy Policy Button */}
              <button
                onClick={() => {
                  onPrivacyClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="px-5 py-3 rounded-xl text-left transition-all flex items-center gap-2 text-[#0A0A0A] hover:bg-gray-50"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                <Shield className="w-4 h-4" />
                Privacy Policy
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}