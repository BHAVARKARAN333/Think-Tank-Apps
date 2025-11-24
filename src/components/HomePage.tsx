import { motion } from 'motion/react';
import { Smartphone, Download, Users, Star, ArrowRight, PlayCircle, Shield, Zap } from 'lucide-react';
import type { PageType } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const featuredApps = [
  { id: 1, name: 'QuickTools Pro', category: 'Productivity', downloads: '10K+', rating: '4.5', icon: '🛠️' },
  { id: 2, name: 'Brain Puzzle Game', category: 'Games', downloads: '50K+', rating: '4.7', icon: '🎮' },
  { id: 3, name: 'File Manager Plus', category: 'Tools', downloads: '25K+', rating: '4.6', icon: '📁' },
  { id: 4, name: 'Photo Editor Pro', category: 'Photography', downloads: '15K+', rating: '4.4', icon: '📷' },
  { id: 5, name: 'Fitness Tracker', category: 'Health', downloads: '30K+', rating: '4.8', icon: '💪' },
  { id: 6, name: 'Language Learn', category: 'Education', downloads: '20K+', rating: '4.6', icon: '📚' },
];

const features = [
  { icon: Shield, title: 'Secure & Safe', desc: 'All apps follow Google Play security standards' },
  { icon: Zap, title: 'Fast & Reliable', desc: 'Optimized performance for smooth experience' },
  { icon: Users, title: 'User Focused', desc: 'Built based on real user feedback' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#e8f5f1] to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#01875f]/10 border border-[#01875f]/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#01875f] animate-pulse"></div>
                <span className="text-[#01875f] text-sm font-medium">Official Google Play Developer</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Innovative Apps That
                <span className="text-[#01875f] block">Users Love</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We create high-quality Android applications designed to make your life easier, 
                more productive, and more enjoyable. Trusted by thousands of users worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => onNavigate('apps')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#01875f] text-white rounded-lg hover:bg-[#016d4d] transition-colors shadow-lg shadow-[#01875f]/20"
                >
                  <Smartphone className="w-5 h-5" />
                  Browse All Apps
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-[#01875f] hover:text-[#01875f] transition-all"
                >
                  Get Support
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">10+</div>
                  <div className="text-sm text-gray-500">Apps Published</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">100K+</div>
                  <div className="text-sm text-gray-500">Downloads</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-gray-900">4.6★</div>
                  <div className="text-sm text-gray-500">Avg Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-8 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=800"
                  alt="Mobile App Development"
                  className="w-full h-auto rounded-xl"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#01875f]/10 rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-[#01875f]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Available on</div>
                    <div className="font-semibold text-gray-900">Google Play</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01875f]/10 rounded-xl mb-4">
                  <feature.icon className="w-8 h-8 text-[#01875f]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Our Popular Apps</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our most downloaded and highly-rated applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#01875f] hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {app.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-gray-900 mb-1 truncate">{app.name}</h3>
                    <p className="text-sm text-gray-500">{app.category}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-1 text-[#01875f]">
                    <Download className="w-4 h-4" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-700">{app.rating}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-[#01875f] text-white rounded-lg hover:bg-[#016d4d] transition-colors group-hover:shadow-md">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('apps')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#01875f] rounded-lg border-2 border-[#01875f] hover:bg-[#01875f] hover:text-white transition-all"
            >
              View All Apps
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#01875f] to-[#34A853]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Join Thousands of Happy Users
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Download our apps from Google Play Store and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('apps')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#01875f] rounded-lg hover:bg-gray-50 transition-colors shadow-xl"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="font-semibold">Get it on Google Play</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white rounded-lg border-2 border-white hover:bg-white hover:text-[#01875f] transition-all"
              >
                Contact Developer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
