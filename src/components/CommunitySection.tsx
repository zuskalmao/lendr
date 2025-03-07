import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Twitter, Github, Send, MessageCircle } from 'lucide-react';

const CommunitySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const communityStats = [
    { count: '10K+', label: 'Community Members' },
    { count: '5+', label: 'Integrated Protocols' },
    { count: '$1M+', label: 'Total Flash Loans' },
    { count: '24/7', label: 'Support' },
  ];

  return (
    <section id="community" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-dark-900/0 to-dark-900/0 z-0"></div>
      
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
            <Users className="h-4 w-4 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-primary-300">Community</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">$LENDR</span> Movement
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-300"
          >
            Be part of a thriving community of developers, traders, and DeFi enthusiasts building the future of finance on Solana.
          </motion.p>
        </motion.div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {communityStats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">{stat.count}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Community Platforms */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white mb-8 text-center"
        >
          Connect With Us
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <SocialCard 
            icon={<Twitter className="h-6 w-6" />}
            title="Twitter"
            description="Follow us for the latest updates, announcements, and flash loan strategies."
            buttonText="Follow"
            buttonLink="https://twitter.com"
            delay={0.1}
          />
          
          <SocialCard 
            icon={<Send className="h-6 w-6" />}
            title="Telegram"
            description="Join our Telegram community for real-time discussions and support."
            buttonText="Join"
            buttonLink="https://telegram.org"
            delay={0.2}
          />
          
          <SocialCard 
            icon={<MessageCircle className="h-6 w-6" />}
            title="Discord"
            description="Connect with developers and community members in our Discord server."
            buttonText="Join Server"
            buttonLink="https://discord.com"
            delay={0.3}
          />
          
          <SocialCard 
            icon={<Github className="h-6 w-6" />}
            title="GitHub"
            description="Explore our open-source code, contribute, and build with $LENDR."
            buttonText="Explore"
            buttonLink="https://github.com"
            delay={0.4}
          />
        </div>
        
        {/* Community CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl transform -rotate-1"></div>
          <div className="relative bg-dark-800/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            
            <div className="md:flex justify-between items-center">
              <div className="mb-6 md:mb-0 md:max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to start with $LENDR?</h3>
                <p className="text-gray-300">Join the revolution in DeFi and unlock the power of flash loans on Solana today.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#docs" 
                  className="inline-flex justify-center items-center px-6 py-3 bg-dark-700 text-white font-medium rounded-lg border border-gray-700 hover:bg-dark-600 transition-colors duration-300"
                >
                  Read Docs
                </a>
                <a 
                  href="#launch" 
                  className="inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg shadow-lg hover:shadow-primary-500/20 hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
                >
                  Buy $LENDR
                </a>
              </div>
            </div>
            
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  buttonText: string;
  buttonLink: string;
  delay?: number;
}> = ({ icon, title, description, buttonText, buttonLink, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-primary-500/30 shadow-lg hover:shadow-primary-500/10 transition-all duration-300 flex flex-col"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 flex-1">
      <div className="h-12 w-12 bg-dark-700 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">{title}</h3>
      
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-6">{description}</p>
      
      <a 
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors duration-300 mt-auto"
      >
        {buttonText}
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </motion.div>
);

export default CommunitySection;
