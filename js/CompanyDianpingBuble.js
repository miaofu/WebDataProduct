var CompanyBuble=function (container,postive,negative) {

    $('#'+container).highcharts({

        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },

        title: {
            text: '公司点评历史记录'
        },
       xAxis: {
             type: 'datetime',
             tickPixelInterval : 30,
             labels: {
                formatter: function(){
                    return Highcharts.dateFormat("%Y-%m-%d",this.value);

                }
             }
            
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="1">用户：<td>{point.name}</td></th></tr>' +
                '<tr><th>用户影响力:</th><td>{point.z}</td></tr>' +
                '<tr><th>评论时间:</th><td>{point.date}</td></tr>' +
                '<tr><th>评论情感:</th><td>{point.y}</td></tr>' +
                '<tr><th>评论具体内容:</th><td>{point.review}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        series: [{
            name: "postive",
            data: postive
        },
        {
            name: "negative",
            data: negative
        },
        ]
    
    });
    
};     