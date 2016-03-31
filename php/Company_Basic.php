<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");

$conn = new mysqli("localhost", "root", "1234", "DataProduct");
if (!$conn)
  {
  die('Could not connect: ' . mysql_error());
  }
$conn->query("set character 'utf8';");
$conn->query("SET NAMES utf8");
$result = $conn->query("SELECT * FROM Company_Basic;");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Company":"'  . $rs["Company"] . '",';
    $outp .= '"AvgReturn":"'   . $rs["AvgReturn"]        . '",';
    $outp .= '"Website":"'   . $rs["Website"]        . '",';
    $outp .= '"ZiJinTuoGuan":"'   . $rs["ZiJinTuoGuan"]        . '",';
    $outp .= '"BaoZhangMoShi":"'   . $rs["BaoZhangMoShi"]        . '",';
    $outp .= '"ZiDongTouBiao":"'   . $rs["ZiDongTouBiao"]        . '",';
    $outp .= '"LiCaiChanPin":"'   . $rs["LiCaiChanPin"]        . '",';
    $outp .= '"Captial":"'   . $rs["Captial"]        . '",';
    $outp .= '"Area":"'. $rs["Area"]     . '"}'; 
}
$outp ='{"records":['.$outp.']}';
$conn->close();
echo($outp);
?>
