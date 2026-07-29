// ================================================================
// COMMON.JS – FLOATING HOME BUTTON
// ================================================================

function addFloatingHome() {
    // Cegah duplikasi
    if (document.querySelector('.floating-home')) return;

    // Pastikan Font Awesome ada
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
        document.head.appendChild(link);
    }

    // Cipta butang
    const link = document.createElement('a');
    link.href = 'https://parkson127.github.io/';
    link.className = 'floating-home';
    link.title = 'Kembali ke Laman Utama';
    link.innerHTML = `
        <i class="fas fa-home"></i>
        <span class="tooltip">🏠 Laman Utama</span>
    `;
    document.body.appendChild(link);
}

// Jalankan selepas DOM siap
document.addEventListener('DOMContentLoaded', addFloatingHome);

// ============================================================
// 📊 GOOGLE ANALYTICS 4 (GA4) - Auto Tracking
// ============================================================
(function() {
    var measurementId = 'G-HP0GYX89TR';  // <-- ID ANDA

    // Muatkan script gtag.js
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);

    // Init dataLayer & fungsi gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // Hantar data pertama
    gtag('js', new Date());
    gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
    });

    console.log('✅ GA4 Tracking active: ' + measurementId);
})();
