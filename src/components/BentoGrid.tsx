import React from 'react';
import { Cpu, PlaneTakeoff, Layers, PackageCheck, Flame, Sparkles } from 'lucide-react';
import { BENTO_FEATURES } from '../data/foodCatalog';

export const BentoGrid: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'chip':
        return <Cpu className="w-6 h-6 text-orange-400" />;
      case 'farm':
        return <PlaneTakeoff className="w-6 h-6 text-emerald-400" />;
      case 'taste':
        return <Layers className="w-6 h-6 text-purple-400" />;
      case 'eco':
        return <PackageCheck className="w-6 h-6 text-blue-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="bento" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            Culinary Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            สถาปัตยกรรมความอร่อยที่เหนือชั้น
          </h2>
          <p className="text-base sm:text-lg text-neutral-400">
            เบื้องหลังทุกเมนูคือการผสานความแม่นยำระดับวิทยาศาสตร์ เข้ากับศิลปะแห่งการปรุงของมาสเตอร์เชฟ
          </p>
        </div>

        {/* Apple Keynote Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_FEATURES.map(item => (
            <div
              key={item.id}
              className={`${item.colSpan} ${item.bgClass} rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[300px] shadow-xl`}
            >
              {/* Subtle ambient light on hover */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-baseline justify-between mt-auto">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    {item.metricLabel}
                  </div>
                </div>
                <div className="text-xs text-[#2997ff] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  ข้อมูลวิจัย &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
