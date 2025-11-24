import { motion } from 'motion/react';
import { Smartphone, Target, Heart, Users, Gamepad2, Wrench, Award, TrendingUp, Download, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const mission = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Create innovative mobile apps that solve real problems and enhance daily life for millions of users.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'User satisfaction, quality over quantity, transparency, and continuous improvement in everything we build.',
  },
  {
    icon: Award,
    title: 'Our Goal',
    description: 'Be the most trusted Android developer known for reliability, innovation, and exceptional user experience.',
  },
];

const whatWeBuild = [
  {
    icon: Gamepad2,
    title: 'Engaging Games',
    description: 'Fun puzzle games and brain teasers that challenge and entertain users of all ages.',
  },
  {
    icon: Wrench,
    title: 'Useful Tools',
    description: 'Practical utilities and productivity apps that make everyday tasks easier and faster.',
  },
  {
    icon: Smartphone,
    title: 'Quality Apps',
    description: 'Well-designed applications across multiple categories for diverse user needs.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01875f]/10 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-[#01875f]" />
          </div>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">About Think Tank Apps</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate Android developers creating apps that make a difference
          </p>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 rounded-2xl overflow-hidden border border-gray-200"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=1200"
            alt="Think Tank Apps Development"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 mb-16">
          <h2 className="text-3xl text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Think Tank Apps started with a simple vision: create mobile applications that genuinely help people. 
              What began as a passion project has evolved into a dedicated developer studio committed to excellence and innovation.
            </p>
            <p>
              We believe great apps start with understanding what users truly need. Every application we develop undergoes 
              thorough testing and refinement to ensure it meets the highest standards of quality, performance, and user experience. 
              Our apps are built with care, attention to detail, and a focus on solving real-world problems.
            </p>
            <p>
              Today, our applications have been downloaded by over 100,000 users worldwide, with an average rating of 4.6 stars. 
              We're proud of this achievement, but we're not stopping here. We're constantly working on improvements, new features, 
              and exciting new applications based on user feedback and emerging needs.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mission.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:border-[#01875f] hover:shadow-lg transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#01875f]/10 rounded-xl mb-4">
                <item.icon className="w-7 h-7 text-[#01875f]" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What We Build */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 mb-4">What We Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating diverse Android applications across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatWeBuild.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-8 text-white hover:shadow-2xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-xl mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="w-8 h-8 text-[#01875f] mx-auto mb-3" />
              <div className="text-3xl font-semibold text-gray-900 mb-1">10+</div>
              <div className="text-sm text-gray-600">Apps Published</div>
            </div>
            <div>
              <Download className="w-8 h-8 text-[#01875f] mx-auto mb-3" />
              <div className="text-3xl font-semibold text-gray-900 mb-1">100K+</div>
              <div className="text-sm text-gray-600">Total Downloads</div>
            </div>
            <div>
              <Users className="w-8 h-8 text-[#01875f] mx-auto mb-3" />
              <div className="text-3xl font-semibold text-gray-900 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-[#01875f] mx-auto mb-3" />
              <div className="text-3xl font-semibold text-gray-900 mb-1">4.6</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Developer Message */}
        <div className="bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl mb-6">Thank You for Your Support</h2>
          <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Your feedback, reviews, and support inspire us to keep improving and creating better experiences. 
            We're committed to building applications that not only meet your needs but exceed your expectations. 
            Together, we're making mobile technology more accessible, useful, and enjoyable for everyone.
          </p>
          <div className="text-white/80">
            <p className="mb-1 font-medium">— The Think Tank Apps Team</p>
            <p className="text-sm">bhavarkaran333@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}