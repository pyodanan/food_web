import React from 'react';
import { Sparkles, SlidersHorizontal, Search } from 'lucide-react';
import { FoodProduct, FoodCategory } from '../types/food';
import { ProductCard } from './ProductCard';

interface CatalogSectionProps {
  products: FoodProduct[];
  activeCategory: FoodCategory;
  onSelectCategory: (cat: FoodCategory) => void;
  searchQuery: string;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery
}) => {
  const categories: Array<{ id: FoodCategory; label: string; badge?: string }> = [
    { id: 'all', label: 'ทั้งหมด (All)' },
    { id: 'burgers', label: 'Pro Burgers', badge: 'Wagyu A5' },
    { id: 'pasta', label: 'Artisan Pasta', badge: 'Handmade' },
    { id: 'pizzas', label: 'Studio Pizza', badge: 'Wood-fired' },
    { id: 'desserts', label: 'Apple Sweets', badge: 'Classic' },
    { id: 'beverages', label: 'Ultra Drinks', badge: 'Nitro' }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-20 bg-[#0a0a0c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
              The Culinary Lineup
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-2">
              เลือกสรรรสชาติที่ใช่สำหรับคุณ
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg">
              ออกแบบขึ้นอย่างประณีตเพื่อผู้ที่หลงใหลในความสมบูรณ์แบบ ทั้งวัตถุดิบและเทคนิค
            </p>
          </div>

          {/* Category Tabs (Apple Pill Filters) */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-white text-black shadow-md'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                {cat.badge && activeCategory === cat.id && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-black/10 font-bold">
                    {cat.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results notification */}
        {searchQuery && (
          <div className="mb-8 p-4 rounded-2xl bg-neutral-900/60 border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <Search className="w-4 h-4 text-[#2997ff]" />
              <span>
                ผลการค้นหาสำหรับ: <span className="font-semibold text-white">"{searchQuery}"</span> ({filteredProducts.length} รายการ)
              </span>
            </div>
            <button
              onClick={() => onSelectCategory('all')}
              className="text-[#2997ff] hover:underline"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-neutral-900/30 border border-white/5 space-y-3">
            <p className="text-neutral-400 text-sm">ไม่พบเมนูที่ตรงกับคำค้นหาของคุณ</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="px-5 py-2 rounded-full bg-[#0071e3] text-white text-xs font-medium"
            >
              แสดงเมนูทั้งหมด
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
