import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export function Location() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      detail: 'Lagos, Nigeria',
      link: 'https://maps.google.com/?q=6.433628,3.2591448',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+234 (0) 800 000 0000',
      link: 'tel:+2348000000000',
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'reservations@flexushotel.com',
      link: 'mailto:reservations@flexushotel.com',
    },
    {
      icon: Clock,
      title: 'Check-in',
      detail: '2:00 PM - 11:00 PM',
      link: null,
    },
  ];

  return (
    <section id="location" ref={ref} className="py-24 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
          >
            <span className="text-amber-400 text-sm">Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Visit <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're here to make your stay unforgettable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-neutral-800/50 border border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500 cursor-pointer group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-500">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-gray-400 mb-1">{info.title}</h3>
                    <p className="text-white text-lg group-hover:text-amber-400 transition-colors duration-300">
                      {info.detail}
                    </p>
                  </div>
                </motion.div>
              );

              return info.link ? (
                <a key={info.title} href={info.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                content
              );
            })}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full text-lg hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
            >
              Book Your Stay Now
            </motion.button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-neutral-700/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.058982!2d3.2400904!3d6.433628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8953f9693423%3A0x316e85342c087663!2sFlexus%20Hotel%20Suites!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
