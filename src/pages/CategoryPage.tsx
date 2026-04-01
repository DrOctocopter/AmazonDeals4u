import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown, Star, ArrowUpDown } from 'lucide-react';
import { MOCK_DEALS, CATEGORIES } from '../lib/data';
import { DealCard } from '../components/DealCard';
import { cn } from '../lib/utils';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const categoryName = CATEGORIES.find(c => 
    c.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categoryId
  ) || categoryId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  const deals = MOCK_DEALS.filter(d => 
    d.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === categoryId ||
    d.category.toLowerCase().includes(categoryId?.split('-')[0] || '')
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 gap-2 items-center">
        <Link to="/" className="hover:text-orange-600">Home</Link>
        <span>/</span>
        <span className="text-gray-900">{categoryName}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 mb-4 flex items-center gap-2">
              <Filter size={16} />
              Filter By
            </h3>
            
            <div className="space-y-6">
              {/* Price Range */}
              <div>
                <p className="text-xs font-bold text-gray-500 mb-3 uppercase">Price Range</p>
                <div className="space-y-2">
                  {['Under £25', '£25 - £50', '£50 - £100', '£100 - £250', '£250+'].map(range => (
                    <label key={range} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount % */}
              <div>
                <p className="text-xs font-bold text-gray-500 mb-3 uppercase">Discount</p>
                <div className="space-y-2">
                  {['10% off or more', '25% off or more', '50% off or more', '70% off or more'].map(discount => (
                    <label key={discount} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{discount}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <p className="text-xs font-bold text-gray-500 mb-3 uppercase">Customer Rating</p>
                <div className="space-y-2">
                  {[4, 3, 2].map(rating => (
                    <label key={rating} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <div className="flex items-center gap-1 text-yellow-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} fill={i < rating ? "currentColor" : "none"} className={i < rating ? "" : "text-gray-300"} />
                        ))}
                        <span className="text-xs font-medium text-gray-600 ml-1">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Banner Ad / Promo */}
          <div className="bg-orange-600 rounded-2xl p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Pro Tip</p>
            <p className="font-bold mb-4">Get instant alerts for {categoryName} price drops!</p>
            <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-lg text-sm">Enable Notifications</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">{categoryName} Deals</h1>
              <p className="text-gray-500 font-medium">Showing {deals.length} hand-picked offers in the UK.</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase whitespace-nowrap">Sort By:</span>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-700 hover:border-orange-500 transition-all">
                Newest First <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {deals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {deals.map(deal => (
                <DealCard key={deal.id} deal={deal} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowUpDown size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No active deals found</h3>
              <p className="text-gray-500 mb-8">We couldn't find any deals in this category right now. Check back later or browse other categories.</p>
              <Link to="/" className="bg-orange-600 text-white font-bold px-8 py-3 rounded-xl">Back to Homepage</Link>
            </div>
          )}

          {/* Pagination (Simulated) */}
          {deals.length > 0 && (
            <div className="mt-16 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-lg bg-orange-600 text-white font-bold flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:border-orange-500">2</button>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:border-orange-500">3</button>
              <span className="flex items-center px-2">...</span>
              <button className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:border-orange-500">12</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
