import { motion } from 'motion/react';
import { ArrowRight, Users, Maximize, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

const rooms = [
  {
    title: 'Deluxe Suite',
    description: 'Spacious elegance with stunning city views and premium amenities',
    image: 'https://images.unsplash.com/photo-1655292912612-bb5b1bda9355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHN1aXRlJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjY3OTYwODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '45 m²',
    guests: '2 Guests',
    price: '₦85,000',
  },
  {
    title: 'Executive Suite',
    description: 'Enhanced luxury with separate living area and executive workspace',
    image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY3OTYwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '65 m²',
    guests: '2-3 Guests',
    price: '₦125,000',
  },
  {
    title: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views and personalized services',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NjczODMyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '120 m²',
    guests: '4 Guests',
    price: '₦250,000',
  },
];

export function Rooms() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="rooms" ref={ref} className="py-24 bg-neutral-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"
        />
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
            <span className="text-amber-400 text-sm">Our Suites</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Curated <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Accommodations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover your perfect sanctuary of comfort and style
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-500 text-black text-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-black" />
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                    {room.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {room.description}
                  </p>

                  {/* Details */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-amber-400" />
                      {room.size}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400" />
                      {room.guests}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-400 text-sm">From</span>
                      <div className="text-2xl text-white">{room.price}</div>
                      <span className="text-gray-500 text-sm">per night</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center hover:shadow-xl hover:shadow-amber-500/30 transition-shadow"
                    >
                      <ArrowRight className="w-5 h-5 text-black" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
