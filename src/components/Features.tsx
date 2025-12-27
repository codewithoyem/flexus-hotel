import { motion } from 'motion/react';
import { Wifi, Car, Coffee, Shield, Clock, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary ultra-fast internet throughout the property',
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Premium parking service with 24/7 security',
  },
  {
    icon: Coffee,
    title: 'Fine Dining',
    description: 'World-class cuisine prepared by master chefs',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Advanced security systems for your peace of mind',
  },
  {
    icon: Clock,
    title: 'Concierge Service',
    description: 'Round-the-clock personalized assistance',
  },
  {
    icon: Sparkles,
    title: 'Luxury Amenities',
    description: 'Premium facilities and exclusive experiences',
  },
];

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

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
            <span className="text-amber-400 text-sm">Premium Services</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Unparalleled <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every detail crafted to exceed your expectations
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500 overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-500"
                  >
                    <Icon className="w-8 h-8 text-amber-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
