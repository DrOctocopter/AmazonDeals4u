import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ChevronRight, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    id: '1',
    title: 'Top 10 Amazon Finds Under £50 (March 2026)',
    excerpt: 'We scoured Amazon UK to find the best hidden gems that won\'t break the bank. From tech gadgets to home decor.',
    image: 'https://picsum.photos/seed/blog1/800/400',
    date: 'March 28, 2026',
    readTime: '5 min read',
    category: 'Guides'
  },
  {
    id: '2',
    title: 'How to Use CamelCamelCamel to Track Amazon Prices',
    excerpt: 'Master the art of price tracking and never miss a historic low again with our comprehensive guide.',
    image: 'https://picsum.photos/seed/blog2/800/400',
    date: 'March 25, 2026',
    readTime: '8 min read',
    category: 'Deal Hacks'
  },
  {
    id: '3',
    title: 'Best Air Fryers in the UK: 2026 Comparison',
    excerpt: 'Ninja vs Tower vs Cosori. We test the UK\'s most popular air fryers to see which one actually delivers the crunch.',
    image: 'https://picsum.photos/seed/blog3/800/400',
    date: 'March 20, 2026',
    readTime: '12 min read',
    category: 'Reviews'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">Buying Guides & <span className="text-orange-600">Deal Hacks</span></h1>
        <p className="text-lg text-gray-500 font-medium">Expert advice to help you shop smarter and save more on Amazon UK.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map(post => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all group">
            <Link to={`/guides/${post.id}`} className="block relative aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-orange-600">
                {post.category}
              </div>
            </Link>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-4">
                <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><BookOpen size={14} /> {post.readTime}</span>
              </div>
              <Link to={`/guides/${post.id}`}>
                <h2 className="text-xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <Link to={`/guides/${post.id}`} className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm hover:gap-3 transition-all">
                Read Full Guide <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Mini */}
      <div className="mt-20 bg-orange-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-3xl font-black mb-2">GET THE INSIDE SCOOP</h2>
          <p className="text-orange-100 font-medium">Join our weekly newsletter for exclusive deal hacks and early access to Prime Day leaks.</p>
        </div>
        <form className="flex w-full md:w-auto gap-2">
          <input type="email" placeholder="Email address" className="flex-grow md:w-64 bg-white/10 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-orange-200 outline-none focus:ring-2 focus:ring-white" />
          <button className="bg-white text-orange-600 font-black px-6 py-3 rounded-xl whitespace-nowrap">Join Now</button>
        </form>
      </div>
    </div>
  );
};
