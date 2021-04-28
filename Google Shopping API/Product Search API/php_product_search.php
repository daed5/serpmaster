<?php

$ch = curl_init();

$data = [
  "scraper" => "google_shopping_search",
  "q" => "oneplus", //product id
  "domain" => "com",
  "parse" => "true",
  "device" => "desktop_chrome",
  "geo" => "Boston,Massachusetts,United States",
  "locale" => "en-us",
  "page" => "1",
  "nfpr" => "true"
];

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_USERPWD, "USERNAME" . ":" . "PASSWORD"); //your SERPMaster credentials
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_URL, "https://rt.serpmaster.com/");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
curl_close($ch);

$json = json_decode($response);

var_dump($json);
?>
