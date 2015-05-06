<?php
$data = $_POST;
// if ((($_FILES["file"]["type"] == "image/gif")
//      || ($_FILES["file"]["type"] == "image/jpeg")
//      || ($_FILES["file"]["type"] == "image/pjpeg"))
//     && ($_FILES["file"]["size"] < 20000)){
//     if ($_FILES["file"]["error"] > 0){
//         echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
//     }else{
//         if (file_exists("uploads/" . $_FILES["file"]["name"])){
//             echo $_FILES["file"]["name"] . " already exists. ";
//         }else{
//             move_uploaded_file($_FILES["file"]["tmp_name"],
//                                "uploads/" . $_FILES["file"]["name"]);
//         }
//     }
// }

$page = time().rand(1000,9999);
mkdir("pages/".$page, 0777);
copy("templates/base/page.xml", "pages/".$page."/page.xml");
copy("templates/base/index.html", "pages/".$page."/index.html");
copy("templates/base/page.css", "pages/".$page."/page.css");
copy("templates/base/page.js", "pages/".$page."/page.js");
$xml = new DOMDocument();
$xml->load("pages/".$page."/page.xml");
$title = $xml->getElementsByTagName("title");
$title->item(0)->nodeValue = $data['content'];
echo $title->item(0)->nodeValue;
$xml->save("pages/".$page."/page.xml");

header('Location: step3.html');
die();