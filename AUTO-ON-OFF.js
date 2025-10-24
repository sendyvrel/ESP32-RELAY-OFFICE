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
        if (jam === 17 && menit === 00 && detik === 00) {
            if (!localStorage.getItem('tombol_1')) {
                klikTombol('btn5');
                localStorage.setItem('tombol_1', 'true');}}
             else {localStorage.removeItem('tombol_1');}
        if (jam === 17 && menit === 00 && detik === 00) {
            if (!localStorage.getItem('tombol_2')) {
                klikTombol('btn13');
                localStorage.setItem('tombol_2', 'true');}}
            else {localStorage.removeItem('tombol_2');}

        // TIME ON
        if (jam === 18 && menit === 00 && detik === 00) {
            if (!localStorage.getItem('tombol_1')) {
                klikTombol('btn5');
                localStorage.setItem('tombol_1', 'true');}}
             else {localStorage.removeItem('tombol_1');}
        if (jam === 18 && menit === 03 && detik === 00) {
            if (!localStorage.getItem('tombol_2')) {
                klikTombol('btn13');
                localStorage.setItem('tombol_2', 'true');}}
            else {localStorage.removeItem('tombol_2');}}
    setInterval(Waktu, 1000);
    document.getElementById('btn5').addEventListener('click', function() {
         alert('Tombol 1 berhasil diklik!');});
    document.getElementById('btn13').addEventListener('click', function() {
         alert('Tombol 2 berhasil diklik!');});
  </script>
