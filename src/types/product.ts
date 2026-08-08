export type CategoryId = 
  | 'all'
  | 'nighties' 
  | 'dresses' 
  | 'sarees' 
  | 'blouses' 
  | 'innerwear' 
  | 'kids'
  | 'perfumes' 
  | 'natural-care';

export type StockStatus = 'in_stock' | 'limited_stock' | 'out_of_stock' | 'coming_soon';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string;
  badge?: string;
  image: string;
  accentColor: string;
}

export interface ProductVariantOption {
  name: string; // e.g., "Size", "Color", "Pack Size"
  options: string[]; // e.g., ["M", "L", "XL", "XXL"] or ["20g", "100g"]
}

export interface Product {
  id: string;
  productId: string; // Unique business code e.g., NIT-001, KDS-001
  name: string;
  slug: string;
  categoryId: CategoryId;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  stockStatus: StockStatus;
  variants: ProductVariantOption[];
  
  // Specific optional details
  fabric?: string;
  colors?: string[];
  sizes?: string[];
  packSizes?: string[];
  careInstructions?: string[];
  ingredients?: string[];
  netWeight?: string;
  usageInstructions?: string;
  precautions?: string;
  
  featured?: boolean;
  isNaturalProduct?: boolean;
  createdAt: string;
}

export interface FilterState {
  categoryId: CategoryId;
  searchQuery: string;
  size?: string;
  stockOnly?: boolean;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'name';
}
