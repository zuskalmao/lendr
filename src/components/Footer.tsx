import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">
                $LENDR<span className="text-primary-500">.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionizing flash lending on Solana. Fast, secure, and decentralized.
            </p>
            <div className="flex space-x-4">
              <SocialIcon Icon={Twitter} href="https://twitter.com" />
              <SocialIcon Icon={Github} href="https://github.com" />
              <SocialIcon Icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#utility">Flash Lending</FooterLink>
              <FooterLink href="#community">Community</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#docs">Documentation</FooterLink>
              <FooterLink href="#tutorial">Tutorial</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 bg-dark-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} $LENDR. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

const SocialIcon: React.FC<{ Icon: React.ElementType; href: string }> = ({ Icon, href }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-dark-800 p-2 rounded-full hover:bg-primary-500/20 transition-colors duration-300"
    whileHover={{ y: -3 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    <Icon className="h-5 w-5 text-gray-400 hover:text-primary-400" />
  </motion.a>
);

export default Footer;
