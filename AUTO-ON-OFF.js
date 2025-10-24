// AUTO ON-OFF BY TIME
  <script>
    function klikTombol(idTombol) {
        document.getElementById(idTombol).click();
        document.getElementById("pesan").innerHTML += `Tombol '${idTombol}' diklik pada ${new Date().toLocaleTimeString()}.<br>`;
    }
    function Waktu() {
        const sekarang = new Date();
        const jam = sekarang.getHours();
        const menit = sekarang.getMinutes();
        const detik = sekarang.getSeconds();
        // TIME OFF
        if (jam === 12 && menit === 00 && detik === 00) {
            if (!localStorage.getItem('tombol_1')) {
                klikTombol('btn8');
                localStorage.setItem('tombol_1', 'true');}}
             else {localStorage.removeItem('tombol_1');}
        if (jam === 12 && menit === 00 && detik === 00) {
            if (!localStorage.getItem('tombol_2')) {
                klikTombol('btn16');
                localStorage.setItem('tombol_2', 'true');}}
            else {localStorage.removeItem('tombol_2');}

        // TIME ON
        if (jam === 12 && menit === 01 && detik === 00) {
            if (!localStorage.getItem('tombol_1')) {
                klikTombol('btn8');
                localStorage.setItem('tombol_1', 'true');}}
             else {localStorage.removeItem('tombol_1');}
        if (jam === 12 && menit === 00 && detik === 10) {
            if (!localStorage.getItem('tombol_2')) {
                klikTombol('btn16');
                localStorage.setItem('tombol_2', 'true');}}
            else {localStorage.removeItem('tombol_2');}}
    setInterval(Waktu, 1000);
    document.getElementById('btn8').addEventListener('click', function() {
         alert('Tombol 1 berhasil diklik!');});
    document.getElementById('btn16').addEventListener('click', function() {
         alert('Tombol 2 berhasil diklik!');});
  </script>
