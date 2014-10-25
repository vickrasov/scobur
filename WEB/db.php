<?
 $db_connection;
 $db_options['host'] = 'localhost';
 $db_options['user'] = 'mysql_admin';
 $db_options['password'] = 'rhfrflsk123';
 $db_options['database'] = 'db_scobur';

function db_stat()
{
    return "Queries: ".$GLOBALS['query_count']." db_connections: ".$GLOBALS['conn_count'];
}

function db_connect()
{
     global $db_options;
     global $db_connection;

    $db_connection = mysql_connect($db_options['host'], $db_options['user'], $db_options['password'])
        or die("Невозможно подключится к MySQL.");
    mysql_select_db($db_options['database'], $db_connection)
        or die("Невозможно выбрать базу данных.");
    mysql_query("SET NAMES utf8", $db_connection);
    $GLOBALS['conn_count']++;
}

function db_select($sql)
 {
    global $db_connection;

     if(!$db_connection)
         {
             db_connect();
         }
     $GLOBALS['query_count']++;
     $result = mysql_query($sql, $db_connection) or die ("$sql");
       return $result;
 }


function clear($zip){
	$zip=str_replace("'", "&apos;", $zip);
	$zip=str_replace('"', '&quot;', $zip);
	$zip=strip_tags($zip);
	return $zip;
	
}

function dlina($text, $lenght){
	$text=strip_tags(htmlspecialchars_decode($text));
    $arr_str = explode(" ", $text);
	//берем первые 6 элементов
	$arr = array_slice($arr_str, 0, $lenght);
	//превращаем в строку
	$new_str = implode(" ", $arr);
	 
	// Если необходимо добавить многоточие
	if (count($arr_str) > 2) {
	   $new_str .= '...';
	} 
	return $new_str;
}
