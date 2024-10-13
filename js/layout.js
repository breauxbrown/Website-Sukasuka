// Script Jam Digital atau fitur lain yang sudah Anda miliki
// Pastikan Anda tidak menghapus fungsi yang sudah ada

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById('time').innerText = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateTime, 1000);
}

updateTime();

// Fitur Slideshow Otomatis dengan Animasi
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Menyembunyikan semua slide
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  // Kembali ke slide pertama
    slides[slideIndex - 1].style.display = "block";  // Menampilkan slide yang saat ini aktif
    setTimeout(showSlides, 3000);  // Ganti slide setiap 3 detik
}
