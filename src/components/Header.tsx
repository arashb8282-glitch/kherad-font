import React from 'react';
import { Download, Code2 } from 'lucide-react';

interface HeaderProps {
  onOpenCodeModal: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCodeModal,
  activeTab,
  setActiveTab,
}) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-950/85 border-b border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-bold text-xl shadow-lg shadow-amber-500/20">
              خ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-stone-100 font-kherad">
                  قلم خِـرَد
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono">
                  AbarMidFaNum
                </span>
              </div>
              <p className="text-xs text-stone-400 hidden sm:block">
                تایپ‌فیس معاصر فارسی با ارقام اختصاصی
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-900/90 p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveTab('tester')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'tester'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              تایپ‌تستر زنده
            </button>
            <button
              onClick={() => setActiveTab('weights')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'weights'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              مقایسه اوزان
            </button>
            <button
              onClick={() => setActiveTab('glyphs')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'glyphs'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              گلیف‌ها و ارقام
            </button>
            <button
              onClick={() => setActiveTab('showcase')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'showcase'
                  ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800'
              }`}
            >
              ویترین کاربرد
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCodeModal}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              title="کد CSS و راهنمای نصب"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">کد و نصب</span>
            </button>

            <a
              href="/AbarMidFaNum-Bold.woff"
              download
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs sm:text-sm font-bold shadow-md shadow-amber-500/10 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>دانلود فونت‌ها</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-stone-900 text-xs">
          <button
            onClick={() => setActiveTab('tester')}
            className={`py-1 px-2 rounded-md ${
              activeTab === 'tester' ? 'text-amber-400 font-bold' : 'text-stone-400'
            }`}
          >
            تستر
          </button>
          <button
            onClick={() => setActiveTab('weights')}
            className={`py-1 px-2 rounded-md ${
              activeTab === 'weights' ? 'text-amber-400 font-bold' : 'text-stone-400'
            }`}
          >
            اوزان
          </button>
          <button
            onClick={() => setActiveTab('glyphs')}
            className={`py-1 px-2 rounded-md ${
              activeTab === 'glyphs' ? 'text-amber-400 font-bold' : 'text-stone-400'
            }`}
          >
            گلیف‌ها
          </button>
          <button
            onClick={() => setActiveTab('showcase')}
            className={`py-1 px-2 rounded-md ${
              activeTab === 'showcase' ? 'text-amber-400 font-bold' : 'text-stone-400'
            }`}
          >
            ویترین
          </button>
        </div>
      </div>
    </header>
  );
};
