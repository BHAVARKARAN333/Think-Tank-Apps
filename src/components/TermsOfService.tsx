import { FileText, ArrowLeft, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 mb-8"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1
                className="text-[#0B1E2D] tracking-tight"
                style={{ fontSize: '42px', fontWeight: 800 }}
              >
                Terms of Service
              </h1>
              <p className="text-[#0A0A0A]/60" style={{ fontSize: '15px' }}>
                Last updated: November 23, 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 space-y-8"
        >
          {/* Introduction */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              1. Agreement to Terms
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              By downloading, installing, or using any Think Tank Apps mobile
              application ("App" or "Apps"), you agree to be bound by these
              Terms of Service ("Terms"). If you disagree with any part of these
              terms, you may not use our Apps.
            </p>
          </section>

          {/* License */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              2. License to Use
            </h2>
            <p
              className="text-[#0A0A0A]/70 mb-3"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              Think Tank Apps grants you a limited, non-exclusive,
              non-transferable, revocable license to use our Apps for personal,
              non-commercial purposes, subject to these Terms.
            </p>
            <h3
              className="text-[#0B1E2D] mb-3 mt-6"
              style={{ fontSize: '20px', fontWeight: 600 }}
            >
              You may NOT:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[#0A0A0A]/70 ml-4">
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Modify, adapt, or create derivative works of the Apps
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Reverse engineer, decompile, or disassemble the Apps
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Remove or alter any copyright, trademark, or proprietary notices
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Use the Apps for any illegal or unauthorized purpose
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Distribute, sell, or sublicense the Apps to any third party
              </li>
            </ul>
          </section>

          {/* User Accounts */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              3. User Accounts
            </h2>
            <p
              className="text-[#0A0A0A]/70 mb-3"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              Some of our Apps may require you to create an account. You are
              responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#0A0A0A]/70 ml-4">
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Maintaining the confidentiality of your account credentials
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                All activities that occur under your account
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Notifying us immediately of any unauthorized access
              </li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              4. Acceptable Use Policy
            </h2>
            <p
              className="text-[#0A0A0A]/70 mb-3"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              You agree not to use our Apps to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#0A0A0A]/70 ml-4">
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Violate any applicable laws or regulations
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Infringe upon the rights of others
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Transmit harmful code, viruses, or malware
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Harass, abuse, or harm other users
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Attempt to gain unauthorized access to our systems
              </li>
            </ul>
          </section>

          {/* In-App Purchases */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              5. In-App Purchases and Subscriptions
            </h2>
            <p
              className="text-[#0A0A0A]/70 mb-3"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              Some Apps may offer in-app purchases or subscriptions. By making a
              purchase, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#0A0A0A]/70 ml-4">
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                All purchases are processed through Google Play Store
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Refunds are subject to Google Play's refund policy
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Subscriptions auto-renew unless cancelled before renewal
              </li>
              <li style={{ fontSize: '16px', lineHeight: '1.7' }}>
                You are responsible for managing your subscriptions
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              6. Intellectual Property Rights
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              All content, features, and functionality of our Apps, including but
              not limited to text, graphics, logos, icons, images, audio clips,
              and software, are the exclusive property of Think Tank Apps and are
              protected by international copyright, trademark, and other
              intellectual property laws.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              7. Disclaimer of Warranties
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              Our Apps are provided "AS IS" and "AS AVAILABLE" without warranties
              of any kind, either express or implied. We do not warrant that the
              Apps will be uninterrupted, error-free, or free from viruses or
              other harmful components.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              8. Limitation of Liability
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              To the maximum extent permitted by law, Think Tank Apps shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill,
              or other intangible losses.
            </p>
          </section>

          {/* Updates and Changes */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              9. Updates and Modifications
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              We reserve the right to modify, suspend, or discontinue any part of
              our Apps at any time without notice. We may also update these Terms
              periodically. Continued use of the Apps after changes constitutes
              acceptance of the new Terms.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              10. Termination
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              We may terminate or suspend your access to our Apps immediately,
              without prior notice or liability, for any reason, including if you
              breach these Terms. Upon termination, your right to use the Apps
              will immediately cease.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              11. Governing Law
            </h2>
            <p
              className="text-[#0A0A0A]/70"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              These Terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2
              className="text-[#0B1E2D] mb-4"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              12. Contact Information
            </h2>
            <p
              className="text-[#0A0A0A]/70 mb-4"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
            >
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="bg-[#F9FAFB] rounded-xl p-6 border border-gray-200">
              <p
                className="text-[#0B1E2D] mb-2"
                style={{ fontSize: '16px', fontWeight: 600 }}
              >
                Think Tank Apps
              </p>
              <p
                className="text-[#0A0A0A]/70"
                style={{ fontSize: '15px', lineHeight: '1.7' }}
              >
                Email: legal@thinktankapps.com
              </p>
              <p
                className="text-[#0A0A0A]/70"
                style={{ fontSize: '15px', lineHeight: '1.7' }}
              >
                Support: support@thinktankapps.com
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}