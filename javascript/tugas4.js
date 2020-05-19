var siswa1 = 161;
var siswa2 = 162;
var siswa3 = 163;

if (siswa1<siswa2) {
  if (siswa2<siswa3) {
    console.log("siswa3");
    console.log(siswa3);
    console.log("siswa2");
    console.log(siswa2);
    console.log("siswa1");
    console.log(siswa1);
  }
  else if(siswa1<siswa3) {
    console.log("siswa2");
    console.log(siswa2);
    console.log("siswa3");
    console.log(siswa3);
    console.log("siswa1");
    console.log(siswa1);
  }
  else {
    console.log("siswa2");
    console.log(siswa2);
    console.log("siswa1");
    console.log(siswa1);
    console.log("siswa3");
    console.log(siswa3);
  }
}
else {
  if (siswa2>siswa3) {
    console.log("siswa1");
    console.log(siswa1);
    console.log("siswa2");
    console.log(siswa2);
    console.log("siswa3");
    console.log(siswa3);
  }
  else if(siswa1<siswa3) {
    console.log("siswa3");
    console.log(siswa3);
    console.log("siswa1");
    console.log(siswa1);
    console.log("siswa2");
    console.log(siswa2);
  }
  else {
    console.log("siswa1");
    console.log(siswa1);
    console.log("siswa3");
    console.log(siswa3);
    console.log("siswa2");
    console.log(siswa2);
  }
}
