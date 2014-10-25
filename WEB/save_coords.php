<?
require('db.php');

$a1=$_POST[z1];
$a2=$_POST[z2];
$a3=$_POST[z3];

$res=db_select("update users set x1='$a1', x2='$a2' where login='$a3'");
?>