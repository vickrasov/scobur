<?
require('db.php');

$user_to=$_POST[uset_to];
$user_from=$_POST[user_from];

$res=db_select("select login from users where id='$user_from'");
$row=mysql_fetch_array($res);
$user_from=$row[0];

$res=db_select("select * from message where (user_to='$user_from' and user_from='$user_to') or (user_to='$user_to' and user_from='$user_from') order by data");
while ($row=mysql_fetch_array($res)){
	if ($row[user_to]==$user_to){
		$dialog="_to";
		$pin="_orang";
	} else {
		$dialog="_from";
		$pin="_grey";
	}
	
	if (($row[status]==1)&&($row[user_from]==$user_to)){
		$public=1;
	} else {
		$public=0;
	}
	
	$sms[]=array("text"=>$row[text], "data"=>date("H:i", strtotime($row[data])), "type"=>$dialog, "pin"=>$pin, "pub"=>$public, "srt"=>$row[srt]);
	
	$res2=db_select("update message set status=2 where user_to='$user_from' and user_from='$user_to' and id='$row[id]'");
}

echo json_encode($sms);