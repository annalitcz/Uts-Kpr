function hitung() {
  var hp = parseInt(document.getElementById("hp").value);
  var um = parseInt(document.getElementById("um").value);
  var bum = parseFloat(document.getElementById("bum").value);
  var jwp = parseInt(document.getElementById("jwp").value);

  var pinjaman = hp - um;
  var total_pinjaman = pinjaman + (bum / 100 * pinjaman * jwp);
  var cicilan_bulanan = total_pinjaman * jwp / 12;
  
  document.getElementById("hasil").innerHTML = "Rp. "+cicilan_bulanan;
}