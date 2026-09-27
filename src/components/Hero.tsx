import React, { useState } from 'react';
import { Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [heroWeight, setHeroWeight] = useState<number>(700);
  const [heroSize, setHeroSize] = useState<number>(44);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-stone-800/80 bg-gradient-to-b from-stone-900/40 via-stone-950 to-stone-950">
      <div 
        aria-hidden="true" 
        className="select-none pointer-events-none absolute -top-12 -left-12 opacity-[0.03] text-[280px] sm:text-[380px] font-bold text-white leading-none font-kherad"
      >
        خرد
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            خانواده حروف فارسی «خِرد» با ارقام فارسی (AbarMidFaNum)
          </div>

          <div className="flex items-center gap-2 bg-stone-900/80 p-1 rounded-xl border border-stone-800 text-xs">
            <span className="text-stone-400 px-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> وزن سریع:
            </span>
            <button
              onClick={() => setHeroWeight(400)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                heroWeight === 400
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              عادی (۴۰۰)
            </button>
            <button
              onClick={() => setHeroWeight(600)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                heroWeight === 600
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              نیمه‌ضخیم (۶۰۰)
            </button>
            <button
              onClick={() => setHeroWeight(700)}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                heroWeight === 700
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              ضخیم (۷۰۰)
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-10 rounded-2xl bg-stone-900/50 border border-stone-800/80 backdrop-blur-sm shadow-2xl relative group">
          <div className="mb-4 flex items-center justify-between border-b border-stone-800/60 pb-3">
            <div className="text-xs font-mono text-stone-400 flex items-center gap-3">
              <span>وزن فعال: <strong className="text-amber-400 font-semibold">{heroWeight === 400 ? 'Regular' : heroWeight === 600 ? 'SemiBold' : 'Bold'} ({heroWeight})</strong></span>
              <span>اندازه: <strong className="text-amber-400 font-semibold">{heroSize}px</strong></span>
            </div>

            <div className="flex items-center gap-3">
              <label htmlFor="hero-slider" className="text-xs text-stone-400 hidden sm:inline">تغییر اندازه:</label>
              <input
                id="hero-slider"
                type="range"
                min="24"
                max="72"
                value={heroSize}
                onChange={(e) => setHeroSize(Number(e.target.value))}
                className="w-24 sm:w-36 accent-amber-500 cursor-pointer h-1.5 bg-stone-700 rounded-lg"
              />
            </div>
          </div>

          <div
            className="text-stone-100 transition-all duration-150 leading-[1.6] select-text"
            style={{
              fontWeight: heroWeight,
              fontSize: `${heroSize}px`,
            }}
          >
            به نام خداوند جان و خِرد
            <br />
            <span className="text-amber-400/90">کزین برتر اندیشه برنگذرد</span>
          </div>

          <p 
            className="mt-6 text-stone-300 text-base sm:text-lg leading-relaxed max-w-3xl"
            style={{ fontWeight: heroWeight === 700 ? 600 : 400 }}
          >
            قلمی سنجیده و کارآمد برای وب و اپلیکیشن با طراحی همگون حروف، کشیدگی‌های دقیق و پشتیبانی تمام‌عیار از اعداد فارسی بومی:
            <span className="inline-block mx-2 font-bold text-amber-300 tracking-wider">
              ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹
            </span>
          </p>

          <div className="mt-8 pt-6 border-t border-stone-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800/50">
              <span className="text-xs text-stone-400 block mb-1">فرمت پرونده‌ها</span>
              <span className="text-sm font-semibold text-stone-200 font-mono">WOFF (وب فشرده)</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800/50">
              <span className="text-xs text-stone-400 block mb-1">اوزان موجود</span>
              <span className="text-sm font-semibold text-amber-400">۴۰۰، ۶۰۰، ۷۰۰</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800/50">
              <span className="text-xs text-stone-400 block mb-1">پشتیبانی ارقام</span>
              <span className="text-sm font-semibold text-stone-200">FaNum بومی ایران</span>
            </div>
            <div className="bg-stone-950/60 p-3 rounded-xl border border-stone-800/50">
              <span className="text-xs text-stone-400 block mb-1">حجم میانگین هر فایل</span>
              <span className="text-sm font-semibold text-emerald-400 font-mono">~۵۷ کیلوبایت</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
