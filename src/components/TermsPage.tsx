import { motion } from 'motion/react';
import { FileText, AlertCircle, Shield, Copyright, Ban } from 'lucide-react';

const sections = [
  {
    icon: FileText,
    title: 'Acceptance of Terms',
    content: 'By downloading, installing, or using any Think Tank Apps application, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our applications.',
  },
  {
    icon: Shield,
    title: 'License Grant',
    content: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use our applications for personal, non-commercial purposes. You may not modify, distribute, sell, or reverse engineer our applications.',
  },
  {
    icon: Ban,
    title: 'User Obligations',
    content: 'You agree not to: (a) use our apps for illegal purposes, (b) attempt to hack or disrupt our services, (c) upload malicious content, (d) violate intellectual property rights, (e) impersonate others, or (f) spam or harass other users.',
  },
  {
    icon: AlertCircle,
    title: 'Limitation of Liability',
    content: 'Think Tank Apps shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our applications. We provide our apps "as is" without warranties of any kind.',
  },
  {
    icon: Copyright,
    title: 'Intellectual Property',
    content: 'All content, features, and functionality of our applications are owned by Think Tank Apps and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.',
  },
];

const additionalTerms = [
  {
    title: 'Updates and Changes',
    content: 'We reserve the right to modify or discontinue our applications at any time. We may also update these Terms and Conditions, and continued use of our apps constitutes acceptance of updated terms.',
  },
  {
    title: 'Termination',
    content: 'We may terminate or suspend your access to our applications immediately, without prior notice, for any breach of these Terms and Conditions.',
  },
  {
    title: 'Third-Party Services',
    content: 'Our applications may contain links to third-party services. We are not responsible for the content or practices of third-party services.',
  },
  {
    title: 'Governing Law',
    content: 'These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.',
  },
  {
    title: 'Disputes',
    content: 'Any disputes arising from these Terms or use of our applications shall be resolved through binding arbitration.',
  },
];

export default function TermsPage() {
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
            <FileText className="w-10 h-10 text-[#01875f]" />
          </div>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Terms & Conditions</h1>
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
            Welcome to Think Tank Apps. These Terms and Conditions ("Terms") govern your use 
            of our mobile applications and services. Please read these Terms carefully before 
            using our applications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            These Terms constitute a legally binding agreement between you and Think Tank Apps. 
            By accessing or using our applications, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms.
          </p>
        </motion.div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (index + 3) }}
            className="bg-white rounded-2xl p-8 border border-gray-200 mb-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#01875f]/10 flex items-center justify-center flex-shrink-0">
                <section.icon className="w-6 h-6 text-[#01875f]" />
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl mb-3">{section.title}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-8"
        >
          <h2 className="text-gray-900 text-2xl mb-6">Additional Terms</h2>
          <div className="space-y-6">
            {additionalTerms.map((term, index) => (
              <div key={index}>
                <h3 className="text-gray-900 mb-2 text-lg font-medium">{term.title}</h3>
                <p className="text-gray-700 leading-relaxed">{term.content}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-[#01875f]/5 rounded-2xl p-8 border border-[#01875f]/20 mb-8"
        >
          <h2 className="text-gray-900 text-2xl mb-4">Privacy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to understand 
            how we collect, use, and protect your information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our Privacy Policy is incorporated into these Terms by reference and can be 
            accessed through our applications or website.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl p-8 border border-gray-200 mb-8"
        >
          <h2 className="text-gray-900 text-2xl mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our applications are provided for informational and entertainment purposes. 
            We make no representations or warranties about the accuracy, reliability, or 
            completeness of any content or features.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Use of our applications is at your own risk. We recommend backing up your data 
            and taking appropriate precautions when using mobile applications.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl mb-4">Questions?</h2>
          <p className="text-white/90 mb-6">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <a
            href="mailto:bhavarkaran333@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#01875f] hover:bg-gray-50 transition-colors font-medium"
          >
            bhavarkaran333@gmail.com
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Think Tank Apps. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}