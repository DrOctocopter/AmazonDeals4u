import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Award, ShoppingBag } from 'lucide-react';
import { MOCK_DEALS } from '../lib/data';
import { DealCard } from '../components/DealCard';
import { motion } from 'motion/react';
import { SEO, SchemaMarkup } from '../components/SEO';

export const Home: React.FC = () => {
  const trendingDeals = MOCK_DEALS.filter(d => d.isTrending);
  const topDeals = MOCK_DEALS.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 pb-20">
      <SEO 
        title="Best Amazon UK Deals & Offers Today" 
        description="Save big with DealHunter UK. We find the deepest Amazon UK discounts on electronics, home, gaming and more. Updated hourly."
      />
      <SchemaMarkup 
        type="WebSite"
        data={{
          name: "DealHunter UK",
          url: "https://amazondeals4u.com",
          potentialAction: {
            "@type": "SearchAction",
            "target": "https://amazondeals4u.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-[#131921] text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm font-bold mb-6 border border-orange-600/30"
            >
              <Zap size={14} fill="currentColor" />
              <span>Live Deals Updated 2 Minutes Ago</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.9]"
            >
              STOP OVERPAYING. <br />
              <span className="text-[#FF9900]">START SAVING.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-xl"
            >
              We find the deepest Amazon UK discounts so you don't have to. Curated by experts, updated every hour.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-[#FF9900] hover:bg-[#FF8C00] text-black font-black px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-600/20 active:scale-95">
                View Today's Top Deals
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg backdrop-blur-sm transition-all active:scale-95">
                Join 10k+ Deal Hunters
              </button>
            </motion.div>

            <div className="mt-12 flex items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-green-500" />
                <span className="text-sm font-medium">Verified Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-blue-500" />
                <span className="text-sm font-medium">Expert Curated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Deal Card Preview (Desktop) */}
        <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] rotate-[-5deg] opacity-40 hover:opacity-100 transition-opacity duration-500">
          <DealCard deal={MOCK_DEALS[0]} variant="featured" />
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900">£1.2M+</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Saved by Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900">500+</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">New Deals Daily</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900">12k</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Newsletter Subs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-gray-900">4.9/5</p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">User Rating</p>
          </div>
        </div>
      </div>

      {/* Trending Deals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">TRENDING <span className="text-orange-600">NOW</span></h2>
            <p className="text-gray-500 font-medium">The deals everyone is talking about right now.</p>
          </div>
          <Link to="/trending" className="hidden sm:flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all">
            View All Trending <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingDeals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* Category Quick Links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center uppercase tracking-widest">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Electronics', 'Home', 'Gaming', 'Toys', 'Fashion', 'Beauty'].map((cat, i) => (
              <Link 
                key={cat} 
                to={`/category/${cat.toLowerCase()}`}
                className="bg-white border border-gray-200 p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-orange-500 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <span className="text-2xl">
                    {['🔌', '🏠', '🎮', '🧸', '👕', '💄'][i]}
                  </span>
                </div>
                <span className="font-bold text-gray-700 text-sm">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Deal Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="flex-1 space-y-6 relative z-10">
            <div className="inline-block bg-black/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Deal of the Day</div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Save £100 on the New Sony WH-1000XM5</h2>
            <p className="text-lg text-white/80 font-medium max-w-md">The best noise-cancelling headphones just got a massive price drop. Limited stock available at this price.</p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Now Only</span>
                <span className="text-4xl font-black">£279</span>
              </div>
              <div className="h-10 w-[1px] bg-white/20"></div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">RRP</span>
                <span className="text-xl font-bold line-through text-white/40">£380</span>
              </div>
            </div>
            <button className="bg-white text-orange-600 font-black px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95">
              Grab This Deal Now
            </button>
          </div>

          <div className="flex-1 relative z-10 w-full max-w-md">
            <img 
              src="https://picsum.photos/seed/headphones/800/600" 
              alt="Sony Headphones" 
              className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Top Deals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">TOP <span className="text-orange-600">PICKS</span></h2>
            <p className="text-gray-500 font-medium">Hand-picked deals with the highest value for money.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDeals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all">
            Load More Deals <ChevronDown size={18} />
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#232f3e] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="grid grid-cols-10 gap-4">
               {Array.from({length: 100}).map((_, i) => (
                 <ShoppingBag key={i} size={40} />
               ))}
             </div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">NEVER MISS A PRICE DROP AGAIN</h2>
            <p className="text-gray-400 font-medium mb-10">Join 12,450+ UK shoppers who get our "Deal of the Day" alerts. Zero spam, just pure savings.</p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-grow bg-white/10 border-white/20 rounded-xl px-6 py-4 text-white focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button className="bg-[#FF9900] hover:bg-[#FF8C00] text-black font-black px-8 py-4 rounded-xl transition-all whitespace-nowrap">
                Subscribe for Free
              </button>
            </form>
            
            <p className="mt-6 text-xs text-gray-500">By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ChevronDown = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
