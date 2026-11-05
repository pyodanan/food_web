import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, FoodProduct, OrderReceipt } from '../types/food';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  // Modals
  customizingProduct: FoodProduct | null;
  openCustomizer: (product: FoodProduct) => void;
  closeCustomizer: () => void;
  nutritionProduct: FoodProduct | null;
  openNutrition: (product: FoodProduct) => void;
  closeNutrition: () => void;
  // Promo and summary
  promoCode: string;
  appliedDiscountPercent: number;
  promoError: string;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  // Totals
  itemCount: number;
  subtotal: number;
  deliveryFee: number;
  carePlusTotal: number;
  discountAmount: number;
  grandTotal: number;
  // Checkout Order
  latestReceipt: OrderReceipt | null;
  setLatestReceipt: (receipt: OrderReceipt | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'bistro_apple_cart_v1';

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingProduct, setCustomizingProduct] = useState<FoodProduct | null>(null);
  const [nutritionProduct, setNutritionProduct] = useState<FoodProduct | null>(null);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [latestReceipt, setLatestReceipt] = useState<OrderReceipt | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart(prev => {
      // Check if matching item exists with same options
      const existingIdx = prev.findIndex(item =>
        item.product.id === newItem.product.id &&
        item.selectedPortion.id === newItem.selectedPortion.id &&
        item.selectedStyle?.id === newItem.selectedStyle?.id &&
        item.includeCarePlus === newItem.includeCarePlus &&
        item.selectedAddons.length === newItem.selectedAddons.length &&
        item.selectedAddons.every(a => newItem.selectedAddons.some(na => na.id === a.id))
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        const existing = updated[existingIdx];
        const newQty = existing.quantity + newItem.quantity;
        updated[existingIdx] = {
          ...existing,
          quantity: newQty,
          totalPrice: newQty * existing.unitPrice
        };
        return updated;
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const updateQuantity = (cartId: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.cartId === cartId) {
            const nextQty = item.quantity + delta;
            if (nextQty <= 0) return null;
            return {
              ...item,
              quantity: nextQty,
              totalPrice: nextQty * item.unitPrice
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const openCustomizer = (product: FoodProduct) => {
    setCustomizingProduct(product);
  };

  const closeCustomizer = () => {
    setCustomizingProduct(null);
  };

  const openNutrition = (product: FoodProduct) => {
    setNutritionProduct(product);
  };

  const closeNutrition = () => {
    setNutritionProduct(null);
  };

  const applyPromoCode = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'APPLE10' || clean === 'BISTRO2026') {
      setPromoCode(clean);
      setAppliedDiscountPercent(10);
      setPromoError('');
      return true;
    } else if (clean === 'PROMAX') {
      setPromoCode(clean);
      setAppliedDiscountPercent(15);
      setPromoError('');
      return true;
    } else {
      setPromoError('รหัสโปรโมชั่นไม่ถูกต้อง ลองใส่ "APPLE10" หรือ "PROMAX"');
      return false;
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setAppliedDiscountPercent(0);
    setPromoError('');
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const carePlusTotal = cart.reduce((acc, item) => acc + (item.includeCarePlus ? 39 * item.quantity : 0), 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 45;
  const discountAmount = Math.round((subtotal * appliedDiscountPercent) / 100);
  const grandTotal = Math.max(0, subtotal + deliveryFee + carePlusTotal - discountAmount);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        customizingProduct,
        openCustomizer,
        closeCustomizer,
        nutritionProduct,
        openNutrition,
        closeNutrition,
        promoCode,
        appliedDiscountPercent,
        promoError,
        applyPromoCode,
        removePromoCode,
        itemCount,
        subtotal,
        deliveryFee,
        carePlusTotal,
        discountAmount,
        grandTotal,
        latestReceipt,
        setLatestReceipt
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
