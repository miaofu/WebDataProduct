var app=angular.module('F1FeederApp', []);
app.controller('Company', function($scope, $http){

    $http.get("php/Company_Basic.php")
    .success(function (response) {$scope.Company_Basic = response.records;});

    

    $scope.showCompanyInfo = function(driver) {
          var item = driver;


          $http.get("php/Search_Company.php",{params:{Company_Website:item.Website}})
          .success(function (response) {
          	$scope.Company_INFO = response.basic;


            basicDIV = document.getElementById("CompanyBasic");
            basicDIV.innerHTML="";
            var table = document.createElement("table");
            var tbody = document.createElement("tbody");
            table.appendChild(tbody);
            var row1 =document.createElement("tr");
            tbody.appendChild(row1);
            var cell11 = document.createElement("td");
            var img = document.createElement("img");
            img.src = "angularjs/img/"+$scope.Company_INFO[0].Company+".png";
            img.style.width ="150px";
            img.style.height="130px";
            cell11.appendChild(img);
            row1.appendChild(cell11);
            var cell12 = document.createElement("td");
            var info =document.createElement("div");
            node1  = document.createElement("p");
            link1  = document.createElement("a");link1.innerHTML=("公司名："+$scope.Company_INFO[0].Company);
            link1.setAttribute("href",$scope.Company_INFO[0].Website);
            node1.appendChild(link1);
            node3  = document.createTextNode("日均流量:"+$scope.Company_INFO[0].FlowPerDay);
            node4  = document.createTextNode("; 日均访问人次:"+$scope.Company_INFO[0].VisitorPerDay);
            node5  = document.createTextNode("; 注册资金（万):"+$scope.Company_INFO[0].Captial);
            node6  = document.createTextNode("; 人均浏览网页数:"+$scope.Company_INFO[0].PagesPerPerson);
            node7  = document.createTextNode("; 平均收益:"+$scope.Company_INFO[0].AvgReturn);
            node8  = document.createTextNode("; 所在地区:"+$scope.Company_INFO[0].AREA);
            node9  = document.createTextNode("; 上线时间:"+$scope.Company_INFO[0].OnLineDate);
            node10  = document.createTextNode("; 债权转让:"+$scope.Company_INFO[0].ZhaiQuanZhuanRang);
            node11 = document.createTextNode("; 资金托管:"+$scope.Company_INFO[0].ZiJinTuoGuan);
            node12  = document.createTextNode("; 保障模式:"+$scope.Company_INFO[0].BaoZhangMoShi);
            node13  = document.createTextNode("; 自动投标:"+$scope.Company_INFO[0].ZiDongTouBiao);

            info.appendChild(node1);
            info.appendChild(node3);
            info.appendChild(node4);
            info.appendChild(node5);
            info.appendChild(node6);
            info.appendChild(node7);
            info.appendChild(node8);
            info.appendChild(node9);
            info.appendChild(node10);
            info.appendChild(node11);
            info.appendChild(node12);
            info.appendChild(node13);
            cell12.appendChild(info);
            row1.appendChild(cell12);
             
          

            basicDIV.appendChild(table);  


                    
            
          });

          
          $http.get("php/Search_Dianping.php",{params:{Company_Website:item.Website}})
          .success(function (response) {
            var dianping = JSON.parse(JSON.stringify(response.dianping));
            
            keywordDIV = document.getElementById("CompanyKeyword");
            keywordDIV.innerHTML="";
            
            d3plot("CompanyKeyword","data/CompanyKeyword.json");

            
            var pos =new Array();
            var neg =new Array();
            
            for(var i=0;i<dianping.length;i++){
                var ob={};
                ob.x= Number(dianping[i]["x"]);
                ob.y= Number(dianping[i]["y"]);
                ob.z=Math.random()*0.5;
                ob.name=dianping[i]["name"];
                var dateObj = new Date(ob.x);
                var UnixTimeToDate = dateObj.getUTCFullYear() + ' 年 ' + (dateObj.getUTCMonth() +1 ) + ' 月 ' + dateObj.getUTCDate() + ' 日 ' + dateObj.getUTCHours();
                ob.date = UnixTimeToDate;
                ob.review=dianping[i]["review"];
                if (ob.y<0.5){
                    neg.push(ob);
                }else{
                    pos.push(ob);
                }
                
            }
            CompanyBuble("CompanySeeDianping",pos,neg);
            
            sentimentpei("CompanySentiment",pos.length,neg.length); 
            }); 
         
    };
});



