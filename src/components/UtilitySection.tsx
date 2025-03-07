import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Lock, ArrowLeftRight, TrendingUp, Code, Layers } from 'lucide-react';

const UtilitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="utility" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      
      {/* Animated gradient streaks */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-40 z-0 opacity-20">
        <div className="w-1/6 h-[600px] bg-gradient-to-b from-primary-600/30 to-transparent transform -rotate-45 absolute -top-80 left-[5%] blur-2xl"></div>
        <div className="w-1/6 h-[600px] bg-gradient-to-b from-secondary-600/30 to-transparent transform -rotate-45 absolute -top-80 left-[25%] blur-2xl"></div>
        <div className="w-1/6 h-[600px] bg-gradient-to-b from-solana-600/30 to-transparent transform -rotate-45 absolute -top-80 left-[45%] blur-2xl"></div>
        <div className="w-1/6 h-[600px] bg-gradient-to-b from-primary-600/30 to-transparent transform -rotate-45 absolute -top-80 left-[65%] blur-2xl"></div>
        <div className="w-1/6 h-[600px] bg-gradient-to-b from-secondary-600/30 to-transparent transform -rotate-45 absolute -top-80 left-[85%] blur-2xl"></div>
      </div>
      
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
            <Zap className="h-4 w-4 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-primary-300">Flash Lending Utility</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Supercharge Your DeFi Strategies with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">$LENDR</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-300"
          >
            Our Solana-powered flash lending protocol enables instant, uncollateralized loans that must be repaid within the same transaction block. Unleash powerful new DeFi strategies with minimal risk.
          </motion.p>
        </motion.div>
        
        {/* Flash Lending Protocol Visualization */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-dark-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 text-center">How $LENDR Flash Loans Work</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FlashLoanStep 
                  number={1}
                  title="Request Loan"
                  description="Initiate a flash loan request for any amount of available assets from the $LENDR protocol pools."
                  icon={<ArrowLeftRight className="h-6 w-6" />}
                  delay={0.1}
                />
                
                <FlashLoanStep 
                  number={2}
                  title="Execute Strategy"
                  description="Use the borrowed funds for arbitrage, collateral swaps, liquidations, or other profitable DeFi strategies."
                  icon={<TrendingUp className="h-6 w-6" />}
                  delay={0.2}
                />
                
                <FlashLoanStep 
                  number={3}
                  title="Repay + Fee"
                  description="Return the borrowed amount plus a small fee (0.1%) in the same transaction block."
                  icon={<Zap className="h-6 w-6" />}
                  delay={0.3}
                />
              </div>
              
              {/* Connection lines */}
              <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-12"></div>
              <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-px bg-gradient-to-r from-secondary-500 to-primary-500 transform -translate-y-12"></div>
              
              {/* Animated background elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Use Cases */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8 text-center"
        >
          Flash Loan Use Cases
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <UseCase 
            icon={<TrendingUp className="h-6 w-6 text-solana-500" />}
            title="Arbitrage Opportunities"
            description="Take advantage of price differences across DEXs by buying low on one exchange and selling high on another, all in a single transaction with zero capital."
            delay={0.1}
          />
          
          <UseCase 
            icon={<ArrowLeftRight className="h-6 w-6 text-secondary-500" />}
            title="Collateral Swaps"
            description="Instantly swap your collateral in lending platforms without having to repay your loan first, optimizing your position and avoiding liquidation."
            delay={0.2}
          />
          
          <UseCase 
            icon={<Lock className="h-6 w-6 text-primary-500" />}
            title="Self-Liquidation"
            description="Liquidate your own position if it's nearing liquidation threshold, saving on liquidation penalties and maintaining better control."
            delay={0.3}
          />
          
          <UseCase 
            icon={<Code className="h-6 w-6 text-primary-400" />}
            title="DeFi Development"
            description="Developers can use $LENDR flash loans to create innovative DeFi applications, composable protocols, and new financial primitives."
            delay={0.4}
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a 
            href="#docs" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg shadow-lg hover:shadow-primary-500/20 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
          >
            Explore Technical Documentation
            <Layers className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FlashLoanStep: React.FC<{ 
  number: number;
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}> = ({ number, icon, title, description, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative p-6 bg-dark-700/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300"
  >
    <div className="absolute -top-4 -left-4 h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {number}
    </div>
    
    <div className="pt-2">
      <div className="h-12 w-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-5">
        {icon}
      </div>
      
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const UseCase: React.FC<{ 
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
      <div className="h-12 w-12 bg-dark-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-dark-600 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">{title}</h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
    </div>
  </motion.div>
);

export default UtilitySection;
