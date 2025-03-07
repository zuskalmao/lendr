import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, CheckCircle } from 'lucide-react';

const FlashLoanDemo: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('1000');
  const [asset, setAsset] = useState<string>('SOL');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const feeAmount = parseFloat(loanAmount) * 0.001;

  return (
    <section id="demo" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-800 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-30 bg-noise"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-900/10 via-dark-800/0 to-dark-800/0 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary-500/10 border border-primary-500/20"
          >
            <Zap className="h-4 w-4 text-primary-500 mr-2" />
            <span className="text-sm font-medium text-primary-300">Interactive Demo</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Try the $LENDR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Flash Loan Simulator</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto text-lg text-gray-300"
          >
            Experience the power of flash loans with our interactive simulator. Calculate fees, simulate transaction flow, and see how fast it all happens on Solana.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Flash Loan Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 bg-dark-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Flash Loan Calculator</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="asset" className="block text-gray-400 mb-2">Select Asset</label>
                <select 
                  id="asset"
                  className="w-full px-4 py-3 bg-dark-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                >
                  <option value="SOL">SOL</option>
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="amount" className="block text-gray-400 mb-2">Flash Loan Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="number"
                    id="amount"
                    className="w-full pl-10 pr-4 py-3 bg-dark-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter amount"
                    min="1"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="bg-dark-700/50 rounded-lg p-4 mb-6">
                <h4 className="text-gray-300 font-medium mb-2">Fee Calculation</h4>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Loan Amount:</span>
                  <span className="text-white font-medium">{Number(loanAmount).toLocaleString()} {asset}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Fee Rate:</span>
                  <span className="text-white font-medium">0.1%</span>
                </div>
                <div className="flex justify-between border-t border-gray-600 pt-2 mt-2">
                  <span className="text-gray-400">Total Fee:</span>
                  <span className="text-primary-400 font-medium">{feeAmount.toLocaleString()} {asset}</span>
                </div>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center
                  ${isSuccess 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400'
                  }
                `}
                disabled={isLoading || isSuccess}
              >
                {isLoading ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSuccess ? (
                  <span className="inline-flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Simulation Complete!
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Simulate Flash Loan
                  </span>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Transaction Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-1 bg-dark-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Transaction Flow</h3>
            
            <div className="space-y-6 relative">
              {/* Vertical line connecting steps */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-solana-500"></div>
              
              <TransactionStep 
                number={1}
                title="Initialize Transaction"
                description="Your transaction starts, requesting funds from the $LENDR protocol."
                isActive={isLoading || isSuccess}
                activationDelay={0}
              />
              
              <TransactionStep 
                number={2}
                title="Receive Flash Loan"
                description={`${Number(loanAmount).toLocaleString()} ${asset} is instantly transferred to your account.`}
                isActive={isLoading || isSuccess}
                activationDelay={0.3}
              />
              
              <TransactionStep 
                number={3}
                title="Execute Strategy"
                description="Perform any operations with the borrowed funds (arbitrage, swap, etc)."
                isActive={isLoading || isSuccess}
                activationDelay={0.6}
              />
              
              <TransactionStep 
                number={4}
                title="Repay Loan + Fee"
                description={`Return ${Number(loanAmount).toLocaleString()} ${asset} + ${feeAmount.toLocaleString()} ${asset} fee to the protocol.`}
                isActive={isLoading || isSuccess}
                activationDelay={0.9}
              />
              
              <TransactionStep 
                number={5}
                title="Transaction Completes"
                description="The entire process completes in the same Solana transaction block."
                isActive={isSuccess}
                activationDelay={1.2}
                isLastStep={true}
              />
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-gray-300 font-medium mb-2">Why Choose $LENDR?</h4>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Lowest fees in the Solana ecosystem
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  No collateral required for flash loans
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Deep liquidity across multiple assets
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TransactionStep: React.FC<{ 
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  activationDelay: number;
  isLastStep?: boolean;
}> = ({ number, title, description, isActive, activationDelay, isLastStep = false }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  
  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (isActive) {
      timer = setTimeout(() => {
        setIsAnimated(true);
      }, activationDelay * 1000);
    } else {
      setIsAnimated(false);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [isActive, activationDelay]);

  return (
    <div className="flex">
      <div className="relative mr-4">
        <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold z-10 transition-all duration-500
          ${isAnimated
            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white animate-pulse-slow'
            : 'bg-dark-700 text-gray-400'
          }
        `}>
          {number}
        </div>
      </div>
      
      <div className={`flex-1 transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-50'}`}>
        <h4 className={`font-medium mb-1 transition-colors duration-500 ${isAnimated ? 'text-white' : 'text-gray-400'}`}>
          {title}
        </h4>
        <p className="text-sm text-gray-400">{description}</p>
        
        {isAnimated && !isLastStep && (
          <div className="mt-2 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent w-full" />
        )}
      </div>
    </div>
  );
};

export default FlashLoanDemo;
