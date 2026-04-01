import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}

export function calculateDiscount(original: number, current: number) {
  return Math.round(((original - current) / original) * 100);
}

export function getAffiliateUrl(baseUrl: string) {
  const tag = import.meta.env.VITE_AMAZON_TAG;
  if (!tag) return baseUrl;
  
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('tag', tag);
    return url.toString();
  } catch (e) {
    return baseUrl;
  }
}
