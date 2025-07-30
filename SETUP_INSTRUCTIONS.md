# تعليمات إعداد مشروع NBIG Development

## الطريقة الأولى: نسخ الملفات مباشرة

### الخطوات:

1. **إنشاء مجلد جديد للمشروع:**
   ```bash
   mkdir nbig-project
   cd nbig-project
   ```

2. **إنشاء الهيكل الأساسي:**
   ```bash
   mkdir images css js
   ```

3. **نسخ الملفات واحد واحد:**
   - انسخ محتوى كل ملف من هنا والصقه في ملف جديد بنفس الاسم

### هيكل المشروع النهائي:
```
nbig-project/
├── index.html
├── css/
│   ├── nbig.css
│   ├── normalize.css
│   └── all.min.css
├── js/
│   ├── main.js
│   └── animations.js
├── images/
│   ├── logo.png
│   ├── cmc.jpg
│   ├── cmc 2.jpg
│   ├── cmcc.jpg
│   ├── zayedd.jpg
│   ├── lamarrrr.jpg
│   └── about us.jpg
└── [other HTML files]
```

## الطريقة الثانية: إصلاح مشاكل Visual Studio Code

### 1. تثبيت الإضافات المطلوبة:
- **Live Server**: للمعاينة المباشرة
- **HTML CSS Support**: لدعم HTML و CSS
- **JavaScript (ES6) code snippets**: لدعم JavaScript
- **Auto Rename Tag**: لتحرير HTML بسهولة
- **Prettier**: لتنسيق الكود

### 2. إعدادات VS Code (اختياري):
أنشئ ملف `.vscode/settings.json`:
```json
{
  "emmet.includeLanguages": {
    "javascript": "html"
  },
  "editor.formatOnSave": true,
  "html.autoClosingTags": true,
  "css.validate": true,
  "javascript.validate.enable": true,
  "liveServer.settings.donotShowInfoMsg": true
}
```

### 3. إصلاح مشاكل الكود الأحمر:

#### مشكلة: HTML غير صحيح
**الحل:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- المحتوى هنا -->
</body>
</html>
```

#### مشكلة: CSS غير مرتبط صحيح
**الحل:**
```html
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/nbig.css">
```

#### مشكلة: JavaScript غير مرتبط صحيح
**الحل:**
```html
<script src="js/main.js" defer></script>
<script src="js/animations.js" defer></script>
```

### 4. فحص المسارات:
تأكد أن جميع المسارات صحيحة:
- `images/logo.png` ✅
- `css/nbig.css` ✅  
- `js/main.js` ✅

## الطريقة الثالثة: استخدام Command Palette

1. اضغط `Ctrl+Shift+P` (أو `Cmd+Shift+P` على Mac)
2. اكتب "Developer: Reload Window"
3. اختر الخيار لإعادة تحميل النافذة

## حل مشاكل شائعة:

### ❌ مشكلة: "Cannot resolve module"
**الحل:**
```javascript
// بدلاً من:
import something from './module'

// استخدم:
const something = require('./module');
// أو
// <script src="./module.js"></script>
```

### ❌ مشكلة: CSS لا يظهر
**الحل:**
1. تأكد من المسار الصحيح
2. تأكد من عدم وجود أخطاء في CSS
3. تحقق من console في المتصفح

### ❌ مشكلة: JavaScript لا يعمل
**الحل:**
1. تأكد من وضع `defer` في script tags
2. تحقق من console للأخطاء
3. تأكد من ترتيب تحميل الملفات

## اختبار المشروع:

1. **افتح الملف:**
   - انقر بزر الماوس الأيمن على `index.html`
   - اختر "Open with Live Server"

2. **أو استخدم المتصفح مباشرة:**
   - اسحب ملف `index.html` إلى المتصفح

## نصائح مهمة:

✅ **تأكد من:**
- جميع الملفات في نفس المجلد الصحيح
- المسارات صحيحة (case-sensitive)
- لا توجد أحرف خاصة في أسماء الملفات
- الملفات محفوظة بـ UTF-8 encoding

✅ **إذا استمرت المشاكل:**
1. أعد تشغيل VS Code
2. احذف مجلد `.vscode` وأعد إنشاءه
3. تأكد من تحديث VS Code لآخر إصدار

**المشروع جاهز للعمل! 🚀**