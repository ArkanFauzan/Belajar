function pendidikan() {
  var sekolah = {
    sd : "SDN 3 Depok",
    smp : "SMPN 4 Bogor",
    sma : "SMA 211 Jakarta",
  }
  console.log(sekolah);
  sekolah.smp = "SMPN 5 Kota Bogor";
  console.log(sekolah.sd);
  console.log(sekolah.smp);
  console.log(sekolah.sma);
}

pendidikan();
