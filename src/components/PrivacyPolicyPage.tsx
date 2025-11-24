import { motion } from 'motion/react';
import { Shield, Mail, Database, Users, Eye, FileText } from 'lucide-react';

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    content: [
      'Device information (model, operating system, unique device identifiers)',
      'Usage data (app interactions, features used, time spent)',
      'Performance data (crashes, errors, app performance metrics)',
      'Location data (if permission is granted)',
      'User-provided information (optional account details, preferences)',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our applications',
      'To improve app functionality and user experience',
      'To analyze app performance and fix technical issues',
      'To send important updates and notifications',
      'To provide customer support and respond to inquiries',
      'To comply with legal obligations',
    ],
  },
  {
    icon: Shield,
    title: 'Third-Party Services',
    content: [
      'Google AdMob - For displaying advertisements',
      'Google Analytics - For app usage analytics',
      'Firebase - For app performance monitoring',
      'Google Play Services - For app distribution and updates',
      'These services may collect data according to their own privacy policies',
    ],
  },
  {
    icon: Users,
    title: 'Your Rights',
    content: [
      'Access your personal data',
      'Request data deletion',
      'Opt-out of data collection where applicable',
      'Withdraw consent at any time',
      'Request data portability',
      'Lodge a complaint with supervisory authorities',
    ],
  },
  {
    icon: FileText,
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures',
      'Data is encrypted during transmission',
      'Regular security audits and updates',
      'Limited access to personal information',
      'However, no method of transmission is 100% secure',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#01875f]/10 mb-6">
            <Shield className="w-10 h-10 text-[#01875f]" />
          </div>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">
            Last Updated: November 20, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-8"
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            Think Tank Apps ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you use our mobile applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our applications, you agree to the collection and use of information 
            in accordance with this policy.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 3) }}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#01875f]/10 flex items-center justify-center flex-shrink-0">
                <section.icon className="w-6 h-6 text-[#01875f]" />
              </div>
              <h2 className="text-gray-900 text-2xl">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className="text-[#01875f] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Children's Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-[#01875f]/5 rounded-2xl p-8 border border-[#01875f]/20 mb-8"
        >
          <h2 className="text-gray-900 text-2xl mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our services are not directed to children under the age of 13. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If we become aware that we have collected personal information from children without 
            parental consent, we will take steps to remove that information from our servers.
          </p>
        </motion.div>

        {/* Updates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-8"
        >
          <h2 className="text-gray-900 text-2xl mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes 
            to this Privacy Policy are effective when they are posted on this page.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-8 text-center text-white"
        >
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p className="text-white/90 mb-6">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <a
            href="mailto:bhavarkaran333@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#01875f] hover:bg-gray-50 transition-colors font-medium"
          >
            <Mail className="w-5 h-5" />
            bhavarkaran333@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
}