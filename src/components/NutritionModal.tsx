import React from 'react';
import { X, Activity, Flame, ShieldAlert, Award, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const NutritionModal: React.FC = () => {
  const { nutritionProduct, closeNutrition, openCustomizer } = useCart();

  if (!nutritionProduct) return null;

  const n = nutritionProduct.nutrition;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-[#161618] border border-white/10 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl text-white my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#161618]/95 backdrop-blur-md z-10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                Apple Health & Culinary Specs
              </div>
              <h2 className="text-xl font-bold text-white">
                {nutritionProduct.name}
              </h2>
            </div>
          </div>
          <button
            onClick={closeNutrition}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Macros Apple Watch Style Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-center">
              <div className="text-xs text-neutral-400">พลังงานรวม</div>
              <div className="text-2xl font-bold text-rose-400 mt-1">{n.calories}</div>
              <div className="text-[10px] text-neutral-400">กิโลแคลอรี</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-center">
              <div className="text-xs text-neutral-400">โปรตีนสูง</div>
              <div className="text-2xl font-bold text-blue-400 mt-1">{n.protein}</div>
              <div className="text-[10px] text-neutral-400">ซ่อมแซมกล้ามเนื้อ</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-center">
              <div className="text-xs text-neutral-400">คาร์โบไฮเดรต</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{n.carbs}</div>
              <div className="text-[10px] text-neutral-400">พลังงานสะอาด</div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-center">
              <div className="text-xs text-neutral-400">ไขมันดี</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{n.fat}</div>
              <div className="text-[10px] text-neutral-400">กรดไขมันไม่อิ่มตัว</div>
            </div>
          </div>

          {/* Provenance & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-[#2997ff]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400">แหล่งกำเนิดวัตถุดิบ (Origin)</div>
                <div className="text-sm font-semibold text-white">{n.chefOrigin}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-neutral-400">ระยะเวลาปรุงสด (Cook Time)</div>
                <div className="text-sm font-semibold text-white">{n.prepTime}</div>
              </div>
            </div>
          </div>

          {/* Culinary Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              จุดเด่นแห่งนวัตกรรม (Highlights)
            </div>
            <div className="space-y-2">
              {nutritionProduct.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 flex items-center gap-3 text-sm text-neutral-200"
                >
                  <Award className="w-4 h-4 text-[#e5a953] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Breakdown */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              สเปกทางเทคนิคห้องครัว (Culinary Technical Specs)
            </div>
            <div className="rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5 bg-neutral-900/30">
              {nutritionProduct.specs.map((spec, idx) => (
                <div key={idx} className="p-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-400 font-medium">{spec.label}</span>
                  <div className="text-right">
                    <div className="font-bold text-white">{spec.value}</div>
                    {spec.detail && (
                      <div className="text-[11px] text-neutral-400 font-normal">{spec.detail}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Allergen & Clean Transparency */}
          <div className="p-4 rounded-2xl bg-neutral-900/70 border border-white/10 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-400 leading-relaxed">
              ปราศจากผงชูรสปรุงแต่งสังเคราะห์ 100% วัตถุดิบธรรมชาติคัดสรรผ่านเกณฑ์มาตรฐานความปลอดภัยทางชีวภาพขั้นสูง
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#161618] flex items-center justify-between">
          <div>
            <div className="text-xs text-neutral-400">ราคาเริ่มต้น</div>
            <div className="text-lg font-bold text-white">฿{nutritionProduct.price}</div>
          </div>
          <button
            onClick={() => {
              closeNutrition();
              openCustomizer(nutritionProduct);
            }}
            className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all shadow-md"
          >
            ไปที่หน้าปรับแต่งเมนูนี้
          </button>
        </div>
      </div>
    </div>
  );
};
