import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilters } from './components/CategoryFilters';
import { AppsGrid } from './components/AppsGrid';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Toaster } from 'sonner@2.0.3';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showPrivacyPolicy) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <Navbar currentPage="privacy" />
        <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  if (showTerms) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <Navbar currentPage="terms" />
        <TermsOfService onBack={() => setShowTerms(false)} />
        <Toaster position="top-center" richColors />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Navbar onPrivacyClick={() => setShowPrivacyPolicy(true)} />
      <HeroSection />
      <CategoryFilters 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <AppsGrid selectedCategory={selectedCategory} />
      <AboutSection />
      <ContactSection />
      <Footer 
        onPrivacyClick={() => setShowPrivacyPolicy(true)}
        onTermsClick={() => setShowTerms(true)}
      />
      <Toaster position="top-center" richColors />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#008037] to-[#34A853] text-white rounded-full shadow-2xl hover:shadow-[#008037]/50 transition-all z-40 flex items-center justify-center group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}