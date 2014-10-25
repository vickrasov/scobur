<?
require('db.php');

$a1=$_POST[z1];

$res=db_select("select * from users where id='$a1'");
$row=mysql_fetch_array($res);

$info[]=array("Tagline"=>$row[Tagline], "Business_name"=>$row[Business_name], "Qualification"=>$row[Qualification], "Areas_covered"=>$row[Areas_covered], "Working_hours"=>$row[Working_hours], "Own_name"=>$row[Own_name], "Expertise"=>$row[Expertise], "img"=>$row[img]);

echo json_encode($info);
?>
