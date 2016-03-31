    $(function () {
    $('#IndustryHot').highcharts({
        title: {
            text: '2015年月度p2p行业整体热度',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: 新浪，网易，凤凰，网易新闻',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '媒体报道数量'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'report number'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '新闻',
            data: [183, 135, 355, 627, 752, 786, 1191, 1117, 535, 371, 667, 1164]
        }, {
            name: '新浪新闻',
            data: [168, 112, 173, 158, 134, 177, 263, 352, 203, 178, 205, 347]
        }, {
            name: '凤凰新闻',
            data: [15, 22, 103, 257, 271, 204, 381, 321, 118, 91, 151, 228]
        }]
    });
});
