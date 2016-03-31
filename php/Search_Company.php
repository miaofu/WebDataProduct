<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: text/html; charset=UTF-8");
$Company_Website=$_REQUEST['Company_Website'];
if (empty($Company_Website) ){
	echo "No State Sent";
}else{

$conn = new mysqli("localhost", "root", "1234", "DataProduct");
if (!$conn)
  {
  die('Could not connect: ' . mysql_error());
  }
$conn->query("set character 'utf8';");
$conn->query("SET NAMES utf8");
$result = $conn->query("SELECT * FROM Company_Basic where Website='".$Company_Website."';");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Company":"'  . $rs["Company"] . '",';
    $outp .= '"Website":"'   . $rs["Website"]        . '",';
    $outp .= '"FlowPerDay":"'   . $rs["FlowPerDay"]        . '",';
    $outp .= '"VisitorPerDay":"'. $rs["VisitorPerDay"]     . '",';
    $outp .= '"Captial":"'. $rs["Captial"]     . '",';
    $outp .= '"PagesPerPerson":"'. $rs["PagesPerPerson"]     . '",';
    $outp .= '"AvgReturn":"'. $rs["AvgReturn"]     . '",';
    $outp .= '"AREA":"'. $rs["Area"]     . '",';
    $outp .= '"OnlineDate":"'. $rs["OnlineDate"]     . '",';
    $outp .= '"LiCaiChanPin":"'. $rs["LiCaiChanPin"]     . '",';
    $outp .= '"ZhaiQuanZhuanRang":"'. $rs["ZhaiQuanZhuanRang"]     . '",';
    $outp .= '"ZiJinTuoGuan":"'. $rs["ZiJinTuoGuan"]     . '",';
    $outp .= '"BaoZhangMoShi":"'. $rs["BaoZhangMoShi"]     . '",';
    $outp .= '"ZiDongTouBiao":"'. $rs["ZiDongTouBiao"]     . '"}';
}
$basic = $outp;


$outp ='{"basic":['.$basic.']}';
$conn->close();
echo($outp);}
?>
