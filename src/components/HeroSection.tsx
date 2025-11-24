import { ArrowRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#008037]/10 rounded-full border border-[#008037]/20"
            >
              <div className="w-2 h-2 bg-[#008037] rounded-full animate-pulse"></div>
              <span className="text-[#008037]" style={{ fontSize: '14px', fontWeight: 600 }}>
                Official Google Play Developer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#0B1E2D] tracking-tight"
              style={{ fontSize: '52px', fontWeight: 800, lineHeight: '1.1' }}
            >
              Innovative Android Apps Designed for{' '}
              <span className="text-[#008037] bg-gradient-to-r from-[#008037] to-[#34A853] bg-clip-text text-transparent">Everyone</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#0A0A0A]/70 max-w-xl"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              We build high-quality Android applications focused on simplicity,
              performance, and user satisfaction — trusted by thousands of users
              worldwide.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('apps')}
                className="px-8 py-4 bg-gradient-to-r from-[#008037] to-[#34A853] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#008037]/30 transition-all flex items-center gap-2 group"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                Explore Our Apps
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-[#008037] border-2 border-[#008037] rounded-2xl hover:bg-[#008037]/5 transition-all flex items-center gap-2"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                Contact Developer
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#008037]/20 to-[#34A853]/20 rounded-3xl blur-3xl"
              ></motion.div>
              
              {/* Phone Container */}
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-3xl p-4 shadow-2xl border border-[#008037]/10"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760900051041-90417b9c110e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRyb2lkJTIwc21hcnRwaG9uZSUyMHNjcmVlbiUyMGFwcHxlbnwxfHx8fDE3NjM4ODcyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Android App Mockup"
                  className="w-full max-w-sm h-auto rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}