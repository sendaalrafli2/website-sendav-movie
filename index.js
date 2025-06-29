
// Efek ketik pada judul
const judul = document.querySelector("font");
const teks = judul.textContent.trim();
judul.textContent = "";
let i = 0;

function ketik() {
  if (i < teks.length) {
    judul.textContent += teks.charAt(i);
    i++;
    setTimeout(ketik, 100); // ketik huruf per 100ms
  }
}
ketik();

// Animasi gambar berputar saat diklik
const gambarMobil = document.querySelectorAll(".mobil-container img");

gambarMobil.forEach((img) => {
  img.addEventListener("click", () => {
    img.style.transition = "transform 1s ease-in-out";
    img.style.transform = "rotate(360deg)";

    // Reset rotasi agar bisa diputar lagi saat diklik ulang
    setTimeout(() => {
      img.style.transform = "rotate(0deg)";
    }, 1000);
  });
});
