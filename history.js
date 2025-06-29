 // Data histori film dengan gambar
    const historiFilm = [
      { judul: "bolehkah aku menagis", gambar: "bolehkah aku menagis.jpeg" },
      { judul: "saptu bersama bapak", gambar: "saptu bersama bapak.jpeg" },
      { judul: "komang", gambar: "komang.jpeg" },
      { judul: "kang mak", gambar: "kang mak.jpeg" },
      { judul: "galaksi", gambar: "galaksi.jpeg" },
      { judul: "plankton_the_movie", gambar: "plankton the movie.jpeg" },
      { judul: "pinjam 100", gambar: "pinjam 100.jpeg" },
      { judul: "pixels", gambar: "pixels.jpeg" }
    ];

    const historiDiv = document.getElementById("histori");

    // Tampilkan setiap film
    historiFilm.forEach(film => {
      const container = document.createElement("div");

      // Gaya layout horizontal langsung dari JS
      container.style.display = "inline-block";
      container.style.textAlign = "center";
      container.style.margin = "10px";

      const img = document.createElement("img");
      img.src = film.gambar;
      img.alt = film.judul;
      img.width = 150;
      img.style.cursor = "pointer";

      // Klik gambar, arahkan ke halaman video (misalnya video.html?film=judul)
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
      historiDiv.appendChild(container);
    });