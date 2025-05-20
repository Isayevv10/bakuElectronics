export interface ProductResponse {
  title: string;
  products: Product[];
}

export interface Product {
  id: number;
  product_code: number;
  name: string;
  slug: string;
  price: number;
  discount: string;
  discounted_price: number;
  perMonth: PerMonth;
  quantity: number;
  reviewCount: number;
  rate: number;
  image: string;
  campaign_widgets: any[];
  gift_widgets: any[];
  is_online: boolean;
  is_basket: boolean;
  is_favorite: boolean;
  is_compare: boolean;
}

export interface PerMonth {
  month: number;
  price: number;
}
