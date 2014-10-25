<?
require('db.php');


$tp=$_POST[type];
$type=$_POST[z1];
$login=$_POST[z2];
$pass=md5($_POST[z3]);
$img=$_POST[z4];
$Expertise=$_POST[z5];
$Tagline=$_POST[z6];
$Business_name=$_POST[z7];
$Own_name=$_POST[z8];
$Areas_covered=$_POST[z9];
$Working_hours=$_POST[z10];
$Qualification=$_POST[z11];
$GPS_radius=$_POST[z12];
$Certification=implode(',', $_POST[z13]);

$res=db_select("select * from users where login='$login'");
$z=mysql_num_rows($res);
if ($z!=''){
	$log[]=array("status"=>0, "sms"=>"Login busy");
	echo json_encode($log);
	die();
}

if ($tp==1){
	$res=db_select("insert into users (type, login, pass, data, img, name, area, phone, other) values ('$type', '$login', '$pass', NOW(), '$img', '$Expertise', '$Tagline', '$Business_name', '$Own_name')");
} else {
	$res=db_select("insert into users (type, login, pass, data, img, Expertise, Tagline, Business_name, Own_name, Areas_covered, Working_hours, Qualification, GPS_radius, Certification) values ('$type', '$login', '$pass', NOW(), '$img', '$Expertise', '$Tagline', '$Business_name', '$Own_name', '$Areas_covered', '$Working_hours', '$Qualification', '$GPS_radius', '$Certification')");
}

$log[]=array("status"=>1, "sms"=>"You have successfully registered");

echo json_encode($log);