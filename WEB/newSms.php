<?
require('db.php');

$user=$_POST[uset_from];

$res=db_select("select id from message where user_from='$user' and status=1");
$z=mysql_num_rows($res);
if ($z==''){
	$z=0;
} 

echo $z;