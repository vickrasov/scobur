<?
require('db.php');

$a1=$_POST[z1];

$res=db_select("select * from users where login='$a1'");
$row=mysql_fetch_array($res);
if ($row[img]==''){
	$img='none';
} else {
	$img=$row[img];
}
$info[]=array("img"=>$img, "name"=>$row[name], "area"=>$row[area], "phone"=>$row[phone], "other"=>$row[other], "type"=>$row[type], "Expertise"=>$row[Expertise], "Tagline"=>$row[Tagline], "Qualification"=>$row[Qualification], "Business_name"=>$row[Business_name], "Own_name"=>$row[Own_name], "Areas_covered"=>$row[Areas_covered], "Working_hours"=>$row[Working_hours], "GPS_radius"=>$row[GPS_radius], "Certification"=>$row[Certification]);

echo json_encode($info);