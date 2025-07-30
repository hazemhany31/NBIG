// 1. Intersection Observer لتشغيل الأنيميشن عند دخول العناصر للشاشة (مرة واحدة فقط)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // إيقاف المراقبة بعد أول ظهور
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// تطبيق المراقب على العناصر التي تبدأ مخفية أو عليها أنيميشن
document.querySelectorAll(
    '.hidden, .feat, .srv, .special-heading'
).forEach(element => {
    if (element) observer.observe(element);
});

// 2. تأثير ظهور الـ landing عند تحميل الصفحة
window.addEventListener('load', () => {
    const landingSection = document.querySelector('.landing');
    if (landingSection) {
        landingSection.classList.add('loaded');
    }
    document.body.classList.add('loaded');
});

// 3. مراقب خاص لمشاريع البورتفوليو بحيث الأنيميشن تشتغل كلما ظهرت
const projectModerns = document.querySelectorAll('.project-modern');
if (projectModerns.length > 0) {
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer2.unobserve(entry.target); // إيقاف المراقبة بعد أول ظهور
            }
        });
    });
    projectModerns.forEach(el => observer2.observe(el));
}

// 4. سلاسة ظهور صور Vision Tower والمشاريع عند التحميل (fade-in)
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(
        '.main-project-img, .vision-hero-img img, .vision-img img, .section-img'
    ).forEach(img => {
        img.classList.add('visible');
    });
});