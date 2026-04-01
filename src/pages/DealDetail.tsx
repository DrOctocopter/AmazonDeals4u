import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Clock, ShieldCheck, Share2, Heart, ChevronRight, CheckCircle2, TrendingUp, Info } from 'lucide-react';
import { MOCK_DEALS } from '../lib/data';
import { formatCurrency, cn, getAffiliateUrl } from '../lib/utils';
import { useCountdown } from '../hooks/useUI';
import { DealCard } from '../components/DealCard';
import { SEO, SchemaMarkup } from '../components/SEO';

export const DealDetail: React.FC = () => {
  const { dealId } = useParams<{ dealId: string }>();
  const deal = MOCK_DEALS.find(d => d.id === dealId);
  const timeLeft = deal?.endsAt ? useCountdown(deal.endsAt) : null;
  const affiliateUrl = deal ? getAffiliateUrl(deal.amazonUrl) : '';

  if (!deal) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-black mb-4">Deal Not Found</h2>
        <p className="text-gray-500 mb-8">The deal you are looking for may have expired or been removed.</p>
        <Link to="/" className="bg-orange-600 text-white font-bold px-8 py-3 rounded-xl">Back to Homepage</Link>
      </div>
    );
  }

  const relatedDeals = MOCK_DEALS.filter(d => d.category === deal.category && d.id !== deal.id).slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <SEO 
        title={`${deal.title} - ${deal.discountPercentage}% OFF`}
        description={`Get the ${deal.title} for only ${formatCurrency(deal.currentPrice)} (was ${formatCurrency(deal.originalPrice)}). Best Amazon UK deal verified today.`}
      />
      <SchemaMarkup 
        type="Product"
        data={{
          name: deal.title,
          description: deal.description,
          image: deal.imageUrl,
          offers: {
            "@type": "Offer",
            "price": deal.currentPrice,
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": deal.amazonUrl
          },
          aggregateRating: {
            "@type": "AggregateRating",
            "ratingValue": deal.rating,
            "reviewCount": deal.reviewCount
          }
        }}
      />
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex text-[10px] font-bold uppercase tracking-widest text-gray-400 gap-2 items-center">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/category/${deal.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-orange-600">{deal.category}</Link>
          <ChevronRight size={12} />
          <span className="text-gray-900 line-clamp-1">{deal.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Image & Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden">
              {/* Badges */}
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                <div className="bg-red-600 text-white font-black px-3 py-1.5 rounded-lg text-sm shadow-lg">
                  -{deal.discountPercentage}% OFF
                </div>
                {deal.isTrending && (
                  <div className="bg-orange-500 text-white font-black px-3 py-1.5 rounded-lg text-sm shadow-lg flex items-center gap-1">
                    <TrendingUp size={14} />
                    TRENDING
                  </div>
                )}
              </div>

              <img 
                src={deal.imageUrl} 
                alt={deal.title}
                className="w-full aspect-square object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Trust Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900">Verified Deal</p>
                  <p className="text-[10px] text-gray-500">Checked 5m ago</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900">Price Match</p>
                  <p className="text-[10px] text-gray-500">Best UK price</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-black text-gray-900">{deal.rating} Rating</p>
                  <p className="text-[10px] text-gray-500">{deal.reviewCount.toLocaleString()} Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm sticky top-24">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest font-black text-orange-600 bg-orange-50 px-2 py-1 rounded-md">{deal.category}</span>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Heart size={20} /></button>
                  <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors"><Share2 size={20} /></button>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-6">
                {deal.title}
              </h1>

              {deal.isLimitedTime && timeLeft && !timeLeft.expired && (
                <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-600">
                    <Clock size={20} />
                    <span className="font-black text-sm uppercase tracking-wider">Limited Time Offer</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-center min-w-[40px]">
                      <span className="block text-sm font-black text-red-600">{timeLeft.hours}</span>
                      <span className="text-[8px] font-bold text-gray-400 uppercase">Hrs</span>
                    </div>
                    <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-center min-w-[40px]">
                      <span className="block text-sm font-black text-red-600">{timeLeft.minutes}</span>
                      <span className="text-[8px] font-bold text-gray-400 uppercase">Min</span>
                    </div>
                    <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-center min-w-[40px]">
                      <span className="block text-sm font-black text-red-600">{timeLeft.seconds}</span>
                      <span className="text-[8px] font-bold text-gray-400 uppercase">Sec</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-1 mb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-black text-gray-900">{formatCurrency(deal.currentPrice)}</span>
                  <span className="text-xl text-gray-400 line-through font-bold">{formatCurrency(deal.originalPrice)}</span>
                </div>
                <p className="text-green-600 font-bold flex items-center gap-1">
                  <TrendingUp size={16} />
                  You save {formatCurrency(deal.originalPrice - deal.currentPrice)} ({deal.discountPercentage}%)
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">Key Benefits</h3>
                <ul className="space-y-3">
                  {deal.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FF9900] hover:bg-[#FF8C00] text-black font-black py-5 rounded-2xl text-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-500/20 active:scale-[0.98]"
              >
                <ShoppingCart size={24} />
                View Deal on Amazon
              </a>

              <p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1">
                <Info size={12} />
                Prices and availability are accurate as of the date/time indicated and are subject to change.
              </p>
            </div>

            {/* Newsletter Mini */}
            <div className="bg-[#232f3e] rounded-3xl p-6 text-white">
              <h4 className="font-black mb-2 uppercase tracking-wider">Price Drop Alerts</h4>
              <p className="text-xs text-gray-400 mb-4">We'll email you if the price for this item drops even further.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="flex-grow bg-white/10 border-none rounded-lg px-3 py-2 text-sm" />
                <button className="bg-orange-500 px-4 py-2 rounded-lg text-xs font-bold">Alert Me</button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Deals */}
        <section className="mt-20">
          <h2 className="text-2xl font-black text-gray-900 mb-8 uppercase tracking-widest">More {deal.category} Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedDeals.map(d => (
              <DealCard key={d.id} deal={d} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
