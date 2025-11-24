import { Shield, Home, Lock, Eye, Database, UserCheck, Bell, Globe, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-white bg-gradient-to-r from-[#008037] to-[#34A853] px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#008037]/30 transition-all mb-8"
          style={{ fontSize: '15px', fontWeight: 600 }}
        >
          <Home className="w-5 h-5" />
          Back to Home
        </motion.button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-white to-[#F9FAFB] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-3xl flex items-center justify-center shadow-2xl">
              <Shield className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h1
                className="text-[#0B1E2D] tracking-tight mb-2"
                style={{ fontSize: '48px', fontWeight: 800 }}
              >
                Privacy Policy
              </h1>
              <p className="text-[#0A0A0A]/60 mb-1" style={{ fontSize: '16px' }}>
                Think Tank Apps - All Applications
              </p>
              <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                Last updated: November 23, 2024
              </p>
            </div>
          </div>
          
          <div className="bg-[#008037]/5 border border-[#008037]/20 rounded-2xl p-6">
            <p className="text-[#0B1E2D]" style={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.7' }}>
              Your privacy is critically important to us. This Privacy Policy applies to all mobile applications 
              developed and published by Think Tank Apps on the Google Play Store.
            </p>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <h3 className="text-[#0B1E2D] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
            Quick Navigation
          </h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              'Information We Collect',
              'How We Use Information',
              'Data Storage & Security',
              'Third-Party Services',
              'Children\'s Privacy',
              'Your Rights & Choices',
              'Changes to Policy',
              'Contact Information',
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="px-4 py-2 bg-[#F9FAFB] hover:bg-[#008037] hover:text-white rounded-xl transition-all text-center"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Section 1: Information We Collect */}
          <motion.div
            id="section-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  1. Information We Collect
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Types of data collected through our applications
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-[#0B1E2D] mb-3" style={{ fontSize: '22px', fontWeight: 700 }}>
                  1.1 Personal Information
                </h3>
                <p className="text-[#0A0A0A]/70 mb-3" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We may collect the following personal information when you voluntarily provide it:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>Account Information:</strong> Name, email address, username, and profile picture (if you create an account)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>Contact Information:</strong> Email address or phone number when you contact support
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>User Content:</strong> Any content you create, upload, or share within the app
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#0B1E2D] mb-3" style={{ fontSize: '22px', fontWeight: 700 }}>
                  1.2 Automatically Collected Information
                </h3>
                <p className="text-[#0A0A0A]/70 mb-3" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  When you use our apps, we automatically collect:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#F9FAFB] rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Device Information
                    </p>
                    <ul className="space-y-1 text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      <li>• Device model and manufacturer</li>
                      <li>• Operating system version</li>
                      <li>• Unique device identifiers</li>
                      <li>• Screen resolution</li>
                    </ul>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Usage Data
                    </p>
                    <ul className="space-y-1 text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      <li>• App features used</li>
                      <li>• Time spent in app</li>
                      <li>• Interaction patterns</li>
                      <li>• Session frequency</li>
                    </ul>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Log Data
                    </p>
                    <ul className="space-y-1 text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      <li>• IP address</li>
                      <li>• Crash reports</li>
                      <li>• Error logs</li>
                      <li>• App performance data</li>
                    </ul>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>
                      Location Data (Optional)
                    </p>
                    <ul className="space-y-1 text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      <li>• Approximate location (with consent)</li>
                      <li>• GPS coordinates (if permitted)</li>
                      <li>• Used only for app functionality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: How We Use Information */}
          <motion.div
            id="section-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  2. How We Use Your Information
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  We use collected information for the following purposes
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Provide Services',
                  items: ['Deliver app functionality', 'Process transactions', 'Sync data across devices', 'Enable core features']
                },
                {
                  title: 'Improve Experience',
                  items: ['Personalize content', 'Analyze usage patterns', 'Optimize performance', 'A/B testing features']
                },
                {
                  title: 'Communication',
                  items: ['Respond to support requests', 'Send important updates', 'Notify about new features', 'Share promotional offers (opt-in)']
                },
                {
                  title: 'Security & Fraud',
                  items: ['Detect fraudulent activity', 'Prevent abuse', 'Secure user accounts', 'Monitor system integrity']
                },
                {
                  title: 'Analytics',
                  items: ['Understand user behavior', 'Track app performance', 'Generate usage statistics', 'Improve app quality']
                },
                {
                  title: 'Compliance',
                  items: ['Meet legal obligations', 'Enforce terms of service', 'Protect user rights', 'Respond to legal requests']
                },
              ].map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-[#0B1E2D] mb-3 flex items-center gap-2" style={{ fontSize: '18px', fontWeight: 700 }}>
                    <span className="w-8 h-8 bg-[#008037] text-white rounded-lg flex items-center justify-center" style={{ fontSize: '14px', fontWeight: 700 }}>
                      {index + 1}
                    </span>
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#008037] mt-1">✓</span>
                        <span className="text-[#0A0A0A]/70" style={{ fontSize: '15px' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Data Storage & Security */}
          <motion.div
            id="section-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  3. Data Storage & Security
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  How we protect and store your information
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#008037]/5 to-[#34A853]/5 rounded-2xl p-6 border border-[#008037]/10">
                <h3 className="text-[#0B1E2D] mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Security Measures
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>🔐 Encryption</p>
                    <p className="text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      Data encrypted in transit using SSL/TLS protocols
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>🛡️ Secure Servers</p>
                    <p className="text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      Data stored on secure, encrypted servers
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-[#0B1E2D] mb-2" style={{ fontSize: '15px', fontWeight: 600 }}>🔑 Access Control</p>
                    <p className="text-[#0A0A0A]/70" style={{ fontSize: '14px' }}>
                      Limited access to personal information
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-[#0B1E2D] mb-3" style={{ fontSize: '20px', fontWeight: 700 }}>
                  Data Retention
                </h3>
                <p className="text-[#0A0A0A]/70 mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  We retain your information only as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>Active accounts:</strong> Data retained while your account is active
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>Deleted accounts:</strong> Most data deleted within 30 days, some retained for legal compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#008037] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      <strong>Analytics data:</strong> Anonymized and aggregated after 26 months
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Third-Party Services */}
          <motion.div
            id="section-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  4. Third-Party Services
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  External services integrated in our apps
                </p>
              </div>
            </div>

            <p className="text-[#0A0A0A]/70 mb-6" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Our apps may use third-party services that collect information to help us improve functionality and user experience:
            </p>

            <div className="space-y-4">
              {[
                {
                  name: 'Google Play Services',
                  purpose: 'App distribution, updates, in-app billing, and core Android functionality',
                  policy: 'https://policies.google.com/privacy'
                },
                {
                  name: 'Google AdMob',
                  purpose: 'Displaying personalized advertisements (can be opted out in settings)',
                  policy: 'https://support.google.com/admob/answer/6128543'
                },
                {
                  name: 'Google Analytics for Firebase',
                  purpose: 'App usage analytics, crash reporting, and performance monitoring',
                  policy: 'https://firebase.google.com/support/privacy'
                },
                {
                  name: 'Google Sign-In',
                  purpose: 'Quick and secure authentication using Google accounts',
                  policy: 'https://policies.google.com/privacy'
                },
              ].map((service, index) => (
                <div key={index} className="bg-[#F9FAFB] rounded-2xl p-5 border border-gray-200">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-[#0B1E2D]" style={{ fontSize: '18px', fontWeight: 700 }}>
                      {service.name}
                    </h3>
                    <a
                      href={service.policy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1 bg-[#008037] text-white rounded-lg hover:bg-[#006d2f] transition-colors text-nowrap"
                      style={{ fontSize: '13px', fontWeight: 600 }}
                    >
                      View Policy
                    </a>
                  </div>
                  <p className="text-[#0A0A0A]/70" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    {service.purpose}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
              <p className="text-[#0B1E2D]" style={{ fontSize: '15px', fontWeight: 600, lineHeight: '1.7' }}>
                ⚠️ Important: These third-party services have their own privacy policies. We encourage you to review them to understand how they handle your data.
              </p>
            </div>
          </motion.div>

          {/* Section 5: Children's Privacy */}
          <motion.div
            id="section-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  5. Children's Privacy (COPPA Compliance)
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Protecting children under 13 years old
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                We are committed to protecting the privacy of children. Our apps comply with the Children's Online Privacy Protection Act (COPPA):
              </p>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6">
                <h3 className="text-[#0B1E2D] mb-3 flex items-center gap-2" style={{ fontSize: '20px', fontWeight: 700 }}>
                  <span className="text-2xl">🧒</span>
                  Age Restrictions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      Our apps are <strong>NOT directed to children under 13 years of age</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      We do <strong>NOT knowingly collect</strong> personal information from children under 13
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      If we discover we have collected information from a child under 13, we will <strong>delete it immediately</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0A0A0A]/70" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                      Parents/guardians: If you believe your child has provided us with personal information, please contact us immediately at <strong>privacy@thinktankapps.com</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Your Rights */}
          <motion.div
            id="section-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  6. Your Rights & Choices
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Control over your personal information
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                {
                  emoji: '👁️',
                  title: 'Access',
                  description: 'Request a copy of your personal data'
                },
                {
                  emoji: '✏️',
                  title: 'Rectification',
                  description: 'Correct inaccurate or incomplete information'
                },
                {
                  emoji: '🗑️',
                  title: 'Deletion',
                  description: 'Request deletion of your personal data'
                },
                {
                  emoji: '📦',
                  title: 'Data Portability',
                  description: 'Export your data in a readable format'
                },
                {
                  emoji: '🚫',
                  title: 'Object',
                  description: 'Object to processing of your information'
                },
                {
                  emoji: '⏸️',
                  title: 'Restrict',
                  description: 'Restrict processing of your data'
                },
                {
                  emoji: '🔕',
                  title: 'Opt-Out',
                  description: 'Withdraw consent for marketing communications'
                },
                {
                  emoji: '📧',
                  title: 'Contact',
                  description: 'Reach us for privacy-related questions'
                },
              ].map((right, index) => (
                <div key={index} className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{right.emoji}</span>
                    <h3 className="text-[#0B1E2D]" style={{ fontSize: '17px', fontWeight: 700 }}>
                      {right.title}
                    </h3>
                  </div>
                  <p className="text-[#0A0A0A]/70" style={{ fontSize: '15px' }}>
                    {right.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#008037]/5 border border-[#008037]/20 rounded-2xl p-6">
              <h3 className="text-[#0B1E2D] mb-3" style={{ fontSize: '18px', fontWeight: 700 }}>
                How to Exercise Your Rights
              </h3>
              <p className="text-[#0A0A0A]/70 mb-3" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                To exercise any of these rights, please contact us at:
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[#0B1E2D]" style={{ fontSize: '16px', fontWeight: 600 }}>
                  📧 Email: <a href="mailto:privacy@thinktankapps.com" className="text-[#008037] hover:underline">privacy@thinktankapps.com</a>
                </p>
                <p className="text-[#0B1E2D]" style={{ fontSize: '16px', fontWeight: 600 }}>
                  💬 Support: <a href="mailto:support@thinktankapps.com" className="text-[#008037] hover:underline">support@thinktankapps.com</a>
                </p>
                <p className="text-[#0A0A0A]/60 mt-2" style={{ fontSize: '14px' }}>
                  We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 7: Changes to Policy */}
          <motion.div
            id="section-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-[#0B1E2D] mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  7. Changes to This Privacy Policy
                </h2>
                <p className="text-[#008037]" style={{ fontSize: '15px', fontWeight: 600 }}>
                  How we notify you about updates
                </p>
              </div>
            </div>

            <p className="text-[#0A0A0A]/70 mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4">
                <span className="text-[#008037] text-xl mt-1">📅</span>
                <div>
                  <p className="text-[#0B1E2D] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Last Updated Date
                  </p>
                  <p className="text-[#0A0A0A]/70" style={{ fontSize: '15px' }}>
                    We will always display the "Last updated" date at the top of this policy
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4">
                <span className="text-[#008037] text-xl mt-1">🔔</span>
                <div>
                  <p className="text-[#0B1E2D] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Notification of Changes
                  </p>
                  <p className="text-[#0A0A0A]/70" style={{ fontSize: '15px' }}>
                    For material changes, we will notify you via in-app notification or email
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4">
                <span className="text-[#008037] text-xl mt-1">✅</span>
                <div>
                  <p className="text-[#0B1E2D] mb-1" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Continued Use
                  </p>
                  <p className="text-[#0A0A0A]/70" style={{ fontSize: '15px' }}>
                    Your continued use of our apps after changes indicates acceptance of the updated policy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 8: Contact Information */}
          <motion.div
            id="section-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-br from-[#008037] to-[#006d2f] rounded-3xl p-8 lg:p-10 shadow-2xl text-white"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white mb-2" style={{ fontSize: '32px', fontWeight: 800 }}>
                  8. Contact Information
                </h2>
                <p className="text-white/80" style={{ fontSize: '15px', fontWeight: 600 }}>
                  Get in touch with our privacy team
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <h3 className="text-white mb-4" style={{ fontSize: '20px', fontWeight: 700 }}>
                Think Tank Apps - Privacy Team
              </h3>
              <div className="space-y-3">
                <p className="text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  📧 <strong>Privacy Inquiries:</strong> privacy@thinktankapps.com
                </p>
                <p className="text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  💬 <strong>General Support:</strong> support@thinktankapps.com
                </p>
                <p className="text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  🌐 <strong>Website:</strong> www.thinktankapps.com
                </p>
                <p className="text-white/90" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                  ⏱️ <strong>Response Time:</strong> Within 48 hours
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white/90 mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                If you have questions, concerns, or complaints about this Privacy Policy or our data practices, please don't hesitate to reach out. We're committed to resolving any issues promptly and transparently.
              </p>
              <p className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
                Thank you for trusting Think Tank Apps! 🙏
              </p>
            </div>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-[#008037] rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ fontSize: '16px', fontWeight: 600 }}
          >
            ↑ Back to Top
          </button>
        </motion.div>
      </div>
    </div>
  );
}
