var teks1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
var teks2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
var teks3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

//menampilkan lower case dan upper case
console.log(teks1.toLowerCase());
console.log(teks1.toUpperCase());
console.log(teks2.toLowerCase());
console.log(teks2.toUpperCase());

//sebagai spasi
console.log();

//mencari nilai ASCII dari karakter pertama sampai ke-6
var ASCII=[];
for(var i=0;i<=5;i++){
  ASCII[i]= teks3.charCodeAt(i)+"---";
  if(i==5){
    ASCII[i]=teks3.charCodeAt(i);
  };
};
ASCII = ASCII.join("");

//menampilkan hasil karekter ASCII index pertama sampai ke-6
console.log(ASCII);
