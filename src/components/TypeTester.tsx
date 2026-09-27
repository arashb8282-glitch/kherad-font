import React, { useState } from 'react';
import { 
  AlignRight, 
  AlignCenter, 
  AlignLeft, 
  AlignJustify, 
  RotateCcw, 
  Copy, 
  Check, 
  Sliders
} from 'lucide-react';
import { PRESET_TEXTS, PresetText } from '../data/presets';

export const TypeTester: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('modern_prose');
  const [text, setText] = useState<string>(PRESET_TEXTS[2].text);
  const [weight, setWeight] = useState<number>(400);
  const [size, setSize] = useState<number>(24);
  const [lineHeight, setLineHeight] = useState<number>(1.8);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [textAlign, setTextAlign] = useState<'right' | 'center' | 'left' | 'justify'>('right');
  const [copied, setCopied] = useState<boolean>(false);

  const toPersianDigits = (str: string) => {
    const persianMap: { [key: string]: string } = {
      '0': '۰', '1': '۱', '2': '۲', '3': '۳', '4': '۴',
      '5': '۵', '6': '۶', '7': '۷', '8': '۸', '9': '۹'
    };
    return str.replace(/[0-9]/g, (w) => persianMap[w] || w);
  };

  const toLatinDigits = (str: string) => {
    const latinMap: { [key: string]: string } = {
      '۰': '0', '۱': '1', '۲': '2', '۳': '3', '۴': '4',
      '۵': '5', '۶': '6', '۷': '7', '۸': '8', '۹': '9'
    };
    return str.replace(/[۰-۹]/g, (w) => latinMap[w] || w);
  };

  const handleSelectPreset = (preset: PresetText) => {
    setSelectedPresetId(preset.id);
    setText(preset.text);
    setSize(preset.defaultSize);
    setWeight(preset.defaultWeight);
  };

  const handleConvertFaDigits = () => {
    setText((prev) => toPersianDigits(prev));
  };

  const handleConvertEnDigits = () => {
    setText((prev) => toLatinDigits(prev));
  };

  const handleReset = () => {
    const current = PRESET_TEXTS.find((p) => p.id === selectedPresetId) || PRESET_TEXTS[0];
    setText(current.text);
    setSize(current.defaultSize);
    setWeight(current.defaultWeight);
    setLineHeight(1.8);
    setLetterSpacing(0);
    setTextAlign('right');
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-amber-400" />
            تایپ‌تستر و آزمایشگاه زنده قلم
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            متن دلخواه خود را بنویسید یا از متون پیشنهادی زیر برای ارزیابی کشش و خوانایی استفاده کنید.
          </p>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-stone-400 ml-1">پیش‌فرض‌ها:</span>
          {PRESET_TEXTS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                selectedPresetId === preset.id
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {preset.title.split(' - ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6 border-b border-stone-800/70 text-xs">
        <div className="space-y-2">
          <div className="flex justify-between items-center text-stone-300 font-medium">
            <span>وزن قلم (Font Weight)</span>
            <span className="text-amber-400 font-mono font-bold">{weight}</span>
          </div>
          <div className="grid grid-cols-3 gap-1 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
            <button
              onClick={() => setWeight(400)}
              className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                weight === 400
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              عادی (۴۰۰)
            </button>
            <button
              onClick={() => setWeight(600)}
              className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                weight === 600
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              نیمه (۶۰۰)
            </button>
            <button
              onClick={() => setWeight(700)}
              className={`py-1.5 rounded-lg text-center font-medium transition-all ${
                weight === 700
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              ضخیم (۷۰۰)
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-stone-300 font-medium">
            <span>اندازه فونت (Font Size)</span>
            <span className="text-amber-400 font-mono font-bold">{size}px</span>
          </div>
          <div className="flex items-center gap-2 pt-1.5">
            <input
              type="range"
              min="14"
              max="96"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-amber-500 bg-stone-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-stone-300 font-medium">
            <span>فاصله سطرها (Line Height)</span>
            <span className="text-amber-400 font-mono font-bold">{lineHeight.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-2 pt-1.5">
            <input
              type="range"
              min="1.1"
              max="2.8"
              step="0.1"
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-full accent-amber-500 bg-stone-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-stone-300 font-medium">
            <span>چینش متن و ارقام</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 bg-stone-950/80 p-1 rounded-xl border border-stone-800">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setTextAlign('right')}
                className={`p-1.5 rounded-lg transition-colors ${
                  textAlign === 'right' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
                title="راست‌چین"
              >
                <AlignRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTextAlign('center')}
                className={`p-1.5 rounded-lg transition-colors ${
                  textAlign === 'center' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
                title="وسط‌چین"
              >
                <AlignCenter className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTextAlign('left')}
                className={`p-1.5 rounded-lg transition-colors ${
                  textAlign === 'left' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
                title="چپ‌چین"
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTextAlign('justify')}
                className={`p-1.5 rounded-lg transition-colors ${
                  textAlign === 'justify' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
                title="تراز کامل"
              >
                <AlignJustify className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1 border-r border-stone-800 pr-1">
              <button
                onClick={handleConvertFaDigits}
                className="px-2 py-1 text-[11px] rounded bg-stone-800 hover:bg-stone-700 text-amber-300 font-bold"
                title="تبدیل تمام اعداد به فارسی"
              >
                ۱۲۳
              </button>
              <button
                onClick={handleConvertEnDigits}
                className="px-2 py-1 text-[11px] rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-mono"
                title="تبدیل تمام اعداد به انگلیسی"
              >
                123
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 relative">
        <div className="flex items-center justify-between pb-3 text-xs text-stone-400">
          <div className="flex items-center gap-4">
            <span>کلمات: <strong className="text-stone-200">{wordCount}</strong></span>
            <span>حروف: <strong className="text-stone-200">{charCount}</strong></span>
            <span className="hidden sm:inline text-stone-500">|</span>
            <span className="hidden sm:inline text-amber-400/90 font-medium">
              💡 روی متن کلیک کرده و مستقیماً ویرایش کنید
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="بازنشانی به حالت پیش‌فرض"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>بازنشانی</span>
            </button>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="کپی کردن متن"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">کپی شد</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>کپی متن</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-stone-950 rounded-xl p-6 sm:p-8 border border-stone-800 min-h-[300px] focus-within:ring-2 focus-within:ring-amber-500/50 transition-all">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-full min-h-[260px] bg-transparent text-stone-100 resize-y outline-none leading-relaxed selection:bg-amber-500/40"
            style={{
              fontWeight: weight,
              fontSize: `${size}px`,
              lineHeight: lineHeight,
              letterSpacing: `${letterSpacing}px`,
              textAlign: textAlign,
            }}
            placeholder="اینجا متن فارسی خود را تایپ کنید..."
            dir="rtl"
          />
        </div>
      </div>
    </div>
  );
};
