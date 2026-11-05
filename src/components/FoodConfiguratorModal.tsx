import React, { useState, useEffect } from 'react';
import { X, Check, ShieldCheck, Sparkles, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PortionOption, StyleOption, AddonOption, CartItem } from '../types/food';

export const FoodConfiguratorModal: React.FC = () => {
  const { customizingProduct, closeCustomizer, addToCart } = useCart();

  const [selectedPortion, setSelectedPortion] = useState<PortionOption | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | undefined>(undefined);
  const [selectedAddons, setSelectedAddons] = useState<AddonOption[]>([]);
  const [includeCarePlus, setIncludeCarePlus] = useState(false);
  const [specialNote, setSpecialNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (customizingProduct) {
      const defaultPortion =
        customizingProduct.customization.portions.find(p => p.recommended) ||
        customizingProduct.customization.portions[0];
      setSelectedPortion(defaultPortion);

      if (customizingProduct.customization.styles && customizingProduct.customization.styles.length > 0) {
        setSelectedStyle(customizingProduct.customization.styles[0]);
      } else {
        setSelectedStyle(undefined);
      }

      setSelectedAddons([]);
      setIncludeCarePlus(false);
      setSpecialNote('');
      setQuantity(1);
    }
  }, [customizingProduct]);

  if (!customizingProduct || !selectedPortion) return null;

  const toggleAddon = (addon: AddonOption) => {
    setSelectedAddons(prev => {
      const exists = prev.some(a => a.id === addon.id);
      if (exists) {
        return prev.filter(a => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice =
    customizingProduct.price +
    selectedPortion.priceOffset +
    addonsTotal +
    (includeCarePlus ? 39 : 0);
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    const item: CartItem = {
      cartId: `${customizingProduct.id}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      product: customizingProduct,
      selectedPortion,
      selectedStyle,
      selectedAddons,
      includeCarePlus,
      specialNote,
      quantity,
      unitPrice,
      totalPrice
    };

    addToCart(item);
    closeCustomizer();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#161618] border border-white/10 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl text-white my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#161618]/95 backdrop-blur-md z-20">
          <div>
            <div className="text-[11px] font-semibold text-[#2997ff] uppercase tracking-wider">
              Bistro Configurator
            </div>
            <h2 className="text-xl font-bold text-white">
              ปรับแต่ง {customizingProduct.name}
            </h2>
          </div>
          <button
            onClick={closeCustomizer}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* Product Quick Overview */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-neutral-900/60 border border-white/5">
            <img
              src={customizingProduct.image}
              alt={customizingProduct.name}
              className="w-full sm:w-36 h-36 object-cover rounded-xl border border-white/10"
            />
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-[#2997ff] border border-blue-500/30">
                {customizingProduct.modelBadge}
              </span>
              <h3 className="text-lg font-bold text-white">{customizingProduct.tagline}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {customizingProduct.description}
              </p>
              <div className="text-sm font-semibold text-white pt-1">
                ราคาฐาน: ฿{customizingProduct.price}
              </div>
            </div>
          </div>

          {/* Section 1: Choose Portion Size (Apple Storage Selector Style) */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white">
              1. เลือกรุ่นและขนาดพอร์ชัน (Choose your model)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {customizingProduct.customization.portions.map(p => {
                const isSelected = selectedPortion.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPortion(p)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-[#0071e3] bg-[#0071e3]/10 ring-2 ring-[#0071e3]'
                        : 'border-white/10 bg-neutral-900/50 hover:border-white/20'
                    }`}
                  >
                    {p.recommended && (
                      <span className="absolute -top-2.5 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#0071e3] text-white">
                        ยอดนิยม
                      </span>
                    )}
                    <div className="text-sm font-bold text-white">{p.name}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{p.weight}</div>
                    <div className="text-xs font-semibold mt-3 text-neutral-200">
                      {p.priceOffset === 0 ? 'รวมในราคาพื้นฐาน' : `+ ฿${p.priceOffset}`}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Choose Style/Doneness (if available) */}
          {customizingProduct.customization.styles && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-white">
                2. เลือกระดับความสุก หรือ สไตล์เชฟ (Finish & Cook Profile)
              </label>
              <div className="space-y-2">
                {customizingProduct.customization.styles.map(style => {
                  const isSelected = selectedStyle?.id === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style)}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'border-[#0071e3] bg-[#0071e3]/10 ring-1 ring-[#0071e3]'
                          : 'border-white/10 bg-neutral-900/50 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">{style.name}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">{style.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-[#0071e3] bg-[#0071e3] text-white'
                            : 'border-neutral-600'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 3: Premium Culinary Upgrades (Apple Add-ons) */}
          {customizingProduct.customization.addons.length > 0 && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-white">
                3. เพิ่มสัมผัสระดับลักชูรี (Culinary Upgrades)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customizingProduct.customization.addons.map(addon => {
                  const isChecked = selectedAddons.some(a => a.id === addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                        isChecked
                          ? 'border-[#0071e3] bg-[#0071e3]/10 ring-1 ring-[#0071e3]'
                          : 'border-white/10 bg-neutral-900/50 hover:border-white/20'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="text-sm font-semibold text-white">{addon.name}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">{addon.desc}</div>
                        <div className="text-xs font-bold text-[#2997ff] mt-2">+ ฿{addon.price}</div>
                      </div>
                      <div
                        className={`w-5 h-5 mt-0.5 rounded-md border flex items-center justify-center ${
                          isChecked
                            ? 'border-[#0071e3] bg-[#0071e3] text-white'
                            : 'border-neutral-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 4: BistroCare+ (AppleCare+ Equivalent) */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white">
              4. แผนคุ้มครองความอร่อย BistroCare+
            </label>
            <div
              onClick={() => setIncludeCarePlus(!includeCarePlus)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start justify-between ${
                includeCarePlus
                  ? 'border-emerald-500 bg-emerald-500/10 ring-1 ring-emerald-500'
                  : 'border-white/10 bg-neutral-900/50 hover:border-white/20'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    BistroCare+ Freshness Coverage
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                      คุ้มครอง 100%
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    รับประกันอุณหภูมิความร้อนและกรอบนาน 45 นาทีด้วยกล่อง Thermal Cryo Box จัดส่งด้วยยานพาหนะ VIP ด่วน หากอาหารชืดหรือเสียหาย เชฟปรุงใหม่ส่งให้ทันทีฟรี
                  </p>
                  <div className="text-xs font-bold text-emerald-400 mt-2">+ ฿39 ต่อออเดอร์</div>
                </div>
              </div>
              <div
                className={`w-5 h-5 mt-1 rounded-full border flex items-center justify-center ${
                  includeCarePlus
                    ? 'border-emerald-500 bg-emerald-500 text-black'
                    : 'border-neutral-600'
                }`}
              >
                {includeCarePlus && <Check className="w-3.5 h-3.5" />}
              </div>
            </div>
          </div>

          {/* Section 5: Special Kitchen Note */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">
              5. ข้อความพิเศษถึงหัวหน้าเชฟ (Special Notes)
            </label>
            <input
              type="text"
              placeholder="เช่น แยกซอส, แพ้อาหารทะเล, ตกแต่งสำหรับวันเกิด..."
              value={specialNote}
              onChange={e => setSpecialNote(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#0071e3]"
            />
          </div>
        </div>

        {/* Modal Sticky Footer Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#161618] flex flex-col sm:flex-row items-center justify-between gap-4 sticky bottom-0 z-20">
          {/* Quantity Stepper */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <span className="text-xs text-neutral-400">จำนวน:</span>
            <div className="flex items-center bg-neutral-900 border border-white/10 rounded-full px-2 py-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1 hover:text-[#0071e3] transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-1 hover:text-[#0071e3] transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-right sm:hidden">
              <div className="text-xs text-neutral-400">ราคารวม</div>
              <div className="text-lg font-bold text-white">฿{totalPrice}</div>
            </div>
          </div>

          {/* Price & Add to Bag CTA */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
            <div className="hidden sm:block text-right">
              <div className="text-xs text-neutral-400">ราคารวม ({quantity} รายการ)</div>
              <div className="text-xl font-bold text-white">฿{totalPrice}</div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-semibold transition-all transform active:scale-95 shadow-lg shadow-blue-500/20"
            >
              เพิ่มลงในถุง (Add to Bag)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
