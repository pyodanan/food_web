import React from 'react';
import { Sparkles, Info, ShoppingCart } from 'lucide-react';
import { FoodProduct } from '../types/food';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: FoodProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openCustomizer, openNutrition } = useCart();

  return (
    <div className="group rounded-3xl bg-[#161618] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-black/50">
      {/* Product Image Area */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900 cursor-pointer" onClick={() => openCustomizer(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161618] via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#2997ff] border border-white/10">
            {product.modelBadge}
          </span>
          {product.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {product.badge}
            </span>
          )}
        </div>

        {/* Floating Nutrition Info Trigger */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openNutrition(product);
          }}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-neutral-300 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
          title="ดูข้อมูลโภชนาการ"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>

      {/* Product Details Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1">
            {product.series}
          </div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#2997ff] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Key Specs Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5">
              {product.nutrition.calories} kcal
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5">
              โปรตีน {product.nutrition.protein}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-neutral-300 border border-white/5">
              {product.nutrition.prepTime}
            </span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-white tracking-tight">
              ฿{product.price}
            </div>
            <div className="text-[10px] text-neutral-400">
              หรือ ฿{Math.round(product.price / 3)}/ด. (0%)
            </div>
          </div>

          <button
            onClick={() => openCustomizer(product)}
            className="px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>ปรับแต่ง & ซื้อ</span>
          </button>
        </div>
      </div>
    </div>
  );
};
