<?
require('db.php');

$user_to=$_POST[uset_to];
$user_from=$_POST[user_from];

$res=db_select("select login from users where id='$user_from'");
$row=mysql_fetch_array($res);
$user_from=$row[0];

$res=db_select("select * from message where (user_to='$user_to' and user_from='$user_from') or (user_to='$user_from' and user_from='$user_to') order by data");
while ($row=mysql_fetch_array($res)){
	$res2=db_select("update message set status=2 where user_to='$user_from' and user_from='$user_to'");
	switch ($row[status]){
		case 0:
			$status='';
			break;
		case 1:
			$status='<i class="fa fa-check fa-inverse"></i>';
			break;
		case 2:
			$status='<i class="fa fa-check fa-inverse"></i><i class="fa fa-check fa-inverse"></i>';
			break;
	}
	if ($row[user_to]==$user_to){
		$sms[]='<div class="dialog_to" data-srt="'.$row[srt].'">
			<span>'.$row[text].'</span>
			<span class="dataChat">'.date("H:i", strtotime($row[data])) .' '.$status.'</span>
			<img class="pin" src="./img/chat_orang.png">
		</div>';
	} else {
		$sms[]='<div class="dialog_from" data-srt="'.$row[srt].'">
			<span>'.$row[text].'</span>
			<span class="dataChat">'.date("H:i", strtotime($row[data])) .' '.$status .'</span>
			<img class="pin" src="./img/chat_grey.png">
		</div>';
	}
}

$res=db_select("select max(srt) from message where (user_to='$user_to' and user_from='$user_from') or (user_to='$user_from' and user_from='$user_to')");
$row=mysql_fetch_array($res);
$sms[]=$row[0]+1;

echo json_encode($sms);