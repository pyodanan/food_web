import React from 'react';
import { ChevronRight, Wind, Award, Clock } from 'lucide-react';
import { FoodProduct } from '../types/food';
import { useCart } from '../context/CartContext';

interface HeroAirProps {
  product: FoodProduct;
}

export const HeroAir: React.FC<HeroAirProps> = ({ product }) => {
  const { openCustomizer, openNutrition } = useCart();

  return (
    <section className="relative py-20 md:py-28 bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Apple Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-neutral-600 border border-neutral-200/80 text-xs font-semibold tracking-wide uppercase mb-4 shadow-sm">
          <Wind className="w-3.5 h-3.5 text-sky-500" />
          {product.series}
        </div>

        {/* Apple Air Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-3">
          {product.name}
        </h2>

        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-500 tracking-tight max-w-2xl mx-auto mb-4">
          {product.tagline}
        </p>

        <p className="text-sm text-neutral-500 max-w-xl mx-auto mb-6 leading-relaxed">
          {product.description}
        </p>

        <div className="text-sm text-neutral-600 mb-8">
          เริ่มต้นที่ <span className="text-[#1d1d1f] font-semibold">฿{product.price}</span> | ปรุงสดตามออเดอร์ใน 8-10 นาที
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => openCustomizer(product)}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1d1d1f] hover:bg-[#333336] text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
          >
            สั่งซื้อ Air Edition
          </button>
          <button
            onClick={() => openNutrition(product)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-[#1d1d1f] border border-neutral-300 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
          >
            ดูรายละเอียดและโภชนาการ <ChevronRight className="w-4 h-4 text-neutral-500" />
          </button>
        </div>

        {/* Air Visual Presentation */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-black/5 group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[360px] sm:h-[460px] md:h-[520px] object-cover object-center transform group-hover:scale-103 transition-transform duration-700"
            />

            {/* Pill Highlights */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <div className="glass-card-light rounded-2xl px-4 py-2.5 backdrop-blur-xl border border-black/10 flex items-center gap-2.5 shadow-lg">
                <Wind className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-bold text-neutral-800">หนาเพียง 0.4 มม. นุ่มเบา</span>
              </div>
              <div className="glass-card-light rounded-2xl px-4 py-2.5 backdrop-blur-xl border border-black/10 flex items-center gap-2.5 shadow-lg">
                <Award className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold text-neutral-800">Parmigiano D.O.P. 36 เดือน</span>
              </div>
              <div className="glass-card-light rounded-2xl px-4 py-2.5 backdrop-blur-xl border border-black/10 flex items-center gap-2.5 shadow-lg">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold text-neutral-800">เสิร์ฟด่วนใน 8-10 นาที</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
