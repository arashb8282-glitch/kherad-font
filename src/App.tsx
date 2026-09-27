import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TypeTester } from './components/TypeTester';
import { WeightComparison } from './components/WeightComparison';
import { GlyphInspector } from './components/GlyphInspector';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { CodeExportModal } from './components/CodeExportModal';
import { Code2, Download } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('tester');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-kherad selection:bg-amber-500/30 selection:text-amber-200">
      <Header
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Hero />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {activeTab === 'tester' && <TypeTester />}
        {activeTab === 'weights' && <WeightComparison />}
        {activeTab === 'glyphs' && <GlyphInspector />}
        {activeTab === 'showcase' && <ShowcaseGallery />}
      </main>

      <section className="border-t border-stone-900 bg-stone-950/70 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-right">
            <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/40">
              <h4 className="font-bold text-stone-200 text-sm mb-1 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                طراحی یکدست ارقام و حروف
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                ارقام فارسی متناسب با خط کرسی و شیب حروف بدون نیاز به اصلاحات دستی در جداول و داده‌ها.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/40">
              <h4 className="font-bold text-stone-200 text-sm mb-1 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                بهینه‌سازی وب با فرمت WOFF
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                حجم بسیار اندک (~۵۵ تا ۵۸ کیلوبایت) برای بارگذاری بلادرنگ و بدون وقفه در وب و موبایل.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/30 border border-stone-800/40">
              <h4 className="font-bold text-stone-200 text-sm mb-1 flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                ۳ وزن استاندارد
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                اوزان ۴۰۰ (عادی)، ۶۰۰ (نیمه‌ضخیم) و ۷۰۰ (ضخیم) برای سلسله‌مراتب تایپوگرافی کامل.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-800/80 bg-stone-950 py-8 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
          <div>
            <span className="font-bold text-stone-300">خانواده قلم خِرد (AbarMidFaNum)</span>
            <span className="mx-2">•</span>
            <span>نمایشگر و آزمایشگاه تعاملی تایپوگرافی فارسی</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCodeModalOpen(true)}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>کد @font-face</span>
            </button>
            <span>•</span>
            <a
              href="/AbarMidFaNum-Bold.woff"
              download
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>دانلود وزن‌ها</span>
            </a>
          </div>
        </div>
      </footer>

      <CodeExportModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}

export default App;
