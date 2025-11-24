import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MessageSquare, User, Phone, CheckCircle, Clock, HelpCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const faqs = [
  {
    question: 'How do I report a bug in an app?',
    answer: 'Use the contact form below with app name and bug details. Include your device model and Android version for faster resolution.',
  },
  {
    question: 'How can I request a refund?',
    answer: 'Refunds are handled through Google Play Store. Go to Play Store > Account > Order History > Find the app > Request Refund.',
  },
  {
    question: 'How do I delete my account data?',
    answer: 'Email us at bhavarkaran333@gmail.com with your request. We will process data deletion within 30 days as per privacy policy.',
  },
  {
    question: 'Can I suggest new features?',
    answer: 'Absolutely! We value user feedback. Use the contact form to share your feature suggestions for future updates.',
  },
  {
    question: 'How do I update an app?',
    answer: 'Apps auto-update on Play Store if enabled. For manual updates, open Play Store > My apps & games > Update.',
  },
  {
    question: 'Do you offer technical support?',
    answer: 'Yes! Email us with your issue and we\'ll respond within 24-48 hours with a solution or guidance.',
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="pt-24 pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#01875f]/10 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-[#01875f]" />
          </div>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4">Contact & Support</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions or need help? We're here to assist you
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-[#01875f]" />
              <h2 className="text-2xl text-gray-900">Send Us a Message</h2>
            </div>

            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-[#01875f]/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#01875f]" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">We'll get back to you within 24-48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm font-medium">
                    <User className="w-4 h-4 text-[#01875f]" />
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="bg-white border-gray-300 text-gray-900 rounded-lg h-11"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm font-medium">
                    <Mail className="w-4 h-4 text-[#01875f]" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-white border-gray-300 text-gray-900 rounded-lg h-11"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm font-medium">
                    <Phone className="w-4 h-4 text-[#01875f]" />
                    Phone Number (Optional)
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-white border-gray-300 text-gray-900 rounded-lg h-11"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-700 mb-2 text-sm font-medium">
                    <MessageSquare className="w-4 h-4 text-[#01875f]" />
                    Your Message *
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                    className="bg-white border-gray-300 text-gray-900 rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#01875f] text-white rounded-lg hover:bg-[#016d4d] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#01875f]/20"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email Card */}
            <div className="bg-gradient-to-br from-[#01875f] to-[#34A853] rounded-2xl p-6 text-white">
              <Mail className="w-10 h-10 mb-4" />
              <h3 className="text-xl mb-2">Email Us</h3>
              <p className="text-white/90 text-sm mb-4">
                For support and inquiries
              </p>
              <a
                href="mailto:bhavarkaran333@gmail.com"
                className="inline-block px-5 py-2.5 bg-white text-[#01875f] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                bhavarkaran333@gmail.com
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-[#01875f]" />
                <h3 className="text-lg text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                We typically respond within 24-48 hours during business days
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-[#01875f] animate-pulse"></div>
                <span className="text-[#01875f] font-medium">Usually Active</span>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg text-gray-900 mb-3">When Reporting Issues</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#01875f] mt-0.5">•</span>
                  <span>App name and version number</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#01875f] mt-0.5">•</span>
                  <span>Your device model & Android version</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#01875f] mt-0.5">•</span>
                  <span>Steps to reproduce the issue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#01875f] mt-0.5">•</span>
                  <span>Screenshots if possible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-[#01875f]" />
            <h2 className="text-3xl text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-gray-900 mb-3 font-medium">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
