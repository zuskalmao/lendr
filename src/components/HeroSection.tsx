import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, Shield, Clock, BarChart } from 'lucide-react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (orbRef.current) {
      gsap.to(orbRef.current, {
        x: 'random(-20, 20, 5)',
        y: 'random(-20, 20, 5)',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      
      {/* Gradient Orbs */}
      <div 
        ref={orbRef}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl z-0 animate-pulse-slow"
      ></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-solana-500/10 to-primary-500/10 blur-3xl z-0 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20"
            >
              <Zap className="h-4 w-4 text-primary-500 mr-2" />
              <span className="text-sm font-medium text-primary-300">Solana-Powered Flash Lending</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 text-shadow-glow">Flash Lending</span> is Here
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              $LENDR is revolutionizing DeFi on Solana with lightning-fast flash loans, empowering traders and developers with instant liquidity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a 
                href="#demo" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg shadow-lg hover:shadow-primary-500/20 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#learn" 
                className="inline-flex items-center justify-center px-6 py-3 bg-dark-800 text-white font-medium rounded-lg border border-gray-700 hover:bg-dark-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - 3D Flash Loan Visualization */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl transform -rotate-3"></div>
              <div className="relative bg-dark-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
                
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 bg-primary-500/20 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Flash Lending Protocol</h3>
                </div>
                
                <div className="space-y-6">
                  <FeatureCard 
                    icon={<Clock className="h-5 w-5 text-secondary-500" />}
                    title="Lightning Fast"
                    description="Execute flash loans in milliseconds on Solana's high-performance blockchain."
                  />
                  
                  <FeatureCard 
                    icon={<Shield className="h-5 w-5 text-solana-500" />}
                    title="Secure & Trustless"
                    description="Built on Solana with ironclad security measures to protect your assets."
                  />
                  
                  <FeatureCard 
                    icon={<BarChart className="h-5 w-5 text-primary-400" />}
                    title="Capital Efficiency"
                    description="Maximize your trading strategies with zero collateral flash loans."
                  />
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Latest Flash Loan</p>
                      <p className="text-lg text-white font-medium">10,000 SOL</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-sm text-green-500">Live & Active</p>
                    </div>
                  </div>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/2 -left-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}> = ({ icon, title, description }) => (
  <motion.div 
    className="flex items-start p-4 bg-dark-700/50 rounded-xl border border-gray-700/30"
    whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(140, 94, 255, 0.3)' }}
    transition={{ duration: 0.2 }}
  >
    <div className="mt-1 mr-4">{icon}</div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </motion.div>
);

export default HeroSection;
