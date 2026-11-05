import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderReceipt } from '../types/food';

interface CartDrawerProps {
  onOrderComplete: (receipt: OrderReceipt) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOrderComplete }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    carePlusTotal,
    discountAmount,
    grandTotal,
    itemCount,
    promoCode,
    appliedDiscountPercent,
    promoError,
    applyPromoCode,
    removePromoCode
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'applepay' | 'promptpay' | 'card'>('applepay');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode) {
      applyPromoCode(inputCode);
      setInputCode('');
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !address) {
      alert('กรุณากรอกข้อมูลชื่อ เบอร์โทร และที่อยู่จัดส่งให้ครบถ้วน');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const receipt: OrderReceipt = {
        orderId: `AGY-${Math.floor(100000 + Math.random() * 900000)}`,
        createdAt: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
        customerName,
        customerPhone,
        address,
        items: [...cart],
        subtotal,
        deliveryFee,
        carePlusFee: carePlusTotal,
        discount: discountAmount,
        total: grandTotal,
        estimatedDeliveryMin: 20,
        paymentMethod:
          paymentMethod === 'applepay'
            ? 'Apple Pay (Touch ID / Face ID)'
            : paymentMethod === 'promptpay'
            ? 'PromptPay QR (Instant)'
            : 'Credit Card (Visa / Mastercard)'
      };

      clearCart();
      setIsCheckingOut(false);
      setIsSubmitting(false);
      setIsCartOpen(false);
      onOrderComplete(receipt);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#161618] border-l border-white/10 text-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161618]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#2997ff]" />
              <h2 className="text-lg font-bold text-white">
                ถุงสินค้าของคุณ ({itemCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            {cart.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">ถุงสินค้าของคุณว่างเปล่า</h3>
                <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                  เลือกสรรความอร่อยระดับพรีเมียมจากคอลเลกชัน Bistro Pro เพื่อเริ่มต้นความประทับใจ
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all mt-4"
                >
                  เลือกดูเมนู
                </button>
              </div>
            ) : !isCheckingOut ? (
              <>
                {/* List of Cart Items */}
                <div className="space-y-4 divide-y divide-white/5">
                  {cart.map(item => (
                    <div key={item.cartId} className="pt-4 first:pt-0 flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-2xl border border-white/10 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-neutral-500 hover:text-rose-400 transition-colors p-1"
                            title="ลบรายการ"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-xs text-neutral-400 mt-0.5">
                          {item.selectedPortion.name}
                        </div>

                        {item.selectedStyle && (
                          <div className="text-[11px] text-neutral-400">
                            สไตล์: {item.selectedStyle.name}
                          </div>
                        )}

                        {item.selectedAddons.length > 0 && (
                          <div className="text-[11px] text-neutral-400 mt-1">
                            ท็อปปิ้ง: {item.selectedAddons.map(a => a.name).join(', ')}
                          </div>
                        )}

                        {item.includeCarePlus && (
                          <div className="inline-flex items-center gap-1 text-[10px] text-emerald-400 mt-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <ShieldCheck className="w-3 h-3" /> BistroCare+ คุ้มครองความสด
                          </div>
                        )}

                        {item.specialNote && (
                          <div className="text-[11px] text-amber-400/90 italic mt-0.5">
                            โน้ต: "{item.specialNote}"
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                          <div className="flex items-center bg-neutral-900 border border-white/10 rounded-full px-2 py-0.5">
                            <button
                              onClick={() => updateQuantity(item.cartId, -1)}
                              className="p-1 hover:text-[#0071e3] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartId, 1)}
                              className="p-1 hover:text-[#0071e3] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-sm font-bold text-white">
                            ฿{item.totalPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-400" />
                      <input
                        type="text"
                        placeholder="โค้ดส่วนลด (เช่น APPLE10)"
                        value={inputCode}
                        onChange={e => setInputCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#0071e3]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold transition-colors"
                    >
                      ใช้โค้ด
                    </button>
                  </form>

                  {appliedDiscountPercent > 0 && (
                    <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-500/10 px-3 py-2 rounded-xl">
                      <span>ใช้โค้ด {promoCode} (ลด {appliedDiscountPercent}%)</span>
                      <button
                        onClick={removePromoCode}
                        className="text-neutral-400 hover:text-white"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  )}

                  {promoError && (
                    <div className="text-xs text-rose-400">
                      {promoError}
                    </div>
                  )}
                </div>

                {/* Apple Order Cost Summary */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-400">
                    <span>ยอดรวมเมนู (Subtotal)</span>
                    <span className="text-white">฿{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>ค่าจัดส่งด่วน (Delivery)</span>
                    <span className="text-white">
                      {deliveryFee === 0 ? (
                        <span className="text-emerald-400 font-medium">ส่งฟรี (ครบ ฿500)</span>
                      ) : (
                        `฿${deliveryFee}`
                      )}
                    </span>
                  </div>
                  {carePlusTotal > 0 && (
                    <div className="flex justify-between text-neutral-400">
                      <span>BistroCare+ คุ้มครองความสด</span>
                      <span className="text-white">฿{carePlusTotal}</span>
                    </div>
                  )}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-medium">
                      <span>ส่วนลดโปรโมชั่น ({appliedDiscountPercent}%)</span>
                      <span>- ฿{discountAmount}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                    <span>ยอดชำระสุทธิ</span>
                    <span className="text-lg">฿{grandTotal}</span>
                  </div>
                </div>
              </>
            ) : (
              /* Apple Store Express Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h3 className="text-sm font-bold text-white">ข้อมูลการจัดส่ง & ชำระเงิน</h3>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#2997ff] hover:underline"
                  >
                    กลับไปดูสินค้า
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      ชื่อ-นามสกุล ผู้รับ *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น คุณธนภัทร สุขสมบูรณ์"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#0071e3]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      เบอร์โทรศัพท์ติดต่อ *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="เช่น 081-234-5678"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#0071e3]"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      ที่อยู่จัดส่งและจุดสังเกต *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="เช่น 123/45 คอนโดแอชตัน อโศก ชั้น 18 ซอยสุขุมวิท 21 แขวงคลองเตยเหนือ..."
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-[#0071e3]"
                    />
                  </div>

                  {/* Payment Method Selector */}
                  <div className="pt-2">
                    <label className="block text-neutral-300 font-medium mb-2">
                      วิธีการชำระเงิน
                    </label>
                    <div className="space-y-2">
                      <label
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                          paymentMethod === 'applepay'
                            ? 'border-[#0071e3] bg-[#0071e3]/10'
                            : 'border-white/10 bg-neutral-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'applepay'}
                            onChange={() => setPaymentMethod('applepay')}
                            className="text-[#0071e3]"
                          />
                          <span className="font-semibold text-white flex items-center gap-1.5">
                            <span className="text-sm"></span> Pay
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-400">Touch ID / Face ID</span>
                      </label>

                      <label
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                          paymentMethod === 'promptpay'
                            ? 'border-[#0071e3] bg-[#0071e3]/10'
                            : 'border-white/10 bg-neutral-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'promptpay'}
                            onChange={() => setPaymentMethod('promptpay')}
                            className="text-[#0071e3]"
                          />
                          <span className="font-semibold text-white">PromptPay QR</span>
                        </div>
                        <span className="text-[10px] text-neutral-400">สแกนจ่ายทันที 0% Fee</span>
                      </label>

                      <label
                        className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${
                          paymentMethod === 'card'
                            ? 'border-[#0071e3] bg-[#0071e3]/10'
                            : 'border-white/10 bg-neutral-900'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <input
                            type="radio"
                            name="payment"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                            className="text-[#0071e3]"
                          />
                          <span className="font-semibold text-white">บัตรเครดิต / เดบิต</span>
                        </div>
                        <span className="text-[10px] text-neutral-400">Visa / Mastercard / JCB</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center justify-between text-xs mt-4">
                  <span className="text-neutral-400">ยอดที่ต้องชำระทั้งหมด:</span>
                  <span className="text-base font-bold text-white">฿{grandTotal}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-bold text-sm transition-all transform active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  {isSubmitting ? (
                    <span>กำลังประมวลผลออเดอร์...</span>
                  ) : paymentMethod === 'applepay' ? (
                    <span className="flex items-center gap-1">
                      ยืนยันชำระเงินด้วย <span className="text-base font-semibold"> Pay</span>
                    </span>
                  ) : (
                    <span>ยืนยันคำสั่งซื้อ (฿{grandTotal})</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Cart Drawer Sticky Bottom Button */}
          {cart.length > 0 && !isCheckingOut && (
            <div className="p-6 border-t border-white/10 bg-[#161618] space-y-3">
              {/* Apple Pay Direct Checkout Button */}
              <button
                onClick={() => {
                  setPaymentMethod('applepay');
                  setIsCheckingOut(true);
                }}
                className="w-full py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm transition-transform active:scale-98 flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="text-base font-bold"></span> Pay ด่วนทันที
              </button>

              {/* Standard Checkout Button */}
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm transition-transform active:scale-98 flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                <span>ดำเนินการชำระเงิน</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
