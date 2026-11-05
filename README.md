# 🍎 Bistro Pro — เว็บไซต์สั่งอาหารระดับลักชูรี ดีไซน์สไตล์ Apple

> **"Food. Reimagined. So fast. So savory. So Pro."**  
> เว็บไซต์สั่งอาหารออนไลน์ระดับ Fine Dining ที่ผสมผสานศาสตร์แห่งความอร่อย เข้ากับภาษาการออกแบบระดับไอคอนิกของ Apple (Apple Design Language)

---

## 📸 ภาพรวมและแนวคิดการออกแบบ (Design Philosophy)

Bistro Pro ได้รับการออกแบบโดยถอดรหัสปรัชญาความมินิมอล ความหรูหรา และความแม่นยำของ Apple ในทุกรายละเอียด:
- **Frosted Glass Navigation:** แถบนำทางกระจกฝ้าโปร่งแสง (`backdrop-blur-xl`) พร้อมไอคอนถุง Apple Bag ที่นับจำนวนสินค้าแบบเรียลไทม์
- **Sticky Sub-Nav Ribbon:** แถบเมนูรองที่ตรึงติดขอบบน แสดงชื่อโมเดล แท็บสเปก และปุ่ม CTA สั่งซื้อสีน้ำเงิน Apple Blue (`#0071e3`)
- **Dual Hero Showcase (Pro vs Air):**
  - **Bistro Pro (Dark Titanium):** โทนสี Obsidian ดำลึก ผสานแสงสีทองอำพัน สะท้อนความเข้มข้นของเนื้อ A5 Miyazaki Wagyu และชิปความร้อน **A18 Culinary Bionic**
  - **Truffle Tagliolini Air (Pristine White/Silver):** โทนสีขาวสว่างดุจ MacBook Air สื่อถึงความบางเบาเพียง 0.4 มม. ของเส้นพาสต้าทำมือสด
- **Keynote-Style Bento Grid:** กล่องสเปกแบบ Keynote จัดแสดงนวัตกรรมความร้อน 900°F, การส่งตรงจากฟาร์มภายใน 36 ชม. และกล่องรักษาความสด **Thermal Cryo-Packaging**
- **Apple Store-Style Configurator:** หน้าต่างปรับแต่งอาหารแบบเจาะลึก (เลือกรุ่น/พอร์ชัน, ระดับความสุก, อัปเกรดทรัฟเฟิลดำ/ทองคำเปลว 24K และแพ็กเกจคุ้มครอง **BistroCare+**)
- **Apple Health & Nutrition Breakdown:** หน้าต่างแสดงคุณค่าสารอาหาร แคลอรี โปรตีน แหล่งกำเนิด และเวลาปรุงสด
- **Apple Bag & Express Checkout:** ลิ้นชักถุงสินค้าพร้อมการชำระเงินด่วนด้วย ** Pay**, PromptPay QR หรือบัตรเครดิต พร้อมระบบจำลองการติดตามสถานะการปรุงสดแบบเรียลไทม์

---

## 🛠️ เทคโนโลยีที่ใช้ (Tech Stack)

- **Frontend Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** San Francisco Font Stack, [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [Prompt](https://fonts.google.com/specimen/Prompt)
- **State Management:** React Context API + LocalStorage Persistence

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
D:\test agent
├── public/                 # Static assets
├── src/
│   ├── components/         # คอมโพเนนต์ UI สไตล์ Apple
│   │   ├── AppleFooter.tsx           # ท้ายเว็บพร้อม Footnotes และ Directory
│   │   ├── BentoGrid.tsx             # ตาราง Bento สเปกวิศวกรรมอาหาร
│   │   ├── CartDrawer.tsx            # ลิ้นชักถุงสินค้า Apple Bag & ฟอร์มชำระเงิน
│   │   ├── CatalogSection.tsx        # รายการอาหารทั้งหมดพร้อมตัวกรองหมวดหมู่
│   │   ├── CheckoutSuccessModal.tsx  # หน้าใบเสร็จ & ระบบติดตามสถานะจัดส่ง
│   │   ├── FoodConfiguratorModal.tsx # โมดอลปรับแต่งอาหารสไตล์ Apple Store
│   │   ├── HeroAir.tsx               # ส่วนพรีเซนต์ Truffle Tagliolini Air
│   │   ├── HeroPro.tsx               # ส่วนพรีเซนต์เรือธง Bistro Pro Wagyu
│   │   ├── Navbar.tsx                # แถบเมนูกระจกฝ้า & Sticky Subnav
│   │   ├── NutritionModal.tsx        # โมดอลสเปกโภชนาการ Apple Health
│   │   └── ProductCard.tsx           # การ์ดสินค้ามินิมอลพร้อมรูปความละเอียดสูง
│   ├── context/
│   │   └── CartContext.tsx           # ระบบจัดการตะกร้า, คำนวณราคา, ส่วนลด
│   ├── data/
│   │   └── foodCatalog.ts            # ข้อมูลอาหาร วัตถุดิบ A5 สเปก และรูปภาพ
│   ├── types/
│   │   └── food.ts                   # TypeScript Interfaces & Data Models
│   ├── App.tsx                       # หน้าหลักที่ร้อยเรียงเลย์เอาต์ทั้งหมด
│   ├── index.css                     # สไตล์ Glassmorphism, Glow และ Tailwind
│   └── main.tsx                      # Entry point ของ React
├── index.html                        # HTML Template พร้อม Google Fonts
├── package.json                      # การตั้งค่า dependencies และ scripts
├── tsconfig.json                     # การตั้งค่า TypeScript Compiler
├── vite.config.ts                    # การตั้งค่า Vite และ Tailwind Plugin
└── README.md                         # เอกสารแนะนำและคู่มือการใช้งาน
```

---

## ⚡ วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

### 1. ติดตั้ง Dependencies
```bash
npm install
```

### 2. รันโหมด Development (เซิร์ฟเวอร์เปิดที่พอร์ต 3000)
```bash
npm run dev
```
เปิดเบราว์เซอร์ไปที่: `http://localhost:3000/`

### 3. ตรวจสอบ Type และ Build สำหรับ Production
```bash
npx tsc --noEmit
npm run build
```

### 4. พรีวิว Production Build
```bash
npm run preview
```

---

## 🏷️ โค้ดส่วนลดโปรโมชั่น (Promo Codes)

สามารถทดสอบกรอกโค้ดส่วนลดในถุงสินค้า (Apple Bag) ได้ดังนี้:
- **`APPLE10`** : รับส่วนลดทันที 10% สำหรับทุกออเดอร์
- **`PROMAX`** : รับส่วนลดระดับโปร 15% สำหรับทุกออเดอร์

---

## 🛡️ ฟีเจอร์พิเศษ: BistroCare+
คุ้มครองอาหารให้สดใหม่ ร้อน และกรอบตลอด 45 นาทีด้วยกล่อง **Thermal Cryo Box** และการจัดส่งด่วนพิเศษโดยยานพาหนะ VIP หากอาหารเกิดความเสียหายหรือสูญเสียอุณหภูมิ เชฟจะปรุงส่งให้ใหม่ทันทีฟรี 100%

---

## 📄 ลิขสิทธิ์ (License)
Copyright © 2026 Bistro Pro Inc. สงวนลิขสิทธิ์ทุกประการ
