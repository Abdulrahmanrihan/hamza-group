'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';
import Navbar from '@/components/Header';

// Define props interface
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}


// Reusable AnimatedSection component with TypeScript
const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="py-20 px-4 lg:px-0 bg-white"
    >
      {children}
    </motion.section>
  );
};

export default function LandingPage() {
  // Hero Section
  const Hero = () => (
    <section className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center text-center text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Unlock Your Business Potential with <span className="text-blue-400 underline">Xenon Bank</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-xl md:text-2xl mb-8"
        >
          Financial Freedom with Xenon
        </motion.p>
        <button className="bg-blue-400 py-2 px-4 shadow-lg rounded-lg">
          Start now
        </button>
      </div>
    </section>
  );

  // Feature Blocks
  const features = [
    {
      title: 'Business Line of Credit',
      description: 'Flexible financing solutions tailored to your business needs',
    },
    {
      title: 'Cutting-Edge Features',
      description: 'Empower your business with our innovative banking technology',
    },
    {
      title: 'Expert Advice & Support',
      description: '24/7 access to financial experts and dedicated support',
    },
  ];

  return (
    <div className="font-sans overflow-hidden">
      <Navbar/>
      <Hero />
      
      <main className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <AnimatedSection key={feature.title} delay={index * 0.2}>
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl h-64 lg:h-96 w-full transform hover:scale-105 transition-all duration-300 shadow-xl" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </main>

      {/* CTA Section */}
      <AnimatedSection delay={0.2}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Empower Your Business with
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-8 w-8 bg-blue-600 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </AnimatedSection>
      <AnimatedSection>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mx-4 lg:mx-0 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Dissipating the Cost of the Company to
            </h2>
            <p className="text-lg text-gray-600">
              Our Positive Social Impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Sustainable Financing
              </h3>
              <p className="text-gray-600">
                Eco-friendly business loans with reduced rates for green initiatives
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Community Investment
              </h3>
              <p className="text-gray-600">
                5% of all profits reinvested in local business development programs
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="bg-indigo-900 rounded-2xl mx-4 lg:mx-0 p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}