export interface Deal {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  discountPercentage: number;
  imageUrl: string;
  category: 'Electronics' | 'Home & Kitchen' | 'Gaming' | 'Toys' | 'Fashion' | 'Health & Beauty';
  rating: number;
  reviewCount: number;
  amazonUrl: string;
  isLimitedTime: boolean;
  endsAt?: string;
  benefits: string[];
  isTrending?: boolean;
}

export const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Noise Cancelling Wireless Headphones',
    description: 'Industry-leading noise cancellation with two processors controlling 8 microphones.',
    originalPrice: 380,
    currentPrice: 279,
    discountPercentage: 27,
    imageUrl: 'https://picsum.photos/seed/headphones/600/400',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 12450,
    amazonUrl: 'https://www.amazon.co.uk/dp/B09Y2MYL5C',
    isLimitedTime: true,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 5).toISOString(),
    benefits: ['30-hour battery life', 'Crystal clear hands-free calling', 'Multipoint connection'],
    isTrending: true,
  },
  {
    id: '2',
    title: 'Ninja Foodi MAX Dual Zone Air Fryer [AF400UK]',
    description: '9.5L capacity, 2 independent cooking zones. Cook 2 foods, 2 ways, both finish at the same time.',
    originalPrice: 249.99,
    currentPrice: 179,
    discountPercentage: 28,
    imageUrl: 'https://picsum.photos/seed/airfryer/600/400',
    category: 'Home & Kitchen',
    rating: 4.9,
    reviewCount: 25000,
    amazonUrl: 'https://www.amazon.co.uk/dp/B09C13V6K5',
    isLimitedTime: false,
    benefits: ['6 cooking functions', 'Up to 75% faster than fan ovens', 'Large 9.5L capacity'],
    isTrending: true,
  },
  {
    id: '3',
    title: 'Samsung Odyssey G5 32" Curved Gaming Monitor',
    description: '144Hz refresh rate, 1ms response time, WQHD resolution.',
    originalPrice: 349,
    currentPrice: 249,
    discountPercentage: 29,
    imageUrl: 'https://picsum.photos/seed/monitor/600/400',
    category: 'Gaming',
    rating: 4.6,
    reviewCount: 5600,
    amazonUrl: 'https://www.amazon.co.uk/dp/B08C7V9S8B',
    isLimitedTime: true,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(),
    benefits: ['1000R curvature', 'AMD FreeSync Premium', 'HDR10 support'],
  },
  {
    id: '4',
    title: 'LEGO Star Wars Millennium Falcon Building Set',
    description: 'The iconic Corellian freighter with rotating top and bottom laser turrets.',
    originalPrice: 149.99,
    currentPrice: 119.99,
    discountPercentage: 20,
    imageUrl: 'https://picsum.photos/seed/lego/600/400',
    category: 'Toys',
    rating: 4.9,
    reviewCount: 8900,
    amazonUrl: 'https://www.amazon.co.uk/dp/B07Q2N7M6V',
    isLimitedTime: false,
    benefits: ['7 characters included', 'Opening cockpit', 'Detailed interior'],
  },
  {
    id: '5',
    title: 'Levi\'s Men\'s 501 Original Fit Jeans',
    description: 'The original blue jean since 1873. Straight fit with button fly.',
    originalPrice: 80,
    currentPrice: 45,
    discountPercentage: 44,
    imageUrl: 'https://picsum.photos/seed/jeans/600/400',
    category: 'Fashion',
    rating: 4.5,
    reviewCount: 15000,
    amazonUrl: 'https://www.amazon.co.uk/dp/B0018OR12I',
    isLimitedTime: false,
    benefits: ['100% Cotton', 'Durable denim', 'Classic style'],
  },
  {
    id: '6',
    title: 'Oral-B iO7 Electric Toothbrush with 2 Brush Heads',
    description: 'Revolutionary iO technology for a professional clean feeling and gentle brushing experience.',
    originalPrice: 399.99,
    currentPrice: 149.99,
    discountPercentage: 63,
    imageUrl: 'https://picsum.photos/seed/toothbrush/600/400',
    category: 'Health & Beauty',
    rating: 4.7,
    reviewCount: 3200,
    amazonUrl: 'https://www.amazon.co.uk/dp/B089M1V2Z9',
    isLimitedTime: true,
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
    benefits: ['Interactive display', '5 brushing modes', 'Magnetic charger'],
    isTrending: true,
  }
];

export const CATEGORIES = [
  'Electronics',
  'Home & Kitchen',
  'Gaming',
  'Toys',
  'Fashion',
  'Health & Beauty'
];
