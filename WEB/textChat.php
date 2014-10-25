<?
require('db.php');

$user_to=$_POST[uset_to];
$user_from=$_POST[user_from];
$text=addslashes($_POST[text]);
$srt=$_POST[srt];

$res=db_select("select login from users where id='$user_from'");
$row=mysql_fetch_array($res);
$user_from=$row[0];

$res=db_select("insert into message (user_to, user_from, data, status, text, srt) values ('$user_to', '$user_from', NOW(), '1', '$text', '$srt')");
?>