/* notes.js — Auto-inject kotak info ikut nama fail */
(function() {
  var notes = {

    'barcode.html': {
      type: 'info',
      title: 'ℹ️ Cara Guna Penjana Barcode',
      html:
        '<p>Halaman ini menjana <b>3 jenis barcode</b>. Isi detail dalam kotak, barcode akan dijana secara automatik.</p>' +
        '<ul>' +
        '<li><b>🧾 Barcode Resit:</b> Masukkan nombor resit / transaksi → jana barcode untuk cetakan resit</li>' +
        '<li><b>🏷️ Price Tag (SKU):</b> Masukkan kod SKU &amp; harga → jana tag harga untuk display rak</li>' +
        '<li><b>🪪 ID Staff:</b> Masukkan nama &amp; ID staf → jana barcode untuk kad staf</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Barcode dijana serta-merta — tak perlu tekan butang. Tekan <b>Cetak</b> untuk simpan sebagai PDF atau print terus.</p>'
    },

    'ranking.html': {
      type: 'info',
      title: 'ℹ️ Cara Guna Extract Ranking Brand',
      html:
        '<p>Halaman ini mengekstrak ranking brand dari fail HQ. Ikut urutan ini:</p>' +
        '<ul>' +
        '<li><b>1. Pilih Mode:</b> <code>Individual</code> (satu brand) atau <code>Group</code> (kumpulan brand)</li>' +
        '<li><b>2. Pilih Department:</b> Pilih dept yang ingin dilihat (contoh: Fashion, Cosmetic, dll.)</li>' +
        '<li><b>3. Upload Fail Ranking:</b> Tekan butang upload dan pilih fail ranking dari HQ</li>' +
        '<li><b>4. Semak Hasil:</b> Ranking akan dipaparkan mengikut mode &amp; dept yang dipilih</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>⚠️ Penting:</b> Pilih mode &amp; dept <b>SEBELUM</b> upload fail supaya hasil tepat.</p>'
    },

    'stocktake.html': {
      type: 'info',
      title: 'ℹ️ Cara Guna Converter Stocktake',
      html:
        '<p>Halaman ini menukar fail stocktake mentah kepada <b>fail Excel</b> yang mudah dirujuk.</p>' +
        '<ul>' +
        '<li><b>1. Upload fail stocktake</b> yang anda terima (format asal)</li>' +
        '<li><b>2. Sistem auto-convert</b> — tunggu beberapa saat</li>' +
        '<li><b>3. Muat turun fail Excel</b> yang telah disusun kemas</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Semak hasil sebelum guna untuk laporan rasmi. Fail asal tidak diubah.</p>'
    },

    'transaction.html': {
      type: 'info',
      title: 'ℹ️ Cara Guna Cari Transaction',
      html:
        '<p>Halaman ini membantu cari info transaksi dalam store melalui <b>2 bahagian</b>:</p>' +
        '<ul>' +
        '<li><b>📥 Bahagian 1 — Transaction:</b> Download fail <code>File TX</code> (BI file) dari sistem, kemudian upload di sini untuk cari detail transaksi</li>' +
        '<li><b>👤 Bahagian 2 — Cashier Listing:</b> Rekod nama cashier dengan lebih cepat — sesuai untuk semakan &amp; laporan</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Pastikan fail <code>File TX</code> yang betul dari hari yang sama untuk hasil tepat.</p>'
    },

    'member.html': {
    type: 'info',
      title: 'ℹ️ Cara Guna Cari Transaction',
      html:
        '<p>Halaman ini membantu cari info transaksi dalam store melalui <b>2 bahagian</b>:</p>' +
        '<ul>' +
        '<li><b>📥 Bahagian 1 — Transaction:</b> Download fail <code>File TX</code> (BI file) dari sistem, kemudian upload di sini untuk cari detail transaksi</li>' +
        '<li><b>👤 Bahagian 2 — Cashier Listing:</b> Rekod nama cashier dengan lebih cepat — sesuai untuk semakan &amp; laporan</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Pastikan fail <code>File TX</code> yang betul dari hari yang sama untuk hasil tepat.</p>'
    },
   
    '7step.html': {
      type: 'tip',
      title: '💡 Modul Parkson 7 Step',
      html:
        '<p>Halaman rujukan <b>Modul Parkson 7 Step</b> — panduan langkah demi langkah untuk operasi standard Parkson.</p>' +
        '<ul>' +
        '<li>Baca setiap step dari <b>Step 1 hingga Step 7</b></li>' +
        '<li>Guna sebagai rujukan semasa training staf baharu</li>' +
        '<li>Sesuai dibuka semasa briefing pagi atau audit dalaman</li>' +
        '</ul>'
    },

    'kehadiran.html': {
      type: 'info',
      title: 'ℹ️ Cara Guna Jadual Kehadiran & Grooming',
      html:
        '<p>Halaman ini untuk buat <b>jadual bulanan</b> kehadiran staf dan <b>grooming checklist</b>.</p>' +
        '<ul>' +
        '<li><b>Jadual Kehadiran:</b> Isi nama staf &amp; tanda kehadiran harian untuk sebulan</li>' +
        '<li><b>Grooming Checklist:</b> Semak item grooming (uniform, rambut, kasut, name tag, dll.)</li>' +
        '<li><b>Cetak / Simpan:</b> Tekan butang cetak untuk simpan sebagai PDF atau print untuk fail</li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Buat pada awal bulan supaya senang semak di akhir bulan.</p>'
    },

    'receipt.html': {
      type: 'warning',
      title: '⚠️ Cara Guna Tukar eJournal ke Resit',
      html:
        '<p>Halaman ini menukar <b>eJournal</b> kepada format <b>resit rasmi</b> yang hampir sama dengan resit asal.</p>' +
        '<ul>' +
        '<li><b>1. Copy</b> kandungan eJournal dari sistem</li>' +
        '<li><b>2. Paste</b> dalam kotak yang disediakan (boleh paste <b>beberapa resit</b> sekali gus)</li>' +
        '<li><b>3. Nama Cashier akan muncul auto jika nama dan id telah direkodkan ( tekan butang + )</b> boleh semak dulu sebelum print</li>' +
        '<li><b>4. Semak</b> semua detail — kemudian tekan <b>Print</b></li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>⚠️ Jangan skip nama cashier</b> — resit tanpa nama cashier tidak sah untuk rekod.</p>'
    },

    'reports.html': {
      type: 'info',
      title: 'ℹ️ Laporan (Reports)',
      html:
        '<p>Halaman ini sedang dalam pembangunan (<b>TBA</b>).</p>' +
        '<ul>' +
        '<li>Akan datang: laporan jualan, stok, dan prestasi staf</li>' +
        '<li>Sila hubungi admin jika perlukan laporan segera</li>' +
        '</ul>'
    },

    'drive.html': {
      type: 'tip',
      title: '💡 Cara Guna Transfer Fail (Device A → Device B)',
      html:
        '<p>Halaman ini untuk <b>pindah fail antara peranti</b> melalui browser — tak perlu kabel atau Bluetooth.</p>' +
        '<ul>' +
        '<li><b>📤 Di Device A (pengirim):</b> Buka link ini → upload fail yang ingin dipindahkan</li>' +
        '<li><b>📥 Di Device B (penerima):</b> Buka link yang <b>sama</b> → muat turun fail tadi</li>' +
        '<li>Kedua-dua peranti mesti buka <b>URL yang sama</b></li>' +
        '</ul>' +
        '<p style="margin-top:8px;"><b>Tip:</b> Sesuai untuk pindah fail besar dari telefon ke komputer. Pastikan sambungan internet stabil.</p>'
    }

    // Tambah halaman baharu di sini...
  };

  // ============================================
  // AUTO-INJECT (Cara 4 — tiada localStorage)
  // ============================================
  var path = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  var note = notes[path];
  if (!note) return;

  function inject() {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', inject);
      return;
    }
    // Elak suntik dua kali dalam satu page load
    if (document.querySelector('.info-box[data-auto]')) return;

    var box = document.createElement('div');
    box.className = 'info-box ' + (note.type || 'info');
    box.setAttribute('data-auto', '1');
    box.innerHTML =
      '<button class="close-btn" title="Tutup">✕</button>' +
      '<h4>' + note.title + '</h4>' +
      note.html;

    // Tutup untuk sesi ini sahaja — tiada localStorage
    box.querySelector('.close-btn').addEventListener('click', function() {
      box.remove();
    });

    document.body.insertBefore(box, document.body.firstChild);
  }

  inject();
})();
