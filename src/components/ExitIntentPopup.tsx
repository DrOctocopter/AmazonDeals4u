import React, { useState, useEffect } from 'react';
import { X, Mail, Gift, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useExitIntent } from '../hooks/useUI';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useExitIntent(() => {
    if (!hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  });

  const close = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={close}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="bg-orange-600 w-full md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Gift size={32} />
                </div>
                <p className="text-xs font-black uppercase tracking-widest opacity-80">Free Gift</p>
                <p className="font-black text-xl">DEAL HACK GUIDE</p>
              </div>
              
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-black text-gray-900 leading-tight mb-4">WAIT! DON'T MISS OUT.</h2>
                <p className="text-gray-500 font-medium mb-8">Get our <span className="text-orange-600 font-bold">"Amazon Secret Coupons"</span> guide for free when you join our daily deal alert list.</p>
                
                <form className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full bg-gray-100 border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-orange-500 outline-none"
                      autoFocus
                    />
                  </div>
                  <button className="w-full bg-[#FF9900] hover:bg-[#FF8C00] text-black font-black py-4 rounded-xl text-lg transition-all shadow-xl shadow-orange-500/20">
                    Send Me The Guide
                  </button>
                </form>
                
                <p className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                  No Spam. Only Savings. Unsubscribe Anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
