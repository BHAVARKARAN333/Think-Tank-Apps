import { CheckCircle, Users, Download, Award } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: Award,
    label: 'Play Store Verified',
    value: 'Official Developer',
  },
  {
    icon: Users,
    label: 'Published Apps',
    value: '10+',
  },
  {
    icon: Download,
    label: 'Total Downloads',
    value: '100K+',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2
              className="text-[#0B1E2D] tracking-tight"
              style={{ fontSize: '42px', fontWeight: 800 }}
            >
              About Think Tank Apps
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              Think Tank Apps is an independent Android development studio
              focused on building practical tools, engaging games, and
              productivity apps with beautiful design and smooth performance.
            </p>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '18px', fontWeight: 400, lineHeight: '1.7' }}
            >
              Our mission is to deliver simple, powerful experiences that users
              love. Every app we create is crafted with attention to detail,
              optimized for performance, and designed to solve real problems.
            </p>

            {/* Key Points */}
            <div className="space-y-4 pt-4">
              {[
                'User-first design philosophy',
                'Regular updates and improvements',
                'Responsive customer support',
                'Privacy-focused development',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#008037] flex-shrink-0 mt-0.5" />
                  <span
                    className="text-[#0A0A0A]"
                    style={{ fontSize: '16px', fontWeight: 500 }}
                  >
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p
                        className="text-[#0A0A0A]/60 mb-1"
                        style={{ fontSize: '14px', fontWeight: 500 }}
                      >
                        {stat.label}
                      </p>
                      <p
                        className="text-[#0B1E2D]"
                        style={{ fontSize: '28px', fontWeight: 800 }}
                      >
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-[#008037] to-[#006d2f] rounded-2xl p-8 shadow-2xl text-white cursor-pointer"
            >
              <p style={{ fontSize: '16px', fontWeight: 600 }} className="mb-2">
                Development Experience
              </p>
              <p style={{ fontSize: '36px', fontWeight: 800 }} className="mb-2">
                5+ Years
              </p>
              <p style={{ fontSize: '14px', fontWeight: 400 }} className="text-white/80">
                Building quality Android applications with modern technologies
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}