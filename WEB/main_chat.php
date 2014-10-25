<?
require('db.php');

$user=$_POST[user];

$res=db_select("select distinct(user_from) from message where user_to='$user' order by data desc");
while ($row=mysql_fetch_array($res)){
	$abon[]=$row[0];
}

$res=db_select("select distinct(user_to) from message where user_from='$user' order by data desc");
while ($row=mysql_fetch_array($res)){
	$abon[]=$row[0];
}

$client=array_unique($abon);

foreach ($client as $login){
	$res=db_select("select * from message where user_to='$login' or user_from='$login' order by data desc limit 1");
	$row=mysql_fetch_array($res);	
	$res2=db_select("select * from users where login='$login'");
	$row2=mysql_fetch_array($res2);
	$img=$row2[img];
	$id=$row2[id];
	
	if (($img=='')||(!file_exists('photo/'.$img))){
		$img='./img/no-avatar.jpg';
	} else {
		$img='http://devpl.net/photo/'.$row2[img];
	}
	$info[]=array("img"=>$img, "data"=>date("l - H:i", strtotime($row[data])), "status"=>$row[status], "text"=>$row[text], "userChat"=>$id);
}

echo json_encode($info);