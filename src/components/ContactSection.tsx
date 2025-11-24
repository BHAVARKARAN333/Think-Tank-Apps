import { useState } from 'react';
import { Send, Mail, MessageSquare, User, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-[#0B1E2D] tracking-tight mb-4"
            style={{ fontSize: '42px', fontWeight: 800 }}
          >
            Get In Touch
          </h2>
          <p
            className="text-[#0A0A0A]/70 max-w-2xl mx-auto"
            style={{ fontSize: '18px', fontWeight: 400 }}
          >
            Have a question or feedback? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center gap-2 text-[#0B1E2D] mb-2"
                  style={{ fontSize: '15px', fontWeight: 600 }}
                >
                  <User className="w-4 h-4" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008037] focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  style={{ fontSize: '15px' }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-[#0B1E2D] mb-2"
                  style={{ fontSize: '15px', fontWeight: 600 }}
                >
                  <Mail className="w-4 h-4" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008037] focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  style={{ fontSize: '15px' }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-[#0B1E2D] mb-2"
                  style={{ fontSize: '15px', fontWeight: 600 }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F9FAFB] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#008037] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                  style={{ fontSize: '15px' }}
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#008037] to-[#34A853] hover:shadow-2xl hover:shadow-[#008037]/30'
                } text-white`}
                style={{ fontSize: '18px', fontWeight: 700 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}