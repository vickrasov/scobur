<?
$uploaddir = $_SERVER['DOCUMENT_ROOT'].'/sms/';
$ex=explode('.', $_FILES['file']['name']);
$ex=$ex[count($ex)-1];
$name=md5(date("Y-m-d H:i:s")).'.'.$ex;
$uploadfile = $uploaddir . $name;

if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
    $data[]=array("status"=>1, "img"=>$name);
} else {
    $data[]=array("status"=>0);
}


echo json_encode($data);