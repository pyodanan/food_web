import { FoodProduct } from '../types/food';

export const FOOD_CATALOG: FoodProduct[] = [
  {
    id: 'bistro-pro-wagyu',
    name: 'Wagyu Bistro Pro',
    modelBadge: 'Pro Max',
    series: 'Culinary Series 16 Pro',
    tagline: 'Titanium Sear. Wagyu Precision.',
    description: 'เนื้อวากิวเกรด A5 จากมิยาซากิ ย่างด้วยอุณหภูมิ 900°F ล็อกความชุ่มฉ่ำ ประกบคู่กับขนมปังบริยอชหมัก 48 ชั่วโมงและชีสกรูว์แยร์บ่ม 18 เดือน',
    price: 490,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
    heroImage: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1400&q=85',
    chip: 'A18 Culinary Bionic',
    isFeaturedHero: true,
    badge: 'Flagship Masterpiece',
    highlights: [
      'เนื้อ A5 Miyazaki Wagyu 100%',
      'ขนมปัง Gold-Dusted Brioche หมัก 48 ชม.',
      'เห็ดทรัฟเฟิลดำสดจากแคว้นนอร์ชา (Norcia)',
      'ซอส Signature Truffle Aioli สูตรลับเฉพาะ'
    ],
    specs: [
      { label: 'Thermal Core', value: '900°F Searing', detail: 'ความร้อนสูงล็อกกลิ่นสโมกและน้ำฉ่ำในเสี้ยววินาที' },
      { label: 'Aging Process', value: '45-Day Dry Aged', detail: 'ความเข้มข้นของรสชาติระดับอัลตร้า' },
      { label: 'Calorie Density', value: '780 kcal', detail: 'พลังงานสมดุลพร้อมโปรตีนสูงถึง 46 กรัม' },
      { label: 'Chef Precision', value: '±0.5°C Sous-vide', detail: 'ควบคุมความสุกระดับไมครอน' }
    ],
    nutrition: {
      calories: 780,
      protein: '46g',
      carbs: '38g',
      fat: '42g',
      prepTime: '12-15 นาที',
      chefOrigin: 'Miyazaki, Japan x Paris, France'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Standard Edition', weight: '200g Patty', priceOffset: 0 },
        { id: 'pro', name: 'Pro Edition', weight: '320g Patty', priceOffset: 120, recommended: true },
        { id: 'promax', name: 'Pro Max Double', weight: '480g Double Patty', priceOffset: 220 }
      ],
      styles: [
        { id: 'med-rare', name: 'Rosé Medium Rare (แนะนำ)', desc: 'เนื้อด้านในสีชมพูละมุน ชุ่มฉ่ำสูงสุด 54°C' },
        { id: 'medium', name: 'Balanced Medium', desc: 'ผิวด้านนอกเกรียมคาราเมล ฉ่ำกำลังดี 60°C' },
        { id: 'signature-sear', name: 'Chef’s Obsidian Sear', desc: 'ขอบกรอบสโมกเข้ม กลิ่นถ่านไม้โอ๊คพรีเมียม' }
      ],
      addons: [
        { id: 'black-truffle', name: 'Black Truffle Shavings', price: 95, desc: 'ขูดเห็ดทรัฟเฟิลดำสดสดลงบนเนื้อร้อนๆ' },
        { id: 'gold-leaf', name: '24K Edible Gold Leaf', price: 65, desc: 'แผ่นทองคำบริสุทธิ์เพื่อสัมผัสหรูหรา' },
        { id: 'smoked-pancetta', name: 'Smoked Berkshire Bacon', price: 55, desc: 'เบคอนหมูดำรมควันไม้แอปเปิ้ลกรอบนุ่ม' },
        { id: 'caramelized-onion', name: 'Cognac Glazed Onions', price: 40, desc: 'หอมใหญ่ผัดเคี่ยวคอนยัค 4 ชั่วโมง' }
      ]
    }
  },
  {
    id: 'artisan-truffle-pasta',
    name: 'Truffle Tagliolini Air',
    modelBadge: 'Air Edition',
    series: 'Culinary Air M3',
    tagline: 'Light. Delicious. Incredibly Thin.',
    description: 'เส้นพาสต้าทำมือสดใหม่หนาเพียง 0.4 มม. คลุกเคล้ากับเนยทรัฟเฟิลและพาร์มิจาโน เรจจิอาโน บ่ม 36 เดือน เบาสบายแต่เปี่ยมด้วยมิติรสชาติ',
    price: 420,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=85',
    chip: 'M3 Fresh Pasta Engine',
    isAirHero: true,
    badge: 'Ultra Light & Silk',
    highlights: [
      'เส้นพาสต้าไข่เป็ดออร์แกนิก รีดบาง 0.4 มม.',
      'เห็ดทรัฟเฟิลดำฤดูหนาว Shaved สด',
      'ชีส Parmigiano-Reggiano D.O.P. 36 เดือน',
      'น้ำมันมะกอกเอ็กซ์ตร้าเวอร์จิ้นสกัดเย็นจากทัสคานี'
    ],
    specs: [
      { label: 'Pasta Thickness', value: '0.4 mm', detail: 'บางที่สุดเพื่อความสัมผัสเนียนลื่นระดับซิลก์' },
      { label: 'Emulsion Rate', value: '100% Velvety', detail: 'เนยและน้ำสต็อกเข้ากันอย่างไร้รอยต่อ' },
      { label: 'Cook Time', value: '90 Seconds', detail: 'ต้มในน้ำเกลือไอโอดีนทะเลที่จุดเดือดพอดี' },
      { label: 'Aroma Throw', value: '360° Room Fill', detail: 'กลิ่นหอมฟุ้งรอบตัวตั้งแต่เปิดกล่อง' }
    ],
    nutrition: {
      calories: 590,
      protein: '24g',
      carbs: '62g',
      fat: '28g',
      prepTime: '8-10 นาที',
      chefOrigin: 'Bologna, Italy'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Standard Bowl', weight: '180g Pasta', priceOffset: 0, recommended: true },
        { id: 'large', name: 'Grande Portion', weight: '260g Pasta', priceOffset: 90 }
      ],
      styles: [
        { id: 'al-dente', name: 'Perfection Al Dente', desc: 'กรึบสู้ฟันตรงแกนกลางตามมาตรฐานอิตาลีดั้งเดิม' },
        { id: 'soft-tender', name: 'Silk & Tender', desc: 'นุ่มละมุน ซึมซับซอสได้ชุ่มฉ่ำเต็มคำ' }
      ],
      addons: [
        { id: 'extra-truffle', name: 'Double Black Truffle', price: 95, desc: 'เพิ่มทรัฟเฟิลดำสดขูดอีกสองเท่า' },
        { id: 'parma-crisp', name: 'Prosciutto di Parma Crisp', price: 60, desc: 'พาร์มาแฮมกรุบกรอบรสเค็มมัน' },
        { id: 'caviar-bump', name: 'Oscietra Caviar (5g)', price: 180, desc: 'คาเวียร์สายพันธุ์ออสซีตร้าเพื่อความฟินสุดขั้ว' }
      ]
    }
  },
  {
    id: 'neapolitan-studio-pizza',
    name: 'Neapolitan Studio Pizza',
    modelBadge: 'Studio',
    series: 'Wood-Fired Series 900',
    tagline: 'A Culinary Powerhouse in Every Slice.',
    description: 'แป้งซาวโดว์หมักนาน 72 ชั่วโมง อบในเตาฟืนไม้แอปเปิ้ลที่ความร้อน 900°F นานเพียง 60 วินาที ขอบพองกรอบลายเสือดาว (Leopard spots)',
    price: 450,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85',
    chip: 'Sourdough Neural Ferment',
    badge: 'Editor’s Choice',
    highlights: [
      'แป้ง Sourdough ย่อยง่าย หมักเย็น 72 ชม.',
      'มะเขือเทศ San Marzano D.O.P. จากภูเขาไฟวิสุเวียส',
      'ชีส Buffalo Mozzarella สดจากแคว้นกัมปาเนีย',
      'ใบโหระพาอิตาเลียนออร์แกนิกและน้ำมันมะกอกบริสุทธิ์'
    ],
    specs: [
      { label: 'Oven Temp', value: '900°F (482°C)', detail: 'เตาอบอิฐทนไฟนำเข้าจากเนเปิลส์' },
      { label: 'Fermentation', value: '72 Hours Cold', detail: 'ย่อยแป้งให้เบาสบายท้อง ไม่แน่นอึดอัด' },
      { label: 'Crust Hydration', value: '78% High Moisture', detail: 'ฟองอากาศโปร่งเบาดุจเมฆ' },
      { label: 'Bake Time', value: '60 Seconds', detail: 'คงคุณค่าทางอาหารและรสสดใหม่สูงสุด' }
    ],
    nutrition: {
      calories: 840,
      protein: '34g',
      carbs: '95g',
      fat: '31g',
      prepTime: '10-12 นาที',
      chefOrigin: 'Napoli, Italy'
    },
    customization: {
      portions: [
        { id: '10inch', name: 'Personal 10”', weight: '6 Slices', priceOffset: 0 },
        { id: '12inch', name: 'Share Studio 12”', weight: '8 Slices', priceOffset: 110, recommended: true }
      ],
      styles: [
        { id: 'classic-napoli', name: 'Authentic Neapolitan', desc: 'นุ่มตรงกลาง ขอบพองกรอบหอมกลิ่นควันฟืน' },
        { id: 'extra-crispy', name: 'Extra Crispy Base', desc: 'อบเพิ่มเวลา 15 วิเพื่อความกรอบพิเศษ' }
      ],
      addons: [
        { id: 'burrata-crown', name: 'Fresh Burrata Crown', price: 90, desc: 'บูร์ราต้าชีสสดทั้งก้อนวางตรงกลาง' },
        { id: 'spicy-nduja', name: 'Calabrian Spicy ‘Nduja', price: 50, desc: 'ไส้กรอกหมูรสเผ็ดกลมกล่อมจากคาลาเบรีย' },
        { id: 'hot-honey', name: 'Artisan Hot Honey Drizzle', price: 35, desc: 'น้ำผึ้งแท้เคี่ยวพริกฮาบาเนโร่' }
      ]
    }
  },
  {
    id: 'nordic-salmon-gravlax',
    name: 'Nordic Salmon Gravlax Pro',
    modelBadge: 'Ultra',
    series: 'Sub-Zero Cold Craft',
    tagline: 'Cold Smoked Precision. Zero Compromise.',
    description: 'แซลมอนสายพันธุ์แอตแลนติก นำเข้าสดจากนอร์เวย์ หมักเกลือหิมาลายันและผักชีลาวดิลล์ รมควันเย็นด้วยไม้เชอร์รี่ที่ 18°C',
    price: 520,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=85',
    chip: 'Sub-Zero Smoke Engine',
    badge: 'Omega-3 Ultra',
    highlights: [
      'แซลมอนเกรดซาชิมิ สดไม่ผ่านการแช่แข็ง',
      'รมควันเย็น 24 ชั่วโมงที่ 18°C',
      'ครีมชีสสมุนไพรสดและเคเปอร์อิตาเลียน',
      'เลมอนเมเยอร์ออร์แกนิกและขนมปังไรย์บาแก็ต'
    ],
    specs: [
      { label: 'Smoke Temp', value: '18°C Cold Smoke', detail: 'ไม่ทำให้เนื้อปลาสูญเสียความชุ่มชื้น' },
      { label: 'Omega-3', value: '4,200 mg', detail: 'กรดไขมันจำเป็นบำรุงสมองและหัวใจ' },
      { label: 'Salt Balance', value: '1.2% Low Sodium', detail: 'เกลือชมพูธรรมชาติไม่เค็มโดด' },
      { label: 'Freshness Index', value: '99.9% Pristine', detail: 'ส่งตรงทางอากาศภายใน 36 ชม. หลังจับ' }
    ],
    nutrition: {
      calories: 520,
      protein: '42g',
      carbs: '18g',
      fat: '30g',
      prepTime: '6-8 นาที',
      chefOrigin: 'Tromsø, Norway'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Standard Pro (180g)', weight: '180g Sashimi-cut', priceOffset: 0, recommended: true },
        { id: 'large', name: 'Ultra Feast (280g)', weight: '280g Double Slice', priceOffset: 160 }
      ],
      addons: [
        { id: 'avocado-rose', name: 'Hass Avocado Rose', price: 45, desc: 'อโวคาโดฮาสส์สดปาดเป็นรูปกุหลาบ' },
        { id: 'yuzu-ponzu', name: 'Yuzu Truffle Dressing', price: 35, desc: 'น้ำสลัดยูซุผสมทรัฟเฟิลหอมสดชื่น' }
      ]
    }
  },
  {
    id: 'apple-tarte-tatin',
    name: 'Apple Tarte Tatin Heritage',
    modelBadge: 'Special Edition',
    series: 'Iconic Apple 1984',
    tagline: 'Caramelized Honeycrisp. The Original Apple.',
    description: 'แอปเปิ้ล Honeycrisp ออร์แกนิกเคี่ยวคาราเมลเนยฝรั่งเศสจนเป็นสีอำพัน อบใต้แป้งพัฟเพสตรี้กรอบ 729 ชั้น เสิร์ฟพร้อมเจลาโต้มาดากัสการ์วานิลลาบีน',
    price: 320,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85',
    chip: 'Caramelization 180°C',
    badge: 'Iconic Dessert',
    highlights: [
      'แอปเปิ้ลพันธุ์ Honeycrisp คัดพิเศษ 4 ลูกต่อชิ้น',
      'เนย AOP Beurre d’Isigny จากนอร์มังดี',
      'แป้ง Puff Pastry ซ้อนทับ 729 เลเยอร์',
      'เจลาโต้วานิลลาแท้จากมาดากัสการ์'
    ],
    specs: [
      { label: 'Pastry Layers', value: '729 Micro-Layers', detail: 'ความกรอบเบาที่แตกกระจายในปาก' },
      { label: 'Sugar Glaze', value: 'Amber Caramel', detail: 'เคี่ยวที่ 180°C อย่างแม่นยำ' },
      { label: 'Vanilla Pods', value: 'Grade-A Bourbon', detail: 'เมล็ดวานิลลาดำคัดมือแท้ 100%' },
      { label: 'Serving Temp', value: 'Warm 45°C + Ice', detail: 'อุณหภูมิตัดกันอย่างสมบูรณ์แบบ' }
    ],
    nutrition: {
      calories: 460,
      protein: '6g',
      carbs: '58g',
      fat: '22g',
      prepTime: '5-7 นาที',
      chefOrigin: 'Normandy, France'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Classic Slice', weight: '1 Slice + Gelato', priceOffset: 0, recommended: true },
        { id: 'double', name: 'Double Indulgence', weight: '2 Slices + 2 Gelato', priceOffset: 190 }
      ],
      addons: [
        { id: 'extra-gelato', name: 'Extra Madagascar Scoop', price: 65, desc: 'เจลาโต้เพิ่มอีก 1 สกู๊ป' },
        { id: 'salted-caramel', name: 'Guérande Sea Salt Caramel', price: 30, desc: 'ซอสคาราเมลเกลือสมุทรเกอร็องด์' }
      ]
    }
  },
  {
    id: 'nitro-cold-brew-ultra',
    name: 'Nitro Cold Brew Ultra',
    modelBadge: 'Ultra',
    series: 'Nitrogen Velocity Series',
    tagline: 'Infused with Pure Nitrogen. Engineered Smooth.',
    description: 'กาแฟสายพันธุ์ Single-origin เอธิโอเปีย เยอร์กาเชฟฟ์ สกัดเย็น 24 ชั่วโมง อัดด้วยก๊าซไนโตรเจนบริสุทธิ์เพื่อฟองครีม Micro-foam ดุจกำมะหยี่',
    price: 220,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=85',
    chip: 'Nitrogen Micro-Injector',
    badge: 'Zero Sugar & High Energy',
    highlights: [
      'เมล็ดกาแฟ Single Origin Yirgacheffe Washed',
      'สกัดเย็นแบบ Slow Drip นาน 24 ชั่วโมง',
      'Micro-foam หนา 12 มม. โดยไม่ต้องใส่นม',
      'โน้ตดอกมะลิ เลมอนบลอสซัม และเบอร์กามอต'
    ],
    specs: [
      { label: 'Extraction Time', value: '24 Hours', detail: 'ลดความเปรี้ยวขม สกัดเฉพาะสารหอมหวาน' },
      { label: 'Nitrogen Pressure', value: '45 PSI Direct', detail: 'ฟองละเอียดพิเศษนุ่มละมุนติดริมฝีปาก' },
      { label: 'Acidity Profile', value: '65% Less Acidic', detail: 'นุ่มนวลต่อกระเพาะอาหาร ดื่มได้ทั้งวัน' },
      { label: 'Caffeine Content', value: '210 mg Clean', detail: 'โฟกัสลื่นไหล ไม่ใจสั่น' }
    ],
    nutrition: {
      calories: 5,
      protein: '0g',
      carbs: '1g',
      fat: '0g',
      prepTime: '2 นาที',
      chefOrigin: 'Yirgacheffe, Ethiopia'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Tall 12oz', weight: '350 ml', priceOffset: 0 },
        { id: 'pro', name: 'Pro Max 16oz', weight: '480 ml', priceOffset: 40, recommended: true }
      ],
      styles: [
        { id: 'black', name: 'Pure Black Nitro', desc: 'หวานหอมธรรมชาติ ดื่มด่ำรสชาติแท้' },
        { id: 'oat-cascade', name: 'Oat Milk Cascade', desc: 'ผสมนมโอ๊ตบาริสต้าเกรดพรีเมียม นุ่มหอมมัน' }
      ],
      addons: [
        { id: 'vanilla-bean', name: 'Bourbon Vanilla Infusion', price: 30, desc: 'กลิ่นวานิลลาแท้สกัดเข้มข้น' },
        { id: 'extra-shot', name: 'Cold Espresso Concentrate Shot', price: 35, desc: 'เพิ่มความเข้มข้นอีก 1 ระดับ' }
      ]
    }
  },
  {
    id: 'kyoto-matcha-studio',
    name: 'Kyoto Matcha Studio Pro',
    modelBadge: '24K Edition',
    series: 'Ceremonial Grade Series',
    tagline: 'Mindful. Vibrant. Pure 24K Gold.',
    description: 'ผงมัทฉะเกรดพิธีการจากไร่ชาอูจิ เกียวโต บดด้วยโม่หินความเร็วรอบต่ำ ผสมผสานนมโอ๊ตไมโครโฟม และแผ่นทองคำบริสุทธิ์ 24K',
    price: 260,
    category: 'beverages',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=1200&q=85',
    chip: 'Stone-Milled Neural Umami',
    badge: 'Antioxidant Pro',
    highlights: [
      'มัทฉะพิธีการ Uji Ceremonial First Harvest',
      'โม่หินแกรนิตบดละเอียด 3 ไมครอน',
      'โอ๊ตมิลค์ออร์แกนิกเนื้อเนียนระดับไมโครโฟม',
      'ทองคำเปลวบริสุทธิ์ 24K ทานได้'
    ],
    specs: [
      { label: 'Particle Size', value: '3.2 Microns', detail: 'ความละเอียดสูงสุด ละลายในปากอย่างสมบูรณ์' },
      { label: 'L-Theanine', value: '38 mg High-Yield', detail: 'สร้างสมาธิและคลื่นสมอง Alpha' },
      { label: 'Harvest Date', value: 'Spring First Flush', detail: 'ใบชาคัดเฉพาะยอดแรกของปี' },
      { label: 'Umami Rating', value: '5/5 Supreme', detail: 'หวานละมุน ไร้ความฝาดขม' }
    ],
    nutrition: {
      calories: 140,
      protein: '4g',
      carbs: '18g',
      fat: '5g',
      prepTime: '3-4 นาที',
      chefOrigin: 'Uji, Kyoto, Japan'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Zen Cup (250ml)', weight: '250 ml', priceOffset: 0, recommended: true },
        { id: 'large', name: 'Grande Zen (380ml)', weight: '380 ml', priceOffset: 50 }
      ],
      styles: [
        { id: 'hot', name: 'Ceremonial Warm (65°C)', desc: 'อุ่นกำลังดี รักษาสารต้านอนุมูลอิสระ' },
        { id: 'iced', name: 'Glacier Iced (Cube)', desc: 'เสิร์ฟบนน้ำแข็งก้อนใส Crystal Clear' }
      ],
      addons: [
        { id: 'extra-gold', name: 'Double 24K Gold Flakes', price: 50, desc: 'โรยทองคำเปลวเปล่งประกายสองเท่า' },
        { id: 'sweetness-adjust', name: 'Organic Coconut Nectar', price: 20, desc: 'ความหวานละมุนจากน้ำช่อดอกมะพร้าว' }
      ]
    }
  },
  {
    id: 'risotto-nero-pro',
    name: 'Risotto Nero al Tartufo',
    modelBadge: 'Pro',
    series: 'Culinary Masterworks',
    tagline: 'Acquerello Aged Rice. 48-Hour Simmered Broth.',
    description: 'ข้าวรีซอตโต้อัคเควเรลโลบ่ม 1 ปี เคี่ยวในน้ำสต็อกเห็ดป่าและหมึกดำ พร้อมชีสเปโคริโน โรมาโน และทรัฟเฟิลดำสด',
    price: 480,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=85',
    chip: 'Slow-Simmer Thermal Matrix',
    badge: 'Deep Umami',
    highlights: [
      'ข้าวอิตาเลียน Acquerello บ่มพิเศษ 1 ปี',
      'ซอสหมึกดำเมดิเตอร์เรเนียนรสเข้มข้น',
      'เห็ดพอร์ชินี่และแบล็กทรัฟเฟิลสด',
      'เนยฝรั่งเศสเคี่ยว Mantecatura สไตล์เวนิส'
    ],
    specs: [
      { label: 'Rice Aging', value: '1 Year Acquerello', detail: 'ดูดซับน้ำซอสได้มากกว่าข้าวทั่วไป 3 เท่า' },
      { label: 'Stir Technique', value: 'All’onda Waves', detail: 'เนื้อสัมผัสเป็นคลื่นครีมมี่นุ่มนวล' },
      { label: 'Pecorino Age', value: '24-Month Romano', detail: 'รสเค็มมันหอมกลิ่นแกะธรรมชาติ' },
      { label: 'Prep Ritual', value: 'Fresh to Order', detail: 'ทำสดใหม่ทุกจาน ไม่มีการอุ่นซ้ำ' }
    ],
    nutrition: {
      calories: 680,
      protein: '22g',
      carbs: '74g',
      fat: '32g',
      prepTime: '15-18 นาที',
      chefOrigin: 'Venice, Italy'
    },
    customization: {
      portions: [
        { id: 'regular', name: 'Classic Risotto', weight: '220g Portioned', priceOffset: 0, recommended: true },
        { id: 'pro', name: 'Feast Pro', weight: '340g Large', priceOffset: 130 }
      ],
      addons: [
        { id: 'hokkaido-scallop', name: 'Seared Hokkaido Scallop (2 pcs)', price: 160, desc: 'หอยเชลล์ฮอกไกโดย่างเนยกระเทียม' },
        { id: 'extra-parm', name: 'Aged Pecorino Shavings', price: 40, desc: 'ชีสเปโคริโนโรมาโนขูดพูนจาน' }
      ]
    }
  }
];

export const BENTO_FEATURES = [
  {
    id: 'chip',
    tag: 'Next-Gen Gastronomy',
    title: 'A18 Culinary Bionic',
    description: 'หัวเตาเหนี่ยวนำความร้อนความถี่สูง ควบคุมอุณหภูมิผิวสัมผัสเนื้อที่ 900°F เพื่อการ Caramelize ผิวสโมกกรอบระดับไมครอน',
    metric: '900°F',
    metricLabel: 'Instant Thermal Searing',
    colSpan: 'md:col-span-2',
    bgClass: 'bg-gradient-to-br from-[#1c1c1e] to-[#0d0d0e]'
  },
  {
    id: 'farm',
    tag: 'Provenance',
    title: '100% Traceable',
    description: 'วัตถุดิบทุกชนิดมีระบบบันทึกแหล่งกำเนิดฟาร์มส่งตรงทางเครื่องบิน ภายใน 36 ชั่วโมง',
    metric: '<36h',
    metricLabel: 'From Farm to Plate',
    colSpan: 'md:col-span-1',
    bgClass: 'bg-gradient-to-br from-[#1a1f1d] to-[#0e1411]'
  },
  {
    id: 'taste',
    tag: 'Sensory Display',
    title: 'Super Retina Umami',
    description: 'เลเยอร์รสชาติ 5 มิติ หวาน เค็ม เปรี้ยว ขม และอูมามิที่สอดประสานกันอย่างลงตัวไร้รอยต่อ',
    metric: '5-Layer',
    metricLabel: 'Harmonic Flavor Architecture',
    colSpan: 'md:col-span-1',
    bgClass: 'bg-gradient-to-br from-[#1d1824] to-[#120d18]'
  },
  {
    id: 'eco',
    tag: 'BistroCare+',
    title: 'Thermal Cryo-Packaging',
    description: 'กล่องเก็บอุณหภูมิสไตล์ Minimalist ที่สามารถกักเก็บความร้อนและความกรอบได้นานถึง 45 นาที 100% ย่อยสลายได้ทางชีวภาพ',
    metric: '45 Min',
    metricLabel: 'Zero Temperature Loss',
    colSpan: 'md:col-span-2',
    bgClass: 'bg-gradient-to-br from-[#19191b] to-[#111112]'
  }
];
