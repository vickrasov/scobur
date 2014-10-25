<?
require('db.php');

$a=$_POST[z1];

$res=db_select("delete from message where user_to='$a' or user_from='$a'");
?>