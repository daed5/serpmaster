<?php

$ch = curl_init();

$data = [
  "scraper" => "google",
  "url" => "https://scholar.google.com/scholar?hl=en&q=einstein&btnG=&as_sdt=1%2C5&as_sdtp=",
  "device" => "desktop_chrome",
  "locale" => "en-us"
];

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_USERPWD, "acidpizza" . ":" . "5uPP3rm4N"); //your SERPMaster credentials
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_URL, "https://rt.serpmaster.com/");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
curl_close($ch);

$json = json_decode($response);

var_dump($json);
?>
