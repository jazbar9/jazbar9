export interface FeaturedOverride {
  key: string;
  slogan: string;
  tags: string[];
  demoUrl?: string;
}

export const FEATURED_OVERRIDES: FeaturedOverride[] = [
  {
    key: 'github/pointofsale_retail_analytics',
    slogan: 'Market basket analysis on real-world POS data',
    tags: ['Python', 'Pandas', 'Market Basket'],
  },
  {
    key: 'github/twitch-data-analysis-sql',
    slogan: 'Audience & growth metrics on top 1,000 streamers',
    tags: ['SQL', 'Analytics'],
  },
  {
    key: 'github/ecommerce-revenue-analytics',
    slogan: 'Profitability and reverse logistics analytics',
    tags: ['Python', 'E-commerce', 'Analytics'],
  },
  {
    key: 'github/ECommerce-Sales-Prediction',
    slogan: 'ML API for e-commerce sales forecasting',
    tags: ['Python', 'ML API', 'Forecasting'],
  },
];

export const FEATURED_ORDER = FEATURED_OVERRIDES.map((o) => o.key);