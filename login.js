function validasiLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("error-login");

  if (!user || !pass) {
    error.textContent = "Username dan Password wajib diisi!";
    return false;
  }

  alert("Login berhasil!");
  return true;
}
