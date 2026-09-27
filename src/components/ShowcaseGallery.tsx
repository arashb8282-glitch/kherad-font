import React, { useState } from 'react';
import { 
  BookOpen, 
  Feather, 
  MessageSquare, 
  CheckCheck, 
  Clock, 
  Calendar,
  CreditCard,
  ShieldCheck
} from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState<'fintech' | 'editorial' | 'poetry' | 'chat'>('fintech');

  return (
    <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-5 sm:p-8 backdrop-blur-md shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
        <div>
          <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            ویترین کاربرد در دنیای واقعی (Real-World UI)
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-1">
            مشاهده کاربرد عملی قلم خرد در واسط‌های کاربری گوناگون: مالی، رسانه‌ای، شعر و پیام‌رسانی
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-stone-950 p-1 rounded-xl border border-stone-800 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveShowcase('fintech')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeShowcase === 'fintech'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>تجارت و فین‌تک</span>
          </button>
          <button
            onClick={() => setActiveShowcase('editorial')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeShowcase === 'editorial'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>مجله و سرمقاله</span>
          </button>
          <button
            onClick={() => setActiveShowcase('poetry')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeShowcase === 'poetry'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <Feather className="w-3.5 h-3.5" />
            <span>شعر و ادبیات</span>
          </button>
          <button
            onClick={() => setActiveShowcase('chat')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              activeShowcase === 'chat'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>پیام‌رسان موبایل</span>
          </button>
        </div>
      </div>

      <div className="pt-6">
        {activeShowcase === 'fintech' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  موجودی حساب سرمایه‌گذاری
                </span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono text-[11px]">
                  +۲۴.۵٪ این ماه
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-bold text-stone-100 font-kherad tracking-tight">
                  ۲۸۴,۹۵۰,۰۰۰
                </span>
                <span className="text-stone-400 text-sm mr-2 font-medium">تومان</span>
              </div>
              <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span>شماره حساب: <strong className="text-stone-200">۰۲۴-۹۸۲۷۱-۰۰</strong></span>
                <span>سود امروز: <strong className="text-emerald-400">۱,۴۵۰,۰۰۰ تومان</strong></span>
              </div>
            </div>

            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold">
                    تخفیف ویژه ۲۵٪
                  </span>
                  <span className="text-xs text-stone-500 font-mono">شناسه: #۸۹۴۲۱</span>
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2 font-kherad">
                  مجموعه کتاب‌های شاهنامه با خط نستعلیق نفیس
                </h3>
                <p className="text-xs text-stone-400 leading-relaxed">
                  چاپ فاخر در قطع رحلی بزرگ با جلد چرم طبیعی و کاغذ معطر گلاسه.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs text-stone-400 line-through">
                    ۴,۸۰۰,۰۰۰ تومان
                  </div>
                  <div className="text-xl font-bold text-amber-400 font-kherad">
                    ۳,۶۰۰,۰۰۰ <span className="text-xs text-stone-300 font-normal">تومان</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-colors">
                  افزودن به سبد
                </button>
              </div>
            </div>

            <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold pb-2 border-b border-stone-800">
                <ShieldCheck className="w-4 h-4" />
                <span>رسید پرداخت موفق</span>
              </div>
              <div className="space-y-2 text-xs text-stone-300">
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">شماره تراکنش:</span>
                  <span className="font-mono text-stone-200">TRX-۹۸۴۱۶۲۵</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">تاریخ و زمان:</span>
                  <span>۱۴۰۵/۰۲/۱۴ - ۱۷:۳۴</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">کارمزد انتقال:</span>
                  <span>۱,۲۰۰ تومان</span>
                </div>
                <div className="flex justify-between py-2 border-t border-stone-800/60 font-semibold text-stone-100">
                  <span>مبلغ پرداختی:</span>
                  <span className="text-amber-400 font-bold text-sm">۱,۸۵۰,۰۰۰ تومان</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeShowcase === 'editorial' && (
          <div className="bg-stone-950 p-6 sm:p-10 rounded-2xl border border-stone-800 max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 text-xs text-stone-400">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                فناوری و فرهنگ
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> ۱۴ مهر ۱۴۰۵
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> زمان مطالعه: ۶ دقیقه
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-tight font-kherad">
              جایگاه خرد در بازآفرینی تایپوگرافی معاصر فارسی
            </h1>

            <p className="text-base sm:text-lg text-amber-200/90 font-semibold leading-relaxed border-r-4 border-amber-500 pr-4">
              چگونه طراحی تایپ‌فیس‌های دیجیتال می‌تواند اصالت خط فارسی را با سرعت و ووضوح نمایشگرهای مدرن پیوند زند؟
            </p>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-loose font-normal">
              <p>
                خط فارسی در گذر سده‌ها همواره از انعطاف‌پذیری و فرم‌های سیال بهره برده است. با ورود تایپوگرافی به عصر دیجیتال، چالش حفظ پیوستگی کلمات در کنار خوانش بی‌نقص ارقام در صفحات کاربری مطرح گشت. قلم خرد با نگرشی مهندسی‌شده و تکیه بر ساختار حروف همگون، پاسخی به نیاز روزافزون توسعه‌دهندگان و ناشران معاصر است.
              </p>
              
              <blockquote className="my-6 p-4 rounded-xl bg-stone-900/80 border-r-2 border-amber-400 text-stone-200 italic font-medium">
                «زیبایی خط، زبان دست و مظهر کمال عقل است؛ هر نگاره پیامی است که مرزهای زمان را درمی‌نوردد.»
              </blockquote>

              <p>
                در سال گذشته، بیش از ۷۳ درصد پایگاه‌های خبری و سامانه‌های اداری کشور به استفاده از فونت‌های دارای ارقام فارسی استاندارد روی آورده‌اند تا از اختلاط ناهمگون اعداد لاتین در متون رسمی جلوگیری شود.
              </p>
            </div>
          </div>
        )}

        {activeShowcase === 'poetry' && (
          <div className="bg-stone-950 p-6 sm:p-12 rounded-2xl border border-stone-800 max-w-3xl mx-auto text-center space-y-8">
            <div>
              <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">
                شاهکار شعر فارسی
              </span>
              <h3 className="text-2xl font-bold text-stone-100 mt-1 font-kherad">
                دیباچه شاهنامه فردوسی بزرگ
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                نمایش توازن مصراع‌ها و زیبایی خط در اوزان مختلف
              </p>
            </div>

            <div className="space-y-6 max-w-xl mx-auto">
              {[
                ['به نام خداوند جان و خرد', 'کزین برتر اندیشه برنگذرد'],
                ['خداوند نام و خداوند جای', 'خداوند روزی‌ده رهنمای'],
                ['خداوند کیوان و گردان سپهر', 'فروزنده ماه و ناهید و مهر'],
                ['ز نام و نشان و گمان برتر است', 'نگارنده بر شده گوهر است'],
              ].map(([left, right], idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-6 py-2 border-b border-stone-900 text-stone-200 text-lg sm:text-xl font-kherad"
                  style={{ fontWeight: idx === 0 ? 700 : 400 }}
                >
                  <span className="flex-1 text-right sm:text-right">{left}</span>
                  <span className="text-stone-700 hidden sm:inline">✤</span>
                  <span className="flex-1 text-right sm:text-left">{right}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-xs text-stone-400 font-mono">
              سراینده: ابوالقاسم فردوسی طوسی (زاده ۳۱۹ خورشیدی)
            </div>
          </div>
        )}

        {activeShowcase === 'chat' && (
          <div className="bg-stone-950 p-4 sm:p-8 rounded-2xl border border-stone-800 max-w-md mx-auto space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-800">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center font-bold text-stone-950">
                س
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-100 font-kherad">سارا رادمنش</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  آنلاین
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-stone-900 border border-stone-800 text-stone-200 text-xs sm:text-sm p-3 rounded-2xl rounded-tr-none leading-relaxed">
                  سلام! نسخه جدید فونت «خرد» رو در رابط جدید تست کردید؟ خوانایی ارقام فارسی در جدول‌ها واقعاً فوق‌العاده شده.
                </div>
                <span className="text-[10px] text-stone-500 mt-1 mr-1">۱۰:۴۲ ق.ظ</span>
              </div>

              <div className="flex flex-col items-end max-w-[85%] mr-auto">
                <div className="bg-amber-500 text-stone-950 font-medium text-xs sm:text-sm p-3 rounded-2xl rounded-tl-none leading-relaxed shadow-md shadow-amber-500/10">
                  بله، در داشبورد پرداخت اعمال کردیم. زمان بارگذاری فایل ۵۷ کیلوبایتی WOFF هم برای کاربران گوشی عالیه!
                </div>
                <div className="flex items-center gap-1 text-[10px] text-stone-500 mt-1 ml-1">
                  <span>۱۰:۴۵ ق.ظ</span>
                  <CheckCheck className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </div>

              <div className="flex flex-col items-start max-w-[85%]">
                <div className="bg-stone-900 border border-stone-800 text-stone-200 text-xs sm:text-sm p-3 rounded-2xl rounded-tr-none leading-relaxed">
                  بسیار عالی! در نسخه بعدی ارقام کسری و نماد ریال (﷼) رو هم فعال می‌کنیم.
                </div>
                <span className="text-[10px] text-stone-500 mt-1 mr-1">۱۰:۴۸ ق.ظ</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
