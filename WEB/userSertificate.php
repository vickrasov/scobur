<?
require('db.php');

$a1=$_POST[z1];

$res=db_select("select * from users where login='$a1'");
$row=mysql_fetch_array($res);
$ser=explode(',', $row[Certification]);
foreach ($ser as $val){
	if (file_exists('sertificat/'.$val)){
	?>
	<a href="http://devpl.net/sertificat/<?= $val ?>" data-role="download"><div class="one_us" style="background:url(http://devpl.net/sertificat/<?= $val ?>);background-size:cover;background-position:center top">
	</div></a>
	<?
	}
}