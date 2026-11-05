import React from 'react';
import { CheckCircle2, Clock, MapPin, Phone, ShieldCheck, Printer, ArrowRight } from 'lucide-react';
import { OrderReceipt } from '../types/food';

interface CheckoutSuccessModalProps {
  receipt: OrderReceipt | null;
  onClose: () => void;
}

export const CheckoutSuccessModal: React.FC<CheckoutSuccessModalProps> = ({ receipt, onClose }) => {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-[#161618] border border-white/10 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl text-white my-8">
        {/* Top Header Badge */}
        <div className="p-8 text-center bg-gradient-to-b from-[#1c1c1f] to-[#161618] border-b border-white/10">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4 ring-8 ring-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider mb-1">
            คำสั่งซื้อสำเร็จสมบูรณ์
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            ขอบคุณสำหรับคำสั่งซื้อ, {receipt.customerName}
          </h2>
          <p className="text-xs text-neutral-400">
            หมายเลขคำสั่งซื้อ: <span className="font-mono text-white font-bold">{receipt.orderId}</span>
          </p>
        </div>

        {/* Live Delivery Status Tracker */}
        <div className="p-6 border-b border-white/10 bg-neutral-900/40">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">กำลังเตรียมอาหาร & จัดส่งด่วน</span>
            </div>
            <span className="text-xs text-emerald-400 font-bold">
              ประมาณ {receipt.estimatedDeliveryMin} นาที
            </span>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-emerald-500 rounded-full" />
              <span className="text-white font-medium">รับออเดอร์</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-medium">ปรุงสด 900°F</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-neutral-700 rounded-full" />
              <span className="text-neutral-500">แพ็กเกจ Cryo</span>
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-full bg-neutral-700 rounded-full" />
              <span className="text-neutral-500">ไรเดอร์ VIP</span>
            </div>
          </div>
        </div>

        {/* Receipt Details */}
        <div className="p-6 space-y-4 max-h-72 overflow-y-auto text-xs">
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
            <div>
              <div className="text-neutral-400 mb-0.5">เวลาสั่งซื้อ</div>
              <div className="font-medium text-white">{receipt.createdAt} น.</div>
            </div>
            <div>
              <div className="text-neutral-400 mb-0.5">การชำระเงิน</div>
              <div className="font-medium text-white">{receipt.paymentMethod}</div>
            </div>
          </div>

          <div className="space-y-1.5 pb-4 border-b border-white/5">
            <div className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>ที่อยู่จัดส่ง:</span>
            </div>
            <div className="text-white font-medium pl-5">{receipt.address}</div>
            <div className="flex items-center gap-1.5 text-neutral-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              <span>เบอร์ติดต่อ: {receipt.customerPhone}</span>
            </div>
          </div>

          {/* Items Summary */}
          <div className="space-y-2 pb-4 border-b border-white/5">
            <div className="text-neutral-400 font-semibold uppercase text-[10px]">
              รายการอาหารที่สั่ง
            </div>
            {receipt.items.map(item => (
              <div key={item.cartId} className="flex justify-between items-start text-xs">
                <div>
                  <span className="text-white font-medium">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="text-neutral-400 block text-[11px]">
                    {item.selectedPortion.name}
                    {item.selectedAddons.length > 0 && ` + ${item.selectedAddons.map(a => a.name).join(', ')}`}
                  </span>
                </div>
                <span className="text-white font-medium">฿{item.totalPrice}</span>
              </div>
            ))}
          </div>

          {/* Pricing breakdown */}
          <div className="space-y-1.5 text-neutral-400">
            <div className="flex justify-between">
              <span>ยอดรวมเมนู</span>
              <span className="text-white">฿{receipt.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>ค่าจัดส่ง</span>
              <span className="text-white">
                {receipt.deliveryFee === 0 ? 'ฟรี' : `฿${receipt.deliveryFee}`}
              </span>
            </div>
            {receipt.carePlusFee > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>BistroCare+ คุ้มครองความสด</span>
                <span>฿{receipt.carePlusFee}</span>
              </div>
            )}
            {receipt.discount > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>ส่วนลด</span>
                <span>- ฿{receipt.discount}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-white/10">
              <span>ยอดชำระสุทธิ</span>
              <span className="text-base text-[#2997ff]">฿{receipt.total}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-[#161618] flex items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์ใบเสร็จ</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-md"
          >
            <span>กลับสู่หน้าหลัก</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
