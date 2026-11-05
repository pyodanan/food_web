import React from 'react';
import { ChevronRight, Flame, Sparkles, ShieldCheck, Cpu } from 'lucide-react';
import { FoodProduct } from '../types/food';
import { useCart } from '../context/CartContext';

interface HeroProProps {
  product: FoodProduct;
}

export const HeroPro: React.FC<HeroProProps> = ({ product }) => {
  const { openCustomizer, openNutrition } = useCart();

  return (
    <section id="overview" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-black text-white">
      {/* Ambient Titanium Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Apple Sub-title label */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/60 text-[#e5a953] text-xs font-medium tracking-wide uppercase mb-4 animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5" />
          {product.badge || 'New Flagship'}
        </div>

        {/* Massive Apple Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2">
          {product.name}
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 font-normal tracking-tight max-w-2xl mx-auto mb-6">
          {product.tagline}
        </p>

        {/* Apple Pricing style */}
        <p className="text-sm text-neutral-400 mb-8">
          เริ่มต้นที่ <span className="text-white font-semibold">฿{product.price}</span> หรือ ฿{Math.round(product.price / 3)}/ด. ผ่อนชำระ 0% 3 เดือน
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => openCustomizer(product)}
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            ปรับแต่งและสั่งซื้อ
          </button>
          <button
            onClick={() => openNutrition(product)}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            ดูคุณค่าโภชนาการ <ChevronRight className="w-4 h-4 text-neutral-400" />
          </button>
        </div>

        {/* Hero Cinematic Visual */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0c0e] group">
            <img
              src={product.heroImage || product.image}
              alt={product.name}
              className="w-full h-[380px] sm:h-[480px] md:h-[560px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Floating Apple-style Pill Badges */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 text-left">
              <div className="glass-card rounded-2xl px-4 py-3 backdrop-blur-xl border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Thermal Searing</div>
                  <div className="text-sm font-bold text-white">900°F Instant Core</div>
                </div>
              </div>

              <div className="glass-card rounded-2xl px-4 py-3 backdrop-blur-xl border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Culinary Architecture</div>
                  <div className="text-sm font-bold text-white">{product.chip}</div>
                </div>
              </div>

              <div className="hidden sm:flex glass-card rounded-2xl px-4 py-3 backdrop-blur-xl border border-white/10 items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-neutral-400">Provenance</div>
                  <div className="text-sm font-bold text-white">A5 Miyazaki 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Specs Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {product.specs.map((spec, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 text-center">
              <div className="text-xs text-neutral-400 mb-1">{spec.label}</div>
              <div className="text-lg font-bold text-white mb-0.5">{spec.value}</div>
              <div className="text-[11px] text-neutral-400 leading-tight">{spec.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
