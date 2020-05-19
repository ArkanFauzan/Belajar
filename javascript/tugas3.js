function reverse(input){
  var pemisahan = input.split("");
  var reverse = pemisahan.reverse();
  var penggabungan = reverse.join("");

  console.log(input);
  return penggabungan;
}
var tes=reverse("makan");//menampilkan "makan" karena perintah di dalam function adalah console.log
                         //sedangkan nilai penggabungan (nakam) akan di return dan dimasukkan ke variabel tes
console.log(reverse("mandi"));//akan menampilkan keduanya (mandi dan idnam)
console.log(tes);//akan menampilkan "nakam" karena yang disimpan pada baris ke-9 adalah nilai yang di return, yakni kata yang terbalik

//return akan menyimpan sememtara yg kemudian bisa dimanfaatkan untuk dimasukkan ke variabel
//pemanggilan fungsi secara langsung yang hasilnya di return tidak akan langsung ditampilkan
//nilai return dapat ditampilkan jika dimasukkan ke variabel, yang kemudian menampilkan nilai variabel tersebut

//sedikit masukan, bagi saya penjelasan tentang return di niomic agak kurang jelas. tim niomic pasti mengerti apa yang saya katakan
//mungkin bisa lebih dijelaskan secara detil apa itu return
//kalau saya sih cukup menguasai php mysql dasar jadi sudah cukup mengerti kegunaan return
