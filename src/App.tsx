import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { FOOD_CATALOG } from './data/foodCatalog';
import { FoodCategory, OrderReceipt } from './types/food';
import { Navbar } from './components/Navbar';
import { HeroPro } from './components/HeroPro';
import { HeroAir } from './components/HeroAir';
import { BentoGrid } from './components/BentoGrid';
import { CatalogSection } from './components/CatalogSection';
import { FoodConfiguratorModal } from './components/FoodConfiguratorModal';
import { NutritionModal } from './components/NutritionModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutSuccessModal } from './components/CheckoutSuccessModal';
import { AppleFooter } from './components/AppleFooter';

const MainApp: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FoodCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [orderReceipt, setOrderReceipt] = useState<OrderReceipt | null>(null);

  const heroProProduct = FOOD_CATALOG.find(p => p.isFeaturedHero) || FOOD_CATALOG[0];
  const heroAirProduct = FOOD_CATALOG.find(p => p.isAirHero) || FOOD_CATALOG[1];

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col font-sans selection:bg-[#0071e3] selection:text-white">
      {/* Global Apple Frosted Nav & Subnav */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={cat => setActiveCategory(cat as FoodCategory)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Apple Experience Layout */}
      <main className="flex-1">
        {/* Flagship Dark Titanium Hero */}
        <HeroPro product={heroProProduct} />

        {/* Clean Bright Air Hero */}
        <HeroAir product={heroAirProduct} />

        {/* Apple Keynote Bento Innovation Grid */}
        <BentoGrid />

        {/* Interactive Store Catalog Matrix */}
        <CatalogSection
          products={FOOD_CATALOG}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
        />
      </main>

      {/* Apple Footer with Disclaimers & Directory */}
      <AppleFooter />

      {/* Interactive Apple Experience Modals & Drawers */}
      <FoodConfiguratorModal />
      <NutritionModal />
      <CartDrawer onOrderComplete={receipt => setOrderReceipt(receipt)} />
      <CheckoutSuccessModal
        receipt={orderReceipt}
        onClose={() => setOrderReceipt(null)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
};

export default App;
