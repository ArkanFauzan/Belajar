<?php
function curl_check($url,$data){
  //inisiasi
  $ch=curl_init();
  //set url
  curl_setopt($ch,CURLOPT_URL, $url);
  //set metode Post
  curl_setopt($ch,CURLOPT_CUSTOMREQUEST,"POST");
  //masukkan data address
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
  //set output string
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  //eksekusi
  $output=curl_exec($ch);
  //close curl
  curl_close($ch);
  return $output;
}

$url="https://faucetpay.io/api/v1/checkaddress";
$api_key="376d555544690e5249349c01efaa3d2c54b2bb81";
$address="13zwwiQWrko2wkZman39Zpfyzseumkwz53";
$currency="BTC";

$data= array(
      "api_key"=>$api_key,
      "address"=>$address,
      "currency"=>$currency,
);
$data=json_encode($data);
echo $data;

$curl_hasil=curl_check($url, $data);
echo "<pre>$curl_hasil</pre>";
?>
