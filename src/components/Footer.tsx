import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131921] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-[#FF9900] p-1.5 rounded-lg">
                <ShoppingBag className="text-black" size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter">DEAL<span className="text-[#FF9900]">HUNTER</span>UK</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              We curate the absolute best Amazon UK deals every single day. Our team of expert bargain hunters scours the web to ensure you never overpay again.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF9900] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/trending" className="hover:text-white transition-colors">Trending Deals</Link></li>
              <li><Link to="/guides" className="hover:text-white transition-colors">Buying Guides</Link></li>
              <li><Link to="/prime-day" className="hover:text-white transition-colors">Prime Day Hub</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/category/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/category/home-kitchen" className="hover:text-white transition-colors">Home & Kitchen</Link></li>
              <li><Link to="/category/gaming" className="hover:text-white transition-colors">Gaming</Link></li>
              <li><Link to="/category/fashion" className="hover:text-white transition-colors">Fashion</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Get the top 5 deals of the day sent straight to your inbox.</p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full bg-[#232f3e] border-none rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button className="w-full bg-[#FF9900] hover:bg-[#FF8C00] text-black font-bold py-3 rounded-lg text-sm transition-colors">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </div>
          <p>© {new Date().getFullYear()} DealHunter UK. All rights reserved.</p>
        </div>

        <div className="mt-8 p-4 bg-[#232f3e] rounded-xl text-[10px] text-gray-400 text-center leading-relaxed">
          <p className="font-bold text-gray-300 mb-1 uppercase tracking-widest">Affiliate Disclosure</p>
          DealHunter UK is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.co.uk. As an Amazon Associate, we earn from qualifying purchases.
        </div>
      </div>
    </footer>
  );
};
