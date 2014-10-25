<?
require('db.php');


$tp=$_POST[type];
$login=$_POST[user];
$img=$_POST[z1];
$Expertise=$_POST[z2];
$Tagline=$_POST[z3];
$Business_name=$_POST[z4];
$Own_name=$_POST[z5];
$Areas_covered=$_POST[z6];
$Working_hours=$_POST[z7];
$Qualification=$_POST[z8];
$GPS_radius=$_POST[z9];
$Certification=implode(',', $_POST[z10]);

if ($tp==1){
	$res=db_select("update users set img='$img', name='$Expertise', area='$Tagline', phone='$Business_name', other='$Own_name' where login='$login'");
} else {
	$res=db_select("update users set img='$img', Expertise='$Expertise', Tagline='$Tagline', Business_name='$Business_name', Own_name='$Own_name', Areas_covered='$Areas_covered', Working_hours='$Working_hours', Qualification='$Qualification', GPS_radius='$GPS_radius', Certification='$Certification' where login='$login'");
}

$log[]=array("status"=>1, "sms"=>"You have successfully save");

echo json_encode($log);