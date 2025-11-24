import { X, Star, Download, Shield, Zap, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface AppDetailModalProps {
  app: {
    name: string;
    category: string;
    description: string;
    rating: number;
    downloads: string;
    icon: LucideIcon;
    color: string;
    fullDescription?: string;
    features?: string[];
    version?: string;
    size?: string;
    lastUpdated?: string;
  };
  onClose: () => void;
}

export function AppDetailModal({ app, onClose }: AppDetailModalProps) {
  const IconComponent = app.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 p-6 rounded-t-3xl z-10">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{
                    backgroundColor: `${app.color}15`,
                    border: `2px solid ${app.color}25`,
                  }}
                >
                  <IconComponent
                    className="w-10 h-10"
                    style={{ color: app.color }}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h2
                    className="text-[#0B1E2D] mb-2"
                    style={{ fontSize: '28px', fontWeight: 800 }}
                  >
                    {app.name}
                  </h2>
                  <p
                    className="text-[#008037] mb-3"
                    style={{ fontSize: '15px', fontWeight: 600 }}
                  >
                    {app.category}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-[#FFD93D] text-[#FFD93D]" />
                      <span
                        className="text-[#0B1E2D]"
                        style={{ fontSize: '16px', fontWeight: 700 }}
                      >
                        {app.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#0A0A0A]/60">
                      <Download className="w-5 h-5" />
                      <span style={{ fontSize: '15px', fontWeight: 600 }}>
                        {app.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
              >
                <X className="w-6 h-6 text-[#0A0A0A]" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <div>
              <h3
                className="text-[#0B1E2D] mb-3"
                style={{ fontSize: '20px', fontWeight: 700 }}
              >
                About this app
              </h3>
              <p
                className="text-[#0A0A0A]/70"
                style={{ fontSize: '16px', lineHeight: '1.7' }}
              >
                {app.fullDescription || app.description}
              </p>
            </div>

            {/* Key Features */}
            {app.features && (
              <div>
                <h3
                  className="text-[#0B1E2D] mb-4"
                  style={{ fontSize: '20px', fontWeight: 700 }}
                >
                  Key Features
                </h3>
                <div className="grid gap-3">
                  {app.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <p
                        className="text-[#0A0A0A] pt-1"
                        style={{ fontSize: '15px', fontWeight: 500 }}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* App Info */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                <p
                  className="text-[#0A0A0A]/60 mb-1"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  Version
                </p>
                <p
                  className="text-[#0B1E2D]"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                >
                  {app.version || '1.0.0'}
                </p>
              </div>
              <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                <p
                  className="text-[#0A0A0A]/60 mb-1"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  Size
                </p>
                <p
                  className="text-[#0B1E2D]"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                >
                  {app.size || '25 MB'}
                </p>
              </div>
              <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                <p
                  className="text-[#0A0A0A]/60 mb-1"
                  style={{ fontSize: '13px', fontWeight: 500 }}
                >
                  Updated
                </p>
                <p
                  className="text-[#0B1E2D]"
                  style={{ fontSize: '16px', fontWeight: 700 }}
                >
                  {app.lastUpdated || 'Nov 2024'}
                </p>
              </div>
            </div>

            {/* Safety Info */}
            <div className="bg-gradient-to-br from-[#008037]/5 to-[#34A853]/5 rounded-2xl p-6 border border-[#008037]/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Shield className="w-6 h-6 text-[#008037]" />
                </div>
                <div>
                  <h4
                    className="text-[#0B1E2D] mb-2"
                    style={{ fontSize: '18px', fontWeight: 700 }}
                  >
                    Data Safety
                  </h4>
                  <p
                    className="text-[#0A0A0A]/70"
                    style={{ fontSize: '14px', lineHeight: '1.6' }}
                  >
                    This app follows Google Play's security and privacy best
                    practices. Your data is encrypted and never shared with third
                    parties without consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <button
              className="w-full px-8 py-5 bg-gradient-to-r from-[#008037] to-[#34A853] text-white rounded-2xl hover:shadow-2xl hover:shadow-[#008037]/30 transition-all flex items-center justify-center gap-3 group"
              style={{ fontSize: '18px', fontWeight: 700 }}
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download from Play Store
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
