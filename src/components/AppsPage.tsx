import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Star, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const appsList = [
  {
    id: 1,
    name: 'QuickTools Pro',
    icon: '🛠️',
    category: 'Productivity',
    description: 'All-in-one utility app with calculator, unit converter, QR scanner and more essential tools.',
    longDescription: 'QuickTools Pro is your complete toolkit in one app. Features include calculator, unit converter, currency converter, QR code scanner, flashlight, and many more useful utilities. Perfect for daily tasks and productivity.',
    downloads: '50K+',
    rating: '4.7',
    version: '2.5.0',
    size: '12 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=QuickTools+Home',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Calculator',
    ],
  },
  {
    id: 2,
    name: 'Brain Puzzle Master',
    icon: '🎮',
    category: 'Games',
    description: 'Challenging puzzle game with 500+ levels to train your brain and improve problem-solving skills.',
    longDescription: 'Test your IQ with Brain Puzzle Master! Over 500 unique puzzles ranging from easy to extremely difficult. Improve your logic, memory, and problem-solving abilities while having fun.',
    downloads: '100K+',
    rating: '4.8',
    version: '3.2.1',
    size: '45 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Game+Menu',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Puzzle+Level',
    ],
  },
  {
    id: 3,
    name: 'File Manager Plus',
    icon: '📁',
    category: 'Tools',
    description: 'Fast and secure file manager with cloud integration, file encryption, and smart organization.',
    longDescription: 'Manage all your files efficiently with File Manager Plus. Browse, copy, move, delete files and folders. Features include cloud storage integration, file encryption, ZIP support, and app backup.',
    downloads: '75K+',
    rating: '4.6',
    version: '1.8.5',
    size: '18 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=File+Browser',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Cloud+Storage',
    ],
  },
  {
    id: 4,
    name: 'Photo Editor Pro',
    icon: '📷',
    category: 'Photography',
    description: 'Professional photo editing with filters, effects, collage maker and advanced editing tools.',
    longDescription: 'Transform your photos into masterpieces! Photo Editor Pro offers professional editing tools, 100+ filters, stickers, text editor, collage maker, and AI-powered enhancements.',
    downloads: '60K+',
    rating: '4.5',
    version: '2.1.0',
    size: '35 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Photo+Editor',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Filters',
    ],
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    icon: '💪',
    category: 'Health',
    description: 'Track workouts, calories, steps and achieve your fitness goals with personalized plans.',
    longDescription: 'Stay fit and healthy with Fitness Tracker! Monitor your daily activities, track calories, log workouts, set goals, and get personalized fitness plans. Supports integration with health apps.',
    downloads: '40K+',
    rating: '4.7',
    version: '1.5.2',
    size: '22 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Dashboard',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Workout+Log',
    ],
  },
  {
    id: 6,
    name: 'Language Learn',
    icon: '📚',
    category: 'Education',
    description: 'Learn new languages with interactive lessons, vocabulary builder, and pronunciation guide.',
    longDescription: 'Master any language with Language Learn! Features include interactive lessons, vocabulary practice, grammar exercises, pronunciation guide, and daily challenges. Supports 20+ languages.',
    downloads: '30K+',
    rating: '4.6',
    version: '2.0.1',
    size: '28 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Lessons',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Vocabulary',
    ],
  },
  {
    id: 7,
    name: 'Weather Pro',
    icon: '🌤️',
    category: 'Weather',
    description: 'Accurate weather forecasts, hourly updates, and severe weather alerts for your location.',
    longDescription: 'Stay prepared with Weather Pro! Get accurate forecasts, hourly weather updates, 7-day predictions, radar maps, and severe weather alerts. Beautiful UI with customizable widgets.',
    downloads: '55K+',
    rating: '4.5',
    version: '3.1.0',
    size: '15 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Weather+Home',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Forecast',
    ],
  },
  {
    id: 8,
    name: 'Notes & Tasks',
    icon: '📝',
    category: 'Productivity',
    description: 'Simple note-taking and task management app with reminders, tags, and cloud sync.',
    longDescription: 'Never forget anything with Notes & Tasks! Create notes, to-do lists, set reminders, organize with tags and folders. Features cloud sync, voice notes, and sharing options.',
    downloads: '45K+',
    rating: '4.6',
    version: '1.9.3',
    size: '10 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Notes+List',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Task+Manager',
    ],
  },
  {
    id: 9,
    name: 'Music Player',
    icon: '🎵',
    category: 'Music',
    description: 'Powerful music player with equalizer, playlist manager, and beautiful visualizations.',
    longDescription: 'Enjoy your music collection with Music Player! Features 10-band equalizer, bass boost, virtualizer, playlist manager, sleep timer, and stunning visualizations. Supports all audio formats.',
    downloads: '80K+',
    rating: '4.7',
    version: '2.3.0',
    size: '20 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=Player+UI',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=Equalizer',
    ],
  },
  {
    id: 10,
    name: 'QR Scanner Pro',
    icon: '📱',
    category: 'Tools',
    description: 'Fast QR code and barcode scanner with history, creator, and batch scanning support.',
    longDescription: 'Scan any QR code or barcode instantly! QR Scanner Pro is fast, accurate, and feature-rich. Create QR codes, save scan history, batch scan multiple codes, and share results easily.',
    downloads: '65K+',
    rating: '4.8',
    version: '1.6.0',
    size: '8 MB',
    screenshots: [
      'https://via.placeholder.com/800x1600/01875f/ffffff?text=QR+Scanner',
      'https://via.placeholder.com/800x1600/34A853/ffffff?text=History',
    ],
  },
];

export default function AppsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedApp, setSelectedApp] = useState<typeof appsList[0] | null>(null);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const categories = ['All', ...Array.from(new Set(appsList.map(app => app.category)))];
  const filteredApps = selectedCategory === 'All' ? appsList : appsList.filter(app => app.category === selectedCategory);

  const nextScreenshot = () => {
    if (selectedApp && selectedApp.screenshots.length > 0) {
      setCurrentScreenshot((prev) => (prev + 1) % selectedApp.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (selectedApp && selectedApp.screenshots.length > 0) {
      setCurrentScreenshot((prev) => (prev - 1 + selectedApp.screenshots.length) % selectedApp.screenshots.length);
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Our Applications</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Browse our complete collection of high-quality Android apps available on Google Play Store
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-[#01875f] text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#01875f]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedApp(app);
                setCurrentScreenshot(0);
              }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#01875f] hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {app.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg text-gray-900 mb-1 truncate">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.category}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{app.description}</p>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{app.rating}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Download className="w-4 h-4" />
                  <span>{app.downloads}</span>
                </div>
              </div>

              <button className="w-full py-2.5 bg-[#01875f] text-white rounded-lg hover:bg-[#016d4d] transition-colors flex items-center justify-center gap-2">
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* App Details Modal */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-white rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl flex items-center justify-center text-4xl">
                    {selectedApp.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl text-gray-900 mb-1">{selectedApp.name}</h2>
                    <p className="text-gray-500">{selectedApp.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Rating</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="font-semibold text-gray-900">{selectedApp.rating}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Downloads</div>
                  <div className="font-semibold text-gray-900">{selectedApp.downloads}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Version</div>
                  <div className="font-semibold text-gray-900">{selectedApp.version}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Size</div>
                  <div className="font-semibold text-gray-900">{selectedApp.size}</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg text-gray-900 mb-2">About this app</h3>
                <p className="text-gray-600 leading-relaxed">{selectedApp.longDescription}</p>
              </div>

              {/* Screenshots */}
              {selectedApp.screenshots && selectedApp.screenshots.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg text-gray-900 mb-4">Screenshots</h3>
                  <div className="relative bg-gray-100 rounded-xl p-4">
                    <div className="flex justify-center">
                      <img
                        src={selectedApp.screenshots[currentScreenshot]}
                        alt={`Screenshot ${currentScreenshot + 1}`}
                        className="max-h-96 rounded-lg"
                      />
                    </div>
                    {selectedApp.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={prevScreenshot}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                          onClick={nextScreenshot}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                      </>
                    )}
                  </div>
                  {selectedApp.screenshots.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedApp.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentScreenshot(index)}
                          className={`h-1 rounded-full transition-all ${
                            index === currentScreenshot ? 'bg-[#01875f] w-8' : 'bg-gray-300 w-4'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Download Button */}
              <button className="w-full py-4 bg-[#01875f] text-white rounded-xl hover:bg-[#016d4d] transition-colors flex items-center justify-center gap-3 shadow-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <span className="font-semibold">Get it on Google Play</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
