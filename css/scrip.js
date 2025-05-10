<script>
  // Ganti semua icon feather
  feather.replace();

  // Fungsi alert ketika tombol "Beranda" diklik
  function showAlert() {
    alert("Silakan pilih kostum Hanfu yang ingin Anda sewa.");
  }

  // Fungsi alert ketika tombol sewa diklik
  function order(item) {
    alert("Anda memilih menyewa: " + item + "\nHubungi kami untuk proses pemesanan.");
  }

  // Toggle menu saat hamburger diklik
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
</script>
