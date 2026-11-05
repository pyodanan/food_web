import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onSelectCategory: (category: string) => void;
  activeCategory: string;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectCategory,
  activeCategory,
  onSearchChange,
  searchQuery
}) => {
  const { itemCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    { id: 'all', label: 'Store ทั้งหมด' },
    { id: 'burgers', label: 'Pro Burgers' },
    { id: 'pasta', label: 'Pasta Air' },
    { id: 'pizzas', label: 'Studio Pizza' },
    { id: 'desserts', label: 'Sweets & Apple' },
    { id: 'beverages', label: 'Ultra Drinks' }
  ];

  return (
    <>
      {/* Top Global Navigation Bar (Apple Frosted Glass) */}
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        <nav className="glass-nav border-b border-white/10 text-[#f5f5f7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-xs tracking-tight">
            {/* Apple Gourmet Logo */}
            <a
              href="#overview"
              className="flex items-center gap-2 group transition-opacity hover:opacity-75 focus:outline-none"
            >
              <div className="w-5 h-5 flex items-center justify-center text-white">
                <svg viewBox="0 0 170 170" width="16" height="16" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.66-7.85-11.89-14.35-6.8-10.42-12.02-22.39-15.67-35.91-3.65-13.52-5.48-26.47-5.48-38.86 0-14.72 3.65-27.18 10.95-37.38 7.3-10.2 16.63-15.4 28-15.6 4.79 0 10.15 1.34 16.08 4.02 5.93 2.68 9.94 4.09 12.02 4.23 1.83-.14 5.98-1.57 12.45-4.3 6.47-2.73 11.81-4.02 16.02-3.87 9.87.5 18.24 3.84 25.1 10.02 6.86 6.18 11.24 13.9 13.14 23.16-8.62 5.21-12.98 12.55-13.08 22.02-.1 7.6 2.76 14.3 8.59 20.1 5.83 5.8 12.96 9.3 21.39 10.5-2.03 6.37-4.44 12.59-7.23 18.66zM119.22 33.01c0-6.73 2.38-13.23 7.14-19.5 4.76-6.27 10.82-10.66 18.17-13.17.38 3.79.08 7.69-.9 11.7-1.42 5.8-4.22 11.24-8.4 16.32-4.18 5.08-9.05 8.79-14.61 11.13-.4-2.14-.8-4.3-.8-6.48z" />
                </svg>
              </div>
              <span className="font-semibold text-sm tracking-normal text-white">Bistro</span>
            </a>

            {/* Desktop Category Nav */}
            <div className="hidden md:flex items-center space-x-7 text-[#d1d1d6]">
              {navCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    const catalogEl = document.getElementById('catalog');
                    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`transition-colors hover:text-white py-1 relative ${
                    activeCategory === cat.id ? 'text-white font-medium' : 'text-neutral-400'
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#0071e3] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Actions: Search & Apple Bag */}
            <div className="flex items-center space-x-5 text-neutral-300">
              <div className="relative flex items-center">
                {showSearchInput ? (
                  <div className="flex items-center bg-white/10 rounded-full px-3 py-1 border border-white/20 animate-fadeIn">
                    <Search className="w-3.5 h-3.5 text-neutral-400 mr-2" />
                    <input
                      type="text"
                      placeholder="ค้นหาเมนูวัตถุดิบ A5, ทรัฟเฟิล..."
                      value={searchQuery}
                      onChange={e => onSearchChange(e.target.value)}
                      autoFocus
                      className="bg-transparent text-xs text-white placeholder-neutral-400 focus:outline-none w-36 sm:w-48"
                    />
                    <button
                      onClick={() => {
                        setShowSearchInput(false);
                        onSearchChange('');
                      }}
                      className="text-neutral-400 hover:text-white ml-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearchInput(true)}
                    className="hover:text-white transition-opacity p-1 focus:outline-none"
                    title="ค้นหา"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Shopping Bag */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-white transition-opacity p-1 focus:outline-none"
                title="Apple Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#0071e3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scaleIn">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden hover:text-white focus:outline-none p-1"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Secondary Ribbon: Apple Sub-Nav */}
        <div className="bg-[#161617]/90 backdrop-blur-md border-b border-white/5 py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-sm tracking-tight text-white">Bistro Pro</span>
              <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 border border-white/10">
                Culinary Series 16
              </span>
            </div>

            <div className="flex items-center space-x-6 text-neutral-400">
              <a href="#overview" className="hover:text-white transition-colors hidden sm:inline-block">
                ภาพรวม
              </a>
              <a href="#bento" className="hover:text-white transition-colors hidden sm:inline-block">
                นวัตกรรม
              </a>
              <a href="#catalog" className="hover:text-white transition-colors">
                เมนูอาหาร
              </a>
              <button
                onClick={() => {
                  const catalogEl = document.getElementById('catalog');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium px-3.5 py-1 rounded-full text-xs transition-transform active:scale-95 shadow-sm"
              >
                สั่งซื้อเลย
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-white/10 px-6 py-4 space-y-3 animate-fadeIn">
            <div className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              หมวดหมู่อาหาร
            </div>
            {navCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                  const catalogEl = document.getElementById('catalog');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block w-full text-left py-2 text-sm transition-colors ${
                  activeCategory === cat.id ? 'text-[#2997ff] font-medium' : 'text-neutral-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Apple Promotional Announcement Bar */}
      <div className="bg-[#1d1d1f] text-neutral-300 text-center py-2.5 px-4 text-xs border-b border-white/5 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
        <span>
          สัมผัสรสชาติอันทรงพลัง สั่งครบ ฿500 ส่งฟรีด่วนด้วยกล่องควบคุมอุณหภูมิ BistroCare+
        </span>
        <a
          href="#catalog"
          className="text-[#2997ff] hover:underline inline-flex items-center ml-1 font-medium"
        >
          เลือกเมนู <ChevronRight className="w-3 h-3 ml-0.5" />
        </a>
      </div>
    </>
  );
};
