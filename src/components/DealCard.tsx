import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Clock, TrendingUp } from 'lucide-react';
import { Deal } from '../lib/data';
import { cn, formatCurrency, getAffiliateUrl } from '../lib/utils';
import { useCountdown } from '../hooks/useUI';

interface DealCardProps {
  deal: Deal;
  variant?: 'grid' | 'list' | 'featured';
}

export const DealCard: React.FC<DealCardProps> = ({ deal, variant = 'grid' }) => {
  const timeLeft = deal.endsAt ? useCountdown(deal.endsAt) : null;
  const affiliateUrl = getAffiliateUrl(deal.amazonUrl);

  const isFeatured = variant === 'featured';

  return (
    <div 
      className={cn(
        "group relative bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:border-orange-200",
        isFeatured ? "flex flex-col md:flex-row h-full" : "flex flex-col"
      )}
      id={`deal-${deal.id}`}
    >
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10 bg-red-600 text-white font-bold px-2 py-1 rounded text-sm shadow-sm">
        -{deal.discountPercentage}% OFF
      </div>

      {/* Image Section */}
      <div className={cn(
        "relative overflow-hidden bg-gray-100",
        isFeatured ? "w-full md:w-1/2 aspect-video md:aspect-auto" : "aspect-square"
      )}>
        <img 
          src={deal.imageUrl} 
          alt={deal.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {deal.isTrending && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-orange-600 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-orange-100">
            <TrendingUp size={12} />
            Trending
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className={cn(
        "p-4 flex flex-col flex-grow",
        isFeatured ? "w-full md:w-1/2 justify-center" : ""
      )}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">{deal.category}</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-bold text-gray-700">{deal.rating}</span>
            <span className="text-[10px] text-gray-400">({deal.reviewCount.toLocaleString()})</span>
          </div>
        </div>

        <Link to={`/deal/${deal.id}`} className="block">
          <h3 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
            {deal.title}
          </h3>
        </Link>

        {deal.isLimitedTime && timeLeft && !timeLeft.expired && (
          <div className="flex items-center gap-1.5 text-red-600 mb-3 text-xs font-bold bg-red-50 p-1.5 rounded-lg border border-red-100">
            <Clock size={14} />
            <span>Ends in: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
          </div>
        )}

        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-black text-gray-900">{formatCurrency(deal.currentPrice)}</span>
            <span className="text-sm text-gray-400 line-through">{formatCurrency(deal.originalPrice)}</span>
          </div>

          <a 
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#FF9900] hover:bg-[#FF8C00] text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-[0.98]"
            onClick={(e) => e.stopPropagation()}
          >
            <ShoppingCart size={18} />
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
};
