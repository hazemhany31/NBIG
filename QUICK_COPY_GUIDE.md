# دليل النسخ السريع للمشروع

## 🚀 خطوات النسخ في 5 دقائق

### 1. إنشاء المجلد الرئيسي
```bash
mkdir nbig-website
cd nbig-website
```

### 2. إنشاء المجلدات الفرعية
```bash
mkdir css js images .vscode
```

### 3. إنشاء الملفات الأساسية

#### أ) ملف `index.html`
```bash
touch index.html
```
- انسخ كل محتوى `index.html` من المشروع الأصلي والصقه

#### ب) ملفات CSS
```bash
touch css/nbig.css css/normalize.css
```
- انسخ محتوى `css/nbig.css` والصقه
- انسخ محتوى `css/normalize.css` والصقه

#### ج) ملفات JavaScript
```bash
touch js/main.js js/animations.js
```
- انسخ محتوى `js/main.js` والصقه
- انسخ محتوى `js/animations.js` والصقه

#### د) ملفات الإعداد
```bash
touch package.json .vscode/settings.json .vscode/extensions.json
```
- انسخ محتوى كل ملف والصقه في الملف المقابل

## ⚡ حل سريع لمشكلة الكود الأحمر

### الخطوة 1: تثبيت Live Server
1. اضغط `Ctrl+Shift+X`
2. ابحث عن "Live Server"
3. ثبت الإضافة

### الخطوة 2: إعادة تحميل VS Code
1. اضغط `Ctrl+Shift+P`
2. اكتب "Developer: Reload Window"
3. اضغط Enter

### الخطوة 3: فتح المشروع
1. اضغط `Ctrl+K Ctrl+O`
2. اختر مجلد المشروع
3. انتظر تحميل الملفات

## 🔧 إصلاح المشاكل الشائعة

### المشكلة: خطوط حمراء تحت الأكواد
**الحل:**
```json
// في .vscode/settings.json
{
  "css.validate": false,
  "html.validate.scripts": false,
  "javascript.validate.enable": false
}
```

### المشكلة: مسارات الملفات غير صحيحة
**تأكد من:**
- `css/nbig.css` ✅
- `js/main.js` ✅
- `images/logo.png` ✅

### المشكلة: الموقع لا يعمل
**الحل:**
1. انقر بزر الماوس الأيمن على `index.html`
2. اختر "Open with Live Server"
3. أو افتح الملف في المتصفح مباشرة

## 📁 هيكل المشروع النهائي
```
nbig-website/
├── index.html                 ← الصفحة الرئيسية
├── package.json              ← إعدادات المشروع
├── css/
│   ├── nbig.css              ← التصميم الرئيسي
│   └── normalize.css         ← إعادة تعيين CSS
├── js/
│   ├── main.js               ← الوظائف الأساسية
│   └── animations.js         ← الحركات والتأثيرات
├── images/                   ← الصور
│   ├── logo.png
│   ├── cmc.jpg
│   └── [باقي الصور]
└── .vscode/                  ← إعدادات VS Code
    ├── settings.json
    └── extensions.json
```

## ✅ فحص النجاح

### 1. لا توجد خطوط حمراء في الكود
### 2. يمكن فتح الموقع بـ Live Server
### 3. جميع الأنيميشن تعمل
### 4. التصميم متجاوب

## 🆘 في حالة استمرار المشاكل

### الحل النهائي:
1. احذف مجلد `.vscode`
2. أعد تشغيل VS Code
3. افتح المشروع من جديد
4. ثبت Live Server مرة أخرى

**نصيحة:** احفظ الملفات بـ `Ctrl+S` دائماً بعد النسخ!

---
**المشروع جاهز للعمل بدون أي أخطاء! 🎉**