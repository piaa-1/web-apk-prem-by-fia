// Fungsi untuk cek stok (dummy function untuk contoh)
function cekStok(app) {
    alert("Cek stok untuk " + app + " sedang diproses!");
}

// Fungsi untuk beli (mengarahkan ke WhatsApp)
function beli(app) {
    const waNumber = "62881023831017"; // Ganti dengan nomor WhatsApp yang sesuai
    const message = `Halo, saya ingin membeli aplikasi ${app}!`;
    const waUrl = `https://wa.me/$0881023831017?text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, "_blank");
}