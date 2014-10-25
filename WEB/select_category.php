<?
require('db.php');

$category=$_POST[z1];
$limit=$_POST[z2];
$x1=$_POST[z3];
$y1=$_POST[z4];

if ($limit=='no'){
	switch ($category){
		case 1:
			$um="and Expertise like '%BUILDER%'";
			break;
		case 2:
			$um="and Expertise like '%PLUMBER%'";
			break;
		case 3:
			$um="and Expertise like '%HANDY MAN%'";
			break;
		case 4:
			$um="and Expertise like '%PAINTER%'";
			break;
	}
} else {
	$um='';
	for ($i=0;$i<count($category);$i++){
		if ($i==0){
			switch ($category[$i]){
				case 1:
					$um.="and Expertise like '%BUILDER%'";
					break;
				case 2:
					$um.="and Expertise like '%PLUMBER%'";
					break;
				case 3:
					$um.="and Expertise like '%HANDY MAN%'";
					break;
				case 4:
					$um.="and Expertise like '%PAINTER%'";
					break;
			}
		} else {
			switch ($category[$i]){
				case 1:
					$um.=" or Expertise like '%BUILDER%'";
					break;
				case 2:
					$um.=" or Expertise like '%PLUMBER%'";
					break;
				case 3:
					$um.=" or Expertise like '%HANDY MAN%'";
					break;
				case 4:
					$um.=" or Expertise like '%PAINTER%'";
					break;
			}
		}
	}
}


//coords
$res=db_select("select * from users where type=2 $um order by data desc");
while ($row=mysql_fetch_array($res)){
	$user[]=array("x1"=>$row[x1], "y1"=>$row[y1], "id"=>$row[id]);
}

foreach ($user as $key){
	$url="http://maps.googleapis.com/maps/api/distancematrix/json?origins=".$key[x1].",".$key[y1]."&destinations=".$x1.",".$y1."&mode=driving&language=ru&sensor=false";
	//echo $url;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727)");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	$result = curl_exec($ch);
	curl_close($ch);
	$result=json_decode($result);
	if ($result->rows[0]->elements[0]->status=='OK'){
		$por[]=array("val"=>$result->rows[0]->elements[0]->distance->value, "id"=>$key[id]);
	} else {
		$por[]=array("val"=>0, "id"=>$key[id]);
	}
}

//print_r($por);

function cmp($a, $b) 
{
    if ($a[val] == $b[val]) {
        return 0;
    }
    return ($a[val] < $b[val]) ? -1 : 1;
}

usort($por, "cmp");

//print_r($por);

//die();

foreach ($por as $val){
	$res=db_select("select * from users where id='$val[id]'");
	$row=mysql_fetch_array($res);
	if (($row[img]=='')||(!file_exists('photo/'.$row[img]))){
		$img='./img/no-avatar.jpg';
		$size='100% 100%';
	} else {
		$img='http://devpl.net/photo/'.$row[img];
		$size='cover';
	}
	?>
	<a href="#" data-id="<?= $row[id] ?>" data-role="view_one_user"><div class="one_us" style="background:url(<?= $img ?>);background-size:<?= $size ?>;background-position:center top">
	</div></a>
	<?
}