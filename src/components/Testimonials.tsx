import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import '@vaadin/avatar';

const testimonials = [
  {
    name: 'Adewale Johnson',
    role: 'Business Executive',
    rating: 5,
    text: 'Flexus Hotel Suites exceeded all expectations. The level of service and attention to detail is unparalleled. The perfect blend of luxury and comfort in the heart of Lagos.',
    avatar: 'svgCode',
  },
  {
    name: 'Chioma Okonkwo',
    role: 'Event Planner',
    rating: 5,
    text: 'I have hosted multiple events at Flexus, and each time has been exceptional. The staff goes above and beyond, and the facilities are world-class. Highly recommended!',
    avatar: 'svgCode',
  },
  {
    name: 'David Martinez',
    role: 'International Traveler',
    rating: 5,
    text: "As someone who travels extensively, I can confidently say Flexus Hotel Suites is among the finest hotels I've stayed at. The attention to detail and personalized service make all the difference.",
    avatar: 'svgCode',
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl" />

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
            <span className="text-amber-400 text-sm">Guest Experiences</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            What Our <span className="bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">Guests Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from those who've experienced Flexus excellence
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-neutral-700/50 hover:border-amber-500/50 transition-all duration-500 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/30">
                  <Quote className="w-6 h-6 text-black" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500/30">
                    {/* <img
                      src={svgCode}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    /> */}
                    <vaadin-avatar name={testimonial.name}></vaadin-avatar>
                  </div>
                  <div>
                    <h4 className="text-white group-hover:text-amber-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
