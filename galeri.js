const video = document.getElementById("myvideo");

// Pastikan video diulang terus
video.addEventListener('ended', function () {
  video.currentTime = 0;
  video.play();
});

// Autoplay video (jika tidak jalan otomatis)
video.play();

// Data film
const filmList = [
  { judul: "bolehkah aku menangis", gambar: "bolehkah aku menagis.jpeg" },
  { judul: "saptu bersama bapak", gambar: "saptu bersama bapak.jpeg" },
  { judul: "komag", gambar: "komang.jpeg" },
  { judul: "kang mak", gambar: "kang mak.jpeg" },
  { judul: "galaksi", gambar: "galaksi.jpeg" },
  { judul: "plankton", gambar: "plankton_the_movie.jpeg" },
  { judul: "pinjam 100", gambar: "pinjam 100.jpeg" },
  { judul: "pixels", gambar: "pixels.jpeg" },
];

const galeriDiv = document.getElementById("galeri");

filmList.forEach(film => {
  const container = document.createElement("div");

  // Gaya langsung di JavaScript (tanpa CSS)
  container.style.display = "inline-block";
  container.style.textAlign = "center";
  container.style.margin = "10px";

  const img = document.createElement("img");
  img.src = film.gambar;
  img.alt = film.judul;
  img.width = 150;
  img.style.cursor = "pointer";

  // Saat gambar diklik, arahkan ke halaman sesuai nama file
  img.addEventListener("click", () => {
    const fileName = film.judul
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "") + ".html";

    window.location.href = fileName;
  });

  const caption = document.createElement("p");
  caption.innerText = film.judul;

  container.appendChild(img);
  container.appendChild(caption);
  galeriDiv.appendChild(container);
});
