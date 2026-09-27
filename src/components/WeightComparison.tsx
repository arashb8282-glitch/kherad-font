import React, { useState } from 'react';
import { Layers, Download } from 'lucide-react';

export const WeightComparison: React.FC = () => {
  const [samplePhrase, setSamplePhrase] = useState<string>(
    'خِـرد رهنمای و خِـرد دلگشای، خِـرد دست گیرد به هر دو سرای (۱۳۰۴ - ۱۴۰۵)'
  );
  const [fontSize, setFontSize] = useState<number>(28);

  const weights = [
    {
      name: 'عادی (Regular)',
      code: 'Regular',
      weight: 400,
      file: 'AbarMidFaNum-Regular.woff',
      size: '۵۵.۸ کیلوبایت',
      desc: 'مناسب متن‌های طولانی، بندها، مقالات و توضیحات رابط کاربری',
    },
    {
      name: 'نیمه‌ضخیم (SemiBold)',
      code: 'SemiBold',
      weight: 600,
      file: 'AbarMidFaNum-SemiBold.woff',
      size: '۵۸.۳ کیلوبایت',
      desc: 'مناسب زیرعنوان‌ها، دکمه‌های کنشی، برچسب‌ها و جلب توجه ملایم',
    },
    {
      name: 'ضخیم (Bold)',
      code: 'Bold',
      weight: 700,
      file: 'AbarMidFaNum-Bold.woff',
      size: '۵۷.۹ کیلوبایت',
      desc: 'مناسب تیترهای اصلی، ارقام برجسته، قیمت‌ها و هدرهای تأکیدی',
    },
  ];

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            مقایسه اوزان سه‌گانه (Regular / SemiBold / Bold)
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            یک عبارت وارد کنید تا تفاوت ضخامت، توازن سیاهی و سفیدی و کشیدگی حروف را در هر سه وزن مقایسه فرمایید.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-stone-950/80 px-3 py-1.5 rounded-xl border border-stone-800 text-xs">
          <label htmlFor="comp-size-slider" className="text-stone-400">اندازه مقایسه:</label>
          <input
            id="comp-size-slider"
            type="range"
            min="18"
            max="48"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-24 accent-amber-500 cursor-pointer h-1.5 bg-stone-700 rounded-lg"
          />
          <span className="text-amber-400 font-mono font-bold w-10 text-left">{fontSize}px</span>
        </div>
      </div>

      <div className="pt-6 pb-6">
        <label htmlFor="comp-phrase-input" className="block text-xs font-medium text-stone-400 mb-2">
          متن آزمایشی مشترک برای همه وزن‌ها:
        </label>
        <input
          id="comp-phrase-input"
          type="text"
          value={samplePhrase}
          onChange={(e) => setSamplePhrase(e.target.value)}
          className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-stone-100 text-base sm:text-lg focus:outline-none focus:border-amber-500/80 transition-colors"
          placeholder="متن دلخواه خود را بنویسید..."
        />
      </div>

      <div className="space-y-4">
        {weights.map((w) => (
          <div
            key={w.weight}
            className="bg-stone-950/90 border border-stone-800/80 rounded-xl p-5 hover:border-amber-500/40 transition-all group"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-900 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-200 text-sm">{w.name}</span>
                <span className="px-2 py-0.5 rounded-md bg-stone-800 text-stone-400 font-mono text-[11px]">
                  weight: {w.weight}
                </span>
                <span className="text-stone-500 text-[11px] font-mono hidden sm:inline">
                  {w.file}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-stone-400 text-[11px]">{w.size}</span>
                <a
                  href={`/${w.file}`}
                  download
                  className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>دانلود فایل</span>
                </a>
              </div>
            </div>

            <p className="text-[12px] text-stone-400 mt-2 mb-4">
              {w.desc}
            </p>

            <div
              className="text-stone-100 leading-relaxed py-2 transition-all break-words"
              style={{
                fontWeight: w.weight,
                fontSize: `${fontSize}px`,
              }}
            >
              {samplePhrase || 'متنی برای نمایش وارد نشده است.'}
            </div>

            <div className="mt-3 pt-3 border-t border-stone-900/60 flex items-center justify-between text-[11px] text-stone-400">
              <span className="font-mono text-stone-400">۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ — فارسی اصیل</span>
              <span className="font-mono text-stone-400 hidden sm:inline">font-weight: {w.weight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
