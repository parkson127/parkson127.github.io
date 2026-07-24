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
    link.href = 'https://parkson127.github.io/all/';
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
