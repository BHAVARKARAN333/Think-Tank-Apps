import { Smartphone, Mail, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onTermsClick?: () => void;
}

export function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0B1E2D] text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#008037] to-[#34A853] rounded-2xl flex items-center justify-center shadow-lg">
                <Smartphone className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white tracking-tight" style={{ fontSize: '22px', fontWeight: 700 }}>
                Think Tank Apps
              </span>
            </div>
            <p
              className="text-white/70 mb-6 max-w-sm"
              style={{ fontSize: '15px', fontWeight: 400, lineHeight: '1.6' }}
            >
              Building innovative Android applications that make a difference.
              Quality apps designed for everyone.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="w-4 h-4" />
              <span style={{ fontSize: '14px' }}>support@thinktankapps.com</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Our Apps', id: 'apps' },
                { label: 'About Us', id: 'about' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-white transition-colors"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3
              className="text-white mb-4"
              style={{ fontSize: '16px', fontWeight: 700 }}
            >
              Follow Us
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={social.label}
                    className="w-10 h-10 bg-white/10 hover:bg-[#008037] rounded-xl flex items-center justify-center transition-all"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/60"
              style={{ fontSize: '14px', fontWeight: 400 }}
            >
              © 2024 Think Tank Apps. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={onPrivacyClick}
                className="text-white/60 hover:text-white transition-colors"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                Privacy Policy
              </button>
              <button
                onClick={onTermsClick}
                className="text-white/60 hover:text-white transition-colors"
                style={{ fontSize: '14px', fontWeight: 500 }}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}