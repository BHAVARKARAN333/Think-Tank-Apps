import { useState } from 'react';
import { ExternalLink, Star, Download } from 'lucide-react';
import { motion } from 'motion/react';
import {
  Wrench,
  Brain,
  FolderOpen,
  Camera,
  Heart,
  Cloud,
  BookOpen,
  Music,
  Calculator,
  Timer,
  Network,
} from 'lucide-react';
import { AppDetailModal } from './AppDetailModal';

const apps = [
  {
    name: 'Path Connect Puzzle',
    category: 'Games',
    description: 'Connect dots and solve challenging path puzzles with multiple levels',
    rating: 4.8,
    downloads: '500K+',
    icon: Network,
    color: '#FF4081',
    fullDescription: 'Path Connect Puzzle is an addictive brain-training game where you connect colorful dots by drawing paths. With over 1000+ levels of increasing difficulty, this puzzle game will keep you entertained for hours. Perfect for all ages!',
    features: [
      '1000+ challenging puzzle levels',
      'Beautiful minimalist graphics',
      'Relaxing sound effects and music',
      'Daily challenges and rewards',
      'No time limits - play at your own pace',
      'Offline mode available'
    ],
    version: '2.5.0',
    size: '32 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'QuickTools Pro',
    category: 'Productivity',
    description: 'All-in-one toolkit with 50+ utilities for everyday tasks',
    rating: 4.5,
    downloads: '100K+',
    icon: Wrench,
    color: '#008037',
    fullDescription: 'QuickTools Pro is your ultimate productivity companion featuring 50+ essential tools in one app. From unit converters to QR code generators, file managers to note-taking, everything you need is right at your fingertips.',
    features: [
      '50+ utility tools in one app',
      'Unit converter (length, weight, currency)',
      'QR code scanner & generator',
      'File manager with cloud support',
      'Notes and to-do lists',
      'No ads in premium version'
    ],
    version: '3.2.1',
    size: '28 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'Brain Puzzle Master',
    category: 'Games',
    description: 'Challenge your mind with hundreds of addictive puzzles',
    rating: 4.7,
    downloads: '250K+',
    icon: Brain,
    color: '#FF6B6B',
    fullDescription: 'Exercise your brain with Brain Puzzle Master! Featuring logic puzzles, math challenges, pattern recognition, and more. Perfect for improving cognitive skills while having fun.',
    features: [
      '500+ unique brain puzzles',
      'Multiple puzzle categories',
      'Track your progress and stats',
      'Compete with friends',
      'Hints available when stuck',
      'New puzzles added weekly'
    ],
    version: '1.8.0',
    size: '45 MB',
    lastUpdated: 'Oct 2024'
  },
  {
    name: 'File Manager Plus',
    category: 'Tools',
    description: 'Powerful file management with cloud integration',
    rating: 4.6,
    downloads: '500K+',
    icon: FolderOpen,
    color: '#4ECDC4',
    fullDescription: 'Manage all your files effortlessly with File Manager Plus. Browse, organize, and share files with ease. Supports all file types and integrates seamlessly with cloud storage services.',
    features: [
      'Browse all files and folders',
      'Cloud storage integration',
      'Built-in file viewer',
      'Advanced search and filters',
      'Secure file encryption',
      'Network storage support'
    ],
    version: '4.1.2',
    size: '22 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'PhotoTune Editor',
    category: 'Photography',
    description: 'Professional photo editing with AI-powered filters',
    rating: 4.8,
    downloads: '180K+',
    icon: Camera,
    color: '#FFD93D',
    fullDescription: 'Transform your photos into masterpieces with PhotoTune Editor. Featuring AI-powered filters, professional editing tools, and one-tap enhancements for stunning results.',
    features: [
      'AI-powered photo enhancement',
      '100+ professional filters',
      'Advanced editing tools',
      'Background remover',
      'Collage maker',
      'Export in high resolution'
    ],
    version: '2.9.0',
    size: '68 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'HealthMeter',
    category: 'Health',
    description: 'Track your fitness goals and daily health metrics',
    rating: 4.4,
    downloads: '95K+',
    icon: Heart,
    color: '#E84A5F',
    fullDescription: 'Stay healthy with HealthMeter! Track your daily activities, monitor vital health metrics, set fitness goals, and get personalized recommendations for a healthier lifestyle.',
    features: [
      'Activity and step tracking',
      'Heart rate monitoring',
      'Water intake tracker',
      'Sleep quality analysis',
      'Calorie counter',
      'Workout plans and tips'
    ],
    version: '1.5.3',
    size: '35 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'WeatherSense',
    category: 'Weather',
    description: 'Accurate weather forecasts with beautiful UI',
    rating: 4.6,
    downloads: '300K+',
    icon: Cloud,
    color: '#5DADE2',
    fullDescription: 'Get accurate weather forecasts with WeatherSense. Beautiful animated backgrounds, hourly and 10-day forecasts, weather alerts, and more in a stunning, easy-to-use interface.',
    features: [
      'Accurate hourly forecasts',
      '10-day weather predictions',
      'Animated weather backgrounds',
      'Severe weather alerts',
      'Multiple location support',
      'Radar and satellite maps'
    ],
    version: '3.0.5',
    size: '40 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'Study Companion',
    category: 'Education',
    description: 'Smart learning tools for students of all ages',
    rating: 4.5,
    downloads: '120K+',
    icon: BookOpen,
    color: '#9B59B6',
    fullDescription: 'Study Companion is the perfect app for students. Create flashcards, take notes, set study schedules, and track your academic progress all in one place.',
    features: [
      'Digital flashcards',
      'Study timer with breaks',
      'Note-taking with sync',
      'Assignment tracker',
      'Exam scheduler',
      'Study statistics'
    ],
    version: '2.3.0',
    size: '30 MB',
    lastUpdated: 'Oct 2024'
  },
  {
    name: 'MusicFlow',
    category: 'Music',
    description: 'Create and mix music with intuitive controls',
    rating: 4.7,
    downloads: '150K+',
    icon: Music,
    color: '#FF6B81',
    fullDescription: 'Unleash your creativity with MusicFlow! Create, mix, and produce music with professional-grade tools designed for beginners and experts alike.',
    features: [
      'Multi-track music creation',
      '1000+ sound samples',
      'Virtual instruments',
      'Audio effects and filters',
      'Export in multiple formats',
      'Share your creations'
    ],
    version: '1.9.2',
    size: '95 MB',
    lastUpdated: 'Nov 2024'
  },
  {
    name: 'Smart Calculator',
    category: 'Tools',
    description: 'Advanced calculator with scientific functions',
    rating: 4.6,
    downloads: '200K+',
    icon: Calculator,
    color: '#00D2FF',
    fullDescription: 'Smart Calculator combines basic and scientific calculator functions with a beautiful, intuitive interface. Perfect for students, engineers, and professionals.',
    features: [
      'Basic & scientific calculator',
      'Unit converter built-in',
      'History and favorites',
      'Graph plotting',
      'Equation solver',
      'Customizable themes'
    ],
    version: '2.1.0',
    size: '18 MB',
    lastUpdated: 'Oct 2024'
  },
  {
    name: 'Focus Timer',
    category: 'Productivity',
    description: 'Boost productivity with Pomodoro technique',
    rating: 4.8,
    downloads: '175K+',
    icon: Timer,
    color: '#FFA502',
    fullDescription: 'Maximize your productivity with Focus Timer. Based on the proven Pomodoro Technique, this app helps you stay focused, take regular breaks, and achieve more in less time.',
    features: [
      'Customizable work/break intervals',
      'Productivity statistics',
      'Task management',
      'Focus mode (blocks distractions)',
      'White noise and sounds',
      'Daily/weekly goals'
    ],
    version: '2.7.1',
    size: '25 MB',
    lastUpdated: 'Nov 2024'
  },
];

interface AppsGridProps {
  selectedCategory: string;
}

export function AppsGrid({ selectedCategory }: AppsGridProps) {
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);
  
  const filteredApps =
    selectedCategory === 'All'
      ? apps
      : apps.filter((app) => app.category === selectedCategory);

  return (
    <>
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-[#0B1E2D] tracking-tight mb-4"
              style={{ fontSize: '42px', fontWeight: 800 }}
            >
              Our App Collection
            </h2>
            <p
              className="text-[#0A0A0A]/70 max-w-2xl mx-auto"
              style={{ fontSize: '18px', fontWeight: 400 }}
            >
              Discover our range of innovative Android applications designed to
              enhance your daily life
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedApp(app)}
                >
                  {/* App Icon & Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md"
                      style={{
                        backgroundColor: `${app.color}15`,
                        border: `2px solid ${app.color}25`,
                      }}
                    >
                      <IconComponent
                        className="w-8 h-8"
                        style={{ color: app.color }}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-[#0B1E2D] mb-1"
                        style={{ fontSize: '20px', fontWeight: 700 }}
                      >
                        {app.name}
                      </h3>
                      <span
                        className="text-[#008037]"
                        style={{ fontSize: '13px', fontWeight: 600 }}
                      >
                        {app.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="text-[#0A0A0A]/70 mb-4"
                    style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.6' }}
                  >
                    {app.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFD93D] text-[#FFD93D]" />
                      <span
                        className="text-[#0B1E2D]"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        {app.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#0A0A0A]/60">
                      <Download className="w-4 h-4" />
                      <span style={{ fontSize: '14px', fontWeight: 500 }}>
                        {app.downloads}
                      </span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full px-4 py-3 bg-[#F9FAFB] text-[#008037] rounded-xl hover:bg-[#008037] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                    style={{ fontSize: '15px', fontWeight: 600 }}
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Detail Modal */}
      {selectedApp && (
        <AppDetailModal
          app={selectedApp}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </>
  );
}
