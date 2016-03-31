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
$result = $conn->query("SELECT * FROM Company_Dianping_Sentiment_Website where Website='".$Company_Website."' order by Dianping_Date;");
$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"x":"'  . (strtotime($rs["Dianping_Date"])*1000) . '",';
    $outp .= '"y":"'  . $rs["sentiment"] . '",';
    $outp .= '"z":"'  . $rs["I1"] . '",';
    $outp .= '"name":"'  . $rs["User_Name"] . '",';
    $string = str_replace('"', "", $rs["CommentFont"]);
    $string = str_replace("'", "", $string);
    $string = str_replace(',', "", $string);
    $string = str_replace(':', "", $string);
    $str=str_replace("'","",$string);
    $str=str_replace('"',"",$str);
    $str=str_replace("\n","",$str);
    $str=str_replace("<","",$str);
    $str=str_replace(">","",$str);
    $str=str_replace("\t","",$str);
    $str=str_replace("\r","",$str);
    $str=str_replace("/[\s\v]+/"," ",$str);
    $str= trim($str);
    $outp .= '"review":"'. $str    . '"}';
}
$dianping=$outp;
$outp ='{"dianping":['.$dianping.']}';
$conn->close();
echo($outp);}
?>
