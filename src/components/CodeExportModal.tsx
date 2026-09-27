import React, { useState } from 'react';
import { X, Copy, Check, Download, Code2 } from 'lucide-react';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'css' | 'tailwind' | 'html'>('css');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const cssSnippet = `/* Kherad / AbarMidFaNum Font Setup */
@font-face {
  font-family: 'Kherad';
  src: url('/fonts/AbarMidFaNum-Regular.woff') format('woff'),
       url('/AbarMidFaNum-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kherad';
  src: url('/fonts/AbarMidFaNum-SemiBold.woff') format('woff'),
       url('/AbarMidFaNum-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Kherad';
  src: url('/fonts/AbarMidFaNum-Bold.woff') format('woff'),
       url('/AbarMidFaNum-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Kherad', system-ui, -apple-system, sans-serif;
}`;

  const tailwindSnippet = `// tailwind.config.js (or @theme in Tailwind v4)
export default {
  theme: {
    extend: {
      fontFamily: {
        kherad: ['Kherad', 'AbarMidFaNum', 'sans-serif'],
      },
    },
  },
};`;

  const htmlSnippet = `<!-- Use in your HTML -->
<link rel="preload" href="/fonts/AbarMidFaNum-Regular.woff" as="font" type="font/woff" crossorigin>
<div style="font-family: 'Kherad', sans-serif;">
  به نام خداوند جان و خرد (۰۱۲۳۴۵۶۷۸۹)
</div>`;

  const currentCode = 
    activeTab === 'css' ? cssSnippet :
    activeTab === 'tailwind' ? tailwindSnippet : htmlSnippet;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-amber-400" />
            <h3 className="text-base sm:text-lg font-bold text-stone-100 font-kherad">
              راهنمای استفاده و کدهای نصب قلم
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6 text-xs sm:text-sm">
          <div>
            <h4 className="text-stone-300 font-bold mb-3 flex items-center gap-2">
              <Download className="w-4 h-4 text-amber-400" />
              دریافت مستقیم فایل‌های وب‌فونت (.woff):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href="/AbarMidFaNum-Regular.woff"
                download
                className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-200 transition-colors"
              >
                <div className="text-right">
                  <div className="font-bold text-xs">عادی (۴۰۰)</div>
                  <div className="text-[10px] text-stone-500 font-mono">Regular.woff</div>
                </div>
                <Download className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="/AbarMidFaNum-SemiBold.woff"
                download
                className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-200 transition-colors"
              >
                <div className="text-right">
                  <div className="font-bold text-xs">نیمه‌ضخیم (۶۰۰)</div>
                  <div className="text-[10px] text-stone-500 font-mono">SemiBold.woff</div>
                </div>
                <Download className="w-4 h-4 text-amber-400" />
              </a>

              <a
                href="/AbarMidFaNum-Bold.woff"
                download
                className="flex items-center justify-between p-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-500/50 text-stone-200 transition-colors"
              >
                <div className="text-right">
                  <div className="font-bold text-xs">ضخیم (۷۰۰)</div>
                  <div className="text-[10px] text-stone-500 font-mono">Bold.woff</div>
                </div>
                <Download className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-1 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs">
                <button
                  onClick={() => setActiveTab('css')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'css' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'
                  }`}
                >
                  CSS (@font-face)
                </button>
                <button
                  onClick={() => setActiveTab('tailwind')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'tailwind' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'
                  }`}
                >
                  Tailwind CSS
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeTab === 'html' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'
                  }`}
                >
                  HTML
                </button>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">کپی شد</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>کپی کد</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 border border-stone-800 rounded-xl p-4 font-mono text-xs text-amber-300/90 overflow-x-auto text-left dir-ltr max-h-64 leading-relaxed">
              <pre>{currentCode}</pre>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-stone-800 bg-stone-950/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors cursor-pointer"
          >
            بستن پنجره
          </button>
        </div>
      </div>
    </div>
  );
};
