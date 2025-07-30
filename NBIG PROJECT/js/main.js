// 1. عرض رسالة نجاح بعد إرسال النموذج مع تأثير Fade (متوافق مع Google Sheet أو بدون)
const contactForm = document.querySelector('#contact-form');
const successMessage = document.getElementById('success-msg') || document.querySelector('.form-success');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
        // منع الإرسال الافتراضي فقط إذا لم يكن هناك action محدد
        if (!contactForm.action || contactForm.action === window.location.href) {
            e.preventDefault();
        }

        // إظهار رسالة النجاح
        successMessage.classList.add('visible');
        successMessage.style.display = 'inline';

        // إخفاء الرسالة بعد 5 ثوان
        setTimeout(() => {
            successMessage.classList.remove('visible');
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 300);
        }, 5000);

        // إعادة تعيين النموذج
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
}

// 2. تغيير لون الهيدر عند التمرير
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// 3. تشغيل قائمة الموبايل
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuToggle.setAttribute(
            'aria-expanded',
            navMenu.classList.contains('open') ? 'true' : 'false'
        );
    });
}

// 4. إغلاق القائمة عند الضغط على أي رابط
if (navMenu) {
    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
                if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// 5. التمرير السلس مع حساب ارتفاع الهيدر
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            const y = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// 6. زر الرجوع للأعلى (دائمًا يمين تحت)
let scrollToTopBtn = document.querySelector('.scroll-to-top');
if (!scrollToTopBtn) {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    // التحقق من وجود Font Awesome قبل استخدام الأيقونة
    const iconContent = document.querySelector('.fa-chevron-up') ? 
        '<i class="fas fa-chevron-up"></i>' : '↑';
    scrollToTopBtn.innerHTML = iconContent;
    document.body.appendChild(scrollToTopBtn);
}

function adaptScrollBtnPosition() {
    // دائماً يمين تحت سواء موبايل أو ديسكتوب
    scrollToTopBtn.style.right = '20px';
    scrollToTopBtn.style.left = '';
    scrollToTopBtn.style.bottom = '20px';
    scrollToTopBtn.style.transform = '';
    scrollToTopBtn.style.width = '40px';
    scrollToTopBtn.style.height = '40px';
    scrollToTopBtn.style.fontSize = '1.5em';
}

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const toggleScrollBtn = () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    };

    window.addEventListener('scroll', toggleScrollBtn);
    window.addEventListener('resize', adaptScrollBtnPosition);
    adaptScrollBtnPosition();
    toggleScrollBtn();
}

// 7. social bar responsive opacity
const socialBar = document.querySelector('.social-bar-simple');
function adaptSocialBar() {
    if (!socialBar) return;
    if (window.innerWidth <= 600) {
        // موبايل: أفقي تحت
        socialBar.style.position = "fixed";
        socialBar.style.top = "";
        socialBar.style.left = "50%";
        socialBar.style.bottom = "0";
        socialBar.style.transform = "translateX(-50%)";
        socialBar.style.flexDirection = "row";
        socialBar.style.padding = "7px 4px";
        socialBar.style.borderRadius = "15px 15px 0 0";
    } else {
        // ديسكتوب: جانبي
        socialBar.style.position = "fixed";
        socialBar.style.top = "50%";
        socialBar.style.left = "12px";
        socialBar.style.bottom = "";
        socialBar.style.transform = "translateY(-50%)";
        socialBar.style.flexDirection = "column";
        socialBar.style.padding = "13px 7px";
        socialBar.style.borderRadius = "9px";
    }
}
if (socialBar) {
    window.addEventListener('resize', adaptSocialBar);
    adaptSocialBar();

    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 600) {
            socialBar.style.opacity = window.scrollY > 60 ? '1' : '0.8';
        } else {
            socialBar.style.opacity = window.scrollY > 100 ? '1' : '0.7';
        }
    });
}
// Loader hide on page load
window.addEventListener('load', function() {
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    loader.classList.add('hide');
    setTimeout(() => {
      if (loader.parentNode) {
        loader.remove(); // إزالة من الـ DOM بعد الأنيميشن
      }
    }, 700);
  }
});

// Error handling for any uncaught JavaScript errors
window.addEventListener('error', function(event) {
  console.warn('JavaScript error caught:', event.error);
  // Hide loader if there's an error
  const loader = document.getElementById('loader-overlay');
  if (loader) {
    loader.classList.add('hide');
  }
});