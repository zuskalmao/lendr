import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Zap, Coins } from 'lucide-react';
import gsap from 'gsap';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (orb1Ref.current && orb2Ref.current) {
      gsap.to(orb1Ref.current, {
        x: 'random(-30, 30, 5)',
        y: 'random(-30, 30, 5)',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      
      gsap.to(orb2Ref.current, {
        x: 'random(-40, 40, 5)',
        y: 'random(-40, 40, 5)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      
      {/* Animated Orbs */}
      <div 
        ref={orb1Ref}
        className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-3xl z-0"
      ></div>
      <div 
        ref={orb2Ref}
        className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-solana-500/5 to-primary-500/5 blur-3xl z-0"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20"
          >
            <Lightbulb className="h-4 w-4 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-primary-300">About $LENDR</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Revolutionizing DeFi with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Solana Flash Loans</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-300"
          >
            $LENDR is more than just a meme coin - we're building the future of flash lending on Solana, providing lightning-fast liquidity for traders, arbitrageurs, and DeFi enthusiasts.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Zap className="h-6 w-6 text-primary-500" />}
            title="Flash Lending Protocol"
            description="Our advanced protocol enables you to borrow millions in assets without collateral, as long as the loan is returned within the same transaction block. Perfect for arbitrage, liquidations, and complex DeFi strategies."
            delay={0.1}
          />
          
          <FeatureCard 
            icon={<Coins className="h-6 w-6 text-secondary-500" />}
            title="Solana Powered"
            description="Built on Solana's blazing-fast blockchain, $LENDR delivers sub-second execution times and minimal fees, making flash loans more accessible and profitable than ever before."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Lightbulb className="h-6 w-6 text-solana-500" />}
            title="Community Driven"
            description="While we have the meme appeal, we're backed by a passionate community of DeFi enthusiasts and developers committed to building innovative financial tools on Solana."
            delay={0.3}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="#utility" 
            className="inline-flex items-center px-6 py-3 bg-primary-500/10 text-primary-400 font-medium rounded-lg border border-primary-500/30 hover:bg-primary-500/20 transition-colors duration-300"
          >
            Explore $LENDR Utilities
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}> = ({ icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-primary-500/30 shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10">
      <div className="h-12 w-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">{title}</h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
);

export default AboutSection;
