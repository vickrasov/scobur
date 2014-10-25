<?
require('db.php');

$login=$_POST[z1];
$pass=md5($_POST[z2]);

$res=db_select("select * from users where login='$login' and pass='$pass'");
$z=mysql_num_rows($res);
$row=mysql_fetch_array($res);

if ($z!=''){
	$info[]=array("status"=>1, "login"=>$login, "meter"=>$row[meter]);
	echo json_encode($info);
} else {
	$info[]=array("status"=>0, "sms"=>"Invalid username or password");
	echo json_encode($info);
}