function tambahTransaksi(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const film = document.getElementById("film").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const hargaTiket = 50000;
  const total = jumlah * hargaTiket;

  const row = `<tr>
    <td>${nama}</td>
    <td>${film}</td>
    <td>${jumlah} tiket</td>
    <td>Rp ${total.toLocaleString('id-ID')}</td>
  </tr>`;

  document.getElementById("data-transaksi").innerHTML += row;
  event.target.reset();
}

 