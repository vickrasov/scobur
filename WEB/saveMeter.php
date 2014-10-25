<?
require('db.php');

$a1=$_POST[z1];
$a2=$_POST[z2];

$res=db_select("update users set meter='$a1' where login='$a2'");
?>