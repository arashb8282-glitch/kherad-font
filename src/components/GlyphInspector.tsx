import React, { useState } from 'react';
import { GLYPH_DATA, GlyphItem } from '../data/glyphs';
import { Search, Copy, Check, Hash } from 'lucide-react';

export const GlyphInspector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGlyph, setSelectedGlyph] = useState<GlyphItem>(GLYPH_DATA[0]);
  const [copiedChar, setCopiedChar] = useState<boolean>(false);
  const [copiedUnicode, setCopiedUnicode] = useState<boolean>(false);
  const [previewWeight, setPreviewWeight] = useState<number>(700);

  const categories = [
    { id: 'all', name: 'همه گلیف‌ها' },
    { id: 'persian_numbers', name: 'ارقام فارسی (FaNum)' },
    { id: 'persian_specific', name: 'حروف ویژه فارسی (گ، چ، پ، ژ...)' },
    { id: 'persian_alpha', name: 'الفبای فارسی' },
    { id: 'diacritics', name: 'حرکات و اعراب' },
    { id: 'punctuation', name: 'علائم نگارشی' },
  ];

  const filteredGlyphs = GLYPH_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.char.includes(searchQuery) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.unicode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (text: string, type: 'char' | 'unicode') => {
    navigator.clipboard.writeText(text);
    if (type === 'char') {
      setCopiedChar(true);
      setTimeout(() => setCopiedChar(false), 1800);
    } else {
      setCopiedUnicode(true);
      setTimeout(() => setCopiedUnicode(false), 1800);
    }
  };

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
            <Hash className="w-5 h-5 text-amber-400" />
            اطلس نگاره‌ها، ارقام و کاراکترها (Glyph Explorer)
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            بررسی دقیق جزئیات ترسیمی تک‌تک نویسه‌ها، کدهای یونی‌کد و ارقام فارسی
          </p>
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="جستجوی حرف، نام یا کد..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-stone-950 border border-stone-800 rounded-xl pr-9 pl-3 py-2 text-xs sm:text-sm text-stone-100 focus:outline-none focus:border-amber-500/80 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto py-4 scrollbar-none border-b border-stone-800/70">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 text-xs rounded-xl whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'bg-stone-950/80 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800/60'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
            {filteredGlyphs.map((glyph) => {
              const isSelected = selectedGlyph.unicode === glyph.unicode;
              return (
                <button
                  key={glyph.unicode + glyph.char}
                  onClick={() => setSelectedGlyph(glyph)}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center p-1 transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300 ring-2 ring-amber-500/30'
                      : 'bg-stone-950/80 border-stone-800/80 text-stone-200 hover:border-stone-700 hover:bg-stone-900'
                  }`}
                >
                  <span className="text-2xl font-bold font-kherad leading-none">
                    {glyph.char}
                  </span>
                  <span className="text-[9px] font-mono text-stone-400 mt-1 scale-90">
                    {glyph.unicode.replace('U+', '')}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredGlyphs.length === 0 && (
            <div className="py-12 text-center text-stone-500 text-sm">
              هیچ کاراکتری با این مشخصات یافت نشد.
            </div>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-stone-950 border border-stone-800 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-between text-xs text-stone-400 mb-4 pb-3 border-b border-stone-800/80">
              <span>وزن پیش‌نمایش:</span>
              <div className="flex gap-1 bg-stone-900 p-0.5 rounded-lg border border-stone-800">
                {[400, 600, 700].map((w) => (
                  <button
                    key={w}
                    onClick={() => setPreviewWeight(w)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                      previewWeight === w ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div 
              className="w-full h-44 flex items-center justify-center bg-stone-900/60 rounded-xl border border-stone-800/60 text-stone-100 select-all mb-4"
              style={{ fontWeight: previewWeight }}
            >
              <span className="text-8xl font-kherad transition-all drop-shadow">
                {selectedGlyph.char}
              </span>
            </div>

            <h3 className="text-base font-bold text-stone-100 mb-1">
              {selectedGlyph.name}
            </h3>
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20 mb-4">
              {selectedGlyph.unicode}
            </span>

            <div className="w-full text-xs space-y-2 text-stone-300 bg-stone-900/40 p-3 rounded-xl border border-stone-800/50 mb-5">
              <div className="flex justify-between py-1 border-b border-stone-800/40">
                <span className="text-stone-500">کد HTML Hex:</span>
                <span className="font-mono text-stone-200">
                  &#x{selectedGlyph.unicode.replace('U+', '')};
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800/40">
                <span className="text-stone-500">دسته:</span>
                <span>
                  {selectedGlyph.category === 'persian_numbers'
                    ? 'ارقام فارسی (FaNum)'
                    : selectedGlyph.category === 'persian_specific'
                    ? 'نویسه ویژه فارسی'
                    : selectedGlyph.category === 'persian_alpha'
                    ? 'الفبای اصلی'
                    : selectedGlyph.category === 'diacritics'
                    ? 'اعراب و علامت صوتی'
                    : 'نشانه‌گذاری'}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-500">پشتیبانی خرد:</span>
                <span className="text-emerald-400 font-medium">کامل و همگون</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full">
              <button
                onClick={() => handleCopy(selectedGlyph.char, 'char')}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedChar ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>کپی کاراکتر</span>
                  </>
                )}
              </button>
              <button
                onClick={() => handleCopy(selectedGlyph.unicode, 'unicode')}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
              >
                {copiedUnicode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Hash className="w-3.5 h-3.5" />
                    <span>کپی یونی‌کد</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
