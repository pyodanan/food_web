import React from 'react';

export const AppleFooter: React.FC = () => {
  return (
    <footer className="bg-[#121214] text-[#86868b] text-[11px] border-t border-white/10 pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Footnotes Section */}
        <div className="space-y-2 pb-6 border-b border-white/10 text-[11px] leading-relaxed">
          <p>
            *1. วัตถุดิบเนื้อวากิว A5 Miyazaki Wagyu นำเข้าจากประเทศญี่ปุ่นอย่างถูกต้องและผ่านการตรวจสอบมาตรฐานความปลอดภัยสูงสุด ทุกล็อตมีใบ Certificate of Authenticity กำกับ
          </p>
          <p>
            *2. ค่าสารอาหารและแคลอรีคำนวณจากสูตรอาหารมาตรฐานในห้องแล็บครัว ค่าตัวเลขจริงอาจมีความผันแปรเล็กน้อยตามธรรมชาติของวัตถุดิบสด
          </p>
          <p>
            *3. จัดส่งฟรีเมื่อสั่งซื้อครบ ฿500 สำหรับพื้นที่บริการระยะทางไม่เกิน 15 กิโลเมตร พร้อมรับประกันอุณหภูมิความสดใหม่ด้วยบรรจุภัณฑ์ BistroCare+
          </p>
          <p>
            *4. สิทธิพิเศษส่วนลด 10% เมื่อใช้โค้ด "APPLE10" และส่วนลด 15% เมื่อใช้โค้ด "PROMAX" ก่อนกดยืนยันคำสั่งซื้อ
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-4">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs">เลือกซื้ออาหาร (Store)</h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="hover:text-white transition-colors">Wagyu Bistro Pro</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Truffle Pasta Air</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Neapolitan Studio Pizza</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Nordic Salmon Gravlax</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Sweets & Apple Tarte</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Ultra Nitro Drinks</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs">บริการลูกค้า (Account & Care)</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition-colors">บัญชี Bistro ID</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">จัดการคำสั่งซื้อ</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">BistroCare+ การรับประกันความสด</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">สถานะการจัดส่งแบบเรียลไทม์</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">บริการจัดเลี้ยงสำหรับองค์กร</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs">นวัตกรรมและเทคโนโลยี (Innovation)</h4>
            <ul className="space-y-2">
              <li><a href="#bento" className="hover:text-white transition-colors">ชิป A18 Culinary Bionic</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">เตาอบฟืน 900°F Thermal Core</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">แป้งซาวโดว์หมัก 72 ชั่วโมง</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">กล่องเก็บความร้อน Cryo-Packaging</a></li>
              <li><a href="#bento" className="hover:text-white transition-colors">ความยั่งยืนและสิ่งแวดล้อม 100%</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs">เกี่ยวกับเรา (About Bistro)</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-white cursor-pointer transition-colors">ห้องข่าวเชฟมาสเตอร์</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">การสรรหาวัตถุดิบทั่วโลก</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">ร่วมงานกับ Bistro Pro</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">ติดต่อสาขา Flagship Lounge</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">ความปลอดภัยทางอาหารระดับสากล</span></li>
            </ul>
          </div>
        </div>

        {/* Legal & Country Selector */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[#86868b]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div>Copyright © 2026 Bistro Pro Inc. สงวนลิขสิทธิ์ทั้งหมด</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <span className="hover:text-white cursor-pointer">นโยบายความเป็นส่วนตัว</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">เงื่อนไขการใช้งาน</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">นโยบายการขายและการคืนเงิน</span>
              <span>|</span>
              <span className="hover:text-white cursor-pointer">ข้อกำหนดทางกฎหมาย</span>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <span>🇹🇭 ประเทศไทย (ภาษาไทย)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
