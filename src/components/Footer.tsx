import { motion } from 'motion/react';
import { Sparkles, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = {
    'Quick Links': ['About Us', 'Suites', 'Amenities', 'Gallery'],
    'Services': ['Dining', 'Spa & Wellness', 'Events', 'Business Center'],
    'Policies': ['Privacy Policy', 'Terms & Conditions', 'Cancellation Policy', 'FAQ'],
  };

  return (
    <footer className="bg-black border-t border-neutral-800 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-2xl tracking-wider text-white mb-4"
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                FLEXUS
              </span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Experience unparalleled luxury and comfort in the heart of Lagos. Where every moment is crafted to perfection.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:border-amber-500/50 flex items-center justify-center hover:bg-gradient-to-br hover:from-amber-500/20 hover:to-amber-600/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 inline-block group"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Flexus Hotel Suites. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Crafted with <span className="text-amber-400">♥</span> in Lagos
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
