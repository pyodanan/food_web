export type FoodCategory = 'all' | 'burgers' | 'pasta' | 'pizzas' | 'desserts' | 'beverages';

export interface CulinarySpec {
  label: string;
  value: string;
  detail?: string;
}

export interface NutritionData {
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  prepTime: string;
  chefOrigin: string;
}

export interface PortionOption {
  id: string;
  name: string;
  weight: string;
  priceOffset: number;
  recommended?: boolean;
}

export interface StyleOption {
  id: string;
  name: string;
  desc: string;
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  desc: string;
}

export interface FoodProduct {
  id: string;
  name: string;
  modelBadge: string;
  series: string;
  tagline: string;
  description: string;
  price: number;
  category: FoodCategory;
  image: string;
  heroImage?: string;
  chip: string;
  highlights: string[];
  specs: CulinarySpec[];
  nutrition: NutritionData;
  customization: {
    portions: PortionOption[];
    styles?: StyleOption[];
    addons: AddonOption[];
  };
  isFeaturedHero?: boolean;
  isAirHero?: boolean;
  badge?: string;
}

export interface CartItem {
  cartId: string;
  product: FoodProduct;
  selectedPortion: PortionOption;
  selectedStyle?: StyleOption;
  selectedAddons: AddonOption[];
  includeCarePlus: boolean;
  specialNote: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderReceipt {
  orderId: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  address: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  carePlusFee: number;
  discount: number;
  total: number;
  estimatedDeliveryMin: number;
  paymentMethod: string;
}
