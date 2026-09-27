export interface GlyphItem {
  char: string;
  name: string;
  unicode: string;
  category: 'persian_alpha' | 'persian_specific' | 'persian_numbers' | 'diacritics' | 'punctuation' | 'latin';
}

export const GLYPH_DATA: GlyphItem[] = [
  // Persian Numbers
  { char: '۰', name: 'ارقام فارسی - صفر (Zero)', unicode: 'U+06F0', category: 'persian_numbers' },
  { char: '۱', name: 'ارقام فارسی - یک (One)', unicode: 'U+06F1', category: 'persian_numbers' },
  { char: '۲', name: 'ارقام فارسی - دو (Two)', unicode: 'U+06F2', category: 'persian_numbers' },
  { char: '۳', name: 'ارقام فارسی - سه (Three)', unicode: 'U+06F3', category: 'persian_numbers' },
  { char: '۴', name: 'ارقام فارسی - چهار (Four)', unicode: 'U+06F4', category: 'persian_numbers' },
  { char: '۵', name: 'ارقام فارسی - پنج (Five)', unicode: 'U+06F5', category: 'persian_numbers' },
  { char: '۶', name: 'ارقام فارسی - شش (Six)', unicode: 'U+06F6', category: 'persian_numbers' },
  { char: '۷', name: 'ارقام فارسی - هفت (Seven)', unicode: 'U+06F7', category: 'persian_numbers' },
  { char: '۸', name: 'ارقام فارسی - هشت (Eight)', unicode: 'U+06F8', category: 'persian_numbers' },
  { char: '۹', name: 'ارقام فارسی - نه (Nine)', unicode: 'U+06F9', category: 'persian_numbers' },

  // Persian Specific Letters (گچپژ)
  { char: 'گ', name: 'گاف (Gaf)', unicode: 'U+06AF', category: 'persian_specific' },
  { char: 'چ', name: 'چیم (Tcheh)', unicode: 'U+0686', category: 'persian_specific' },
  { char: 'پ', name: 'پِ (Peh)', unicode: 'U+067E', category: 'persian_specific' },
  { char: 'ژ', name: 'ژِ (Zheh)', unicode: 'U+0698', category: 'persian_specific' },
  { char: 'ک', name: 'کاف فارسی (Keheh)', unicode: 'U+06A9', category: 'persian_specific' },
  { char: 'ی', name: 'یای فارسی (Farsi Yeh)', unicode: 'U+06CC', category: 'persian_specific' },

  // Core Persian Alphabet
  { char: 'آ', name: 'الف با کلاه (Alef Madda)', unicode: 'U+0622', category: 'persian_alpha' },
  { char: 'ا', name: 'الف (Alef)', unicode: 'U+0627', category: 'persian_alpha' },
  { char: 'ب', name: 'ب (Beh)', unicode: 'U+0628', category: 'persian_alpha' },
  { char: 'ت', name: 'ت (Teh)', unicode: 'U+062A', category: 'persian_alpha' },
  { char: 'ث', name: 'ث (Theh)', unicode: 'U+062B', category: 'persian_alpha' },
  { char: 'ج', name: 'جیم (Jeem)', unicode: 'U+062C', category: 'persian_alpha' },
  { char: 'ح', name: 'ح (Hah)', unicode: 'U+062D', category: 'persian_alpha' },
  { char: 'خ', name: 'خ (Khah)', unicode: 'U+062E', category: 'persian_alpha' },
  { char: 'د', name: 'دال (Dal)', unicode: 'U+062F', category: 'persian_alpha' },
  { char: 'ذ', name: 'ذال (Thal)', unicode: 'U+0630', category: 'persian_alpha' },
  { char: 'ر', name: 'ر (Reh)', unicode: 'U+0631', category: 'persian_alpha' },
  { char: 'ز', name: 'ز (Zain)', unicode: 'U+0632', category: 'persian_alpha' },
  { char: 'س', name: 'سین (Seen)', unicode: 'U+0633', category: 'persian_alpha' },
  { char: 'ش', name: 'شین (Sheen)', unicode: 'U+0634', category: 'persian_alpha' },
  { char: 'ص', name: 'صاد (Sad)', unicode: 'U+0635', category: 'persian_alpha' },
  { char: 'ض', name: 'ضاد (Dad)', unicode: 'U+0636', category: 'persian_alpha' },
  { char: 'ط', name: 'طا (Tah)', unicode: 'U+0637', category: 'persian_alpha' },
  { char: 'ظ', name: 'ظا (Zah)', unicode: 'U+0638', category: 'persian_alpha' },
  { char: 'ع', name: 'عین (Ain)', unicode: 'U+0639', category: 'persian_alpha' },
  { char: 'غ', name: 'غین (Ghain)', unicode: 'U+063A', category: 'persian_alpha' },
  { char: 'ف', name: 'ف (Feh)', unicode: 'U+0641', category: 'persian_alpha' },
  { char: 'ق', name: 'قاف (Qaf)', unicode: 'U+0642', category: 'persian_alpha' },
  { char: 'ل', name: 'لام (Lam)', unicode: 'U+0644', category: 'persian_alpha' },
  { char: 'م', name: 'میم (Meem)', unicode: 'U+0645', category: 'persian_alpha' },
  { char: 'ن', name: 'نون (Noon)', unicode: 'U+0646', category: 'persian_alpha' },
  { char: 'و', name: 'واو (Waw)', unicode: 'U+0648', category: 'persian_alpha' },
  { char: 'ه', name: 'هـ (Heh)', unicode: 'U+0647', category: 'persian_alpha' },
  { char: 'ء', name: 'همزه (Hamza)', unicode: 'U+0621', category: 'persian_alpha' },
  { char: 'ئ', name: 'یای همزه دار (Yeh Hamza)', unicode: 'U+0626', category: 'persian_alpha' },
  { char: 'ؤ', name: 'واو همزه دار (Waw Hamza)', unicode: 'U+0624', category: 'persian_alpha' },

  // Diacritics / Harakat
  { char: 'َ', name: 'فتحه / زَبَر (Fatha)', unicode: 'U+064E', category: 'diacritics' },
  { char: 'ِ', name: 'کسره / زیر (Kasra)', unicode: 'U+0650', category: 'diacritics' },
  { char: 'ُ', name: 'ضمه / پیش (Damma)', unicode: 'U+064F', category: 'diacritics' },
  { char: 'ً', name: 'تنوین نصب (Fathatan)', unicode: 'U+064B', category: 'diacritics' },
  { char: 'ٍ', name: 'تنوین جر (Kasratan)', unicode: 'U+064D', category: 'diacritics' },
  { char: 'ٌ', name: 'تنوین رفع (Dammatan)', unicode: 'U+064C', category: 'diacritics' },
  { char: 'ّ', name: 'تشدید (Shadda)', unicode: 'U+0651', category: 'diacritics' },
  { char: 'ْ', name: 'سکون (Sukun)', unicode: 'U+0652', category: 'diacritics' },

  // Punctuation
  { char: '،', name: 'ویرگول فارسی (Comma)', unicode: 'U+060C', category: 'punctuation' },
  { char: '؛', name: 'نقطه ویرگول (Semicolon)', unicode: 'U+061B', category: 'punctuation' },
  { char: '؟', name: 'علامت سؤال فارسی (Question)', unicode: 'U+061F', category: 'punctuation' },
  { char: '«', name: 'گیومه باز (Left Guillemet)', unicode: 'U+00AB', category: 'punctuation' },
  { char: '»', name: 'گیومه بسته (Right Guillemet)', unicode: 'U+00BB', category: 'punctuation' },
  { char: '٪', name: 'درصد فارسی (Percent)', unicode: 'U+066A', category: 'punctuation' },
  { char: '﷼', name: 'نماد ریال (Rial Sign)', unicode: 'U+FDFC', category: 'punctuation' },
  { char: 'ـ', name: 'کشیده / تطویل (Tatweel)', unicode: 'U+0640', category: 'punctuation' },
];
