<?
require('db.php');

$res=db_select("select * from users where type=2");
while ($row=mysql_fetch_array($res)){
	if (($row[img]=='')||(!file_exists('photo/'.$row[img]))){
		$img='./img/no-avatar.jpg';
		$size='100% 100%';
	} else {
		$img='http://devpl.net/photo/'.$row[img];
		$size='cover';
	}
	
	$info[]=array("x1"=>$row[x1], "y1"=>$row[y1], "img"=>$img, "size"=>$size, "name"=>$row[Own_name], "id"=>$row[id]);
}

echo json_encode($info);
?>