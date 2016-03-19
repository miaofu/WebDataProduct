     var tmp=10;
     $(function () { 
        $('#IndustryKeyword').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '2015年行业的主题比例数量'
            },
            xAxis: {
                categories: ['Topic1', 'Topic2', 'Topic3']
            },
            yAxis: {
                title: {
                    text: '主题数量'
                }
            },
            series: [ {
                name: '主题',
                data: [5, 7, 3]
            }]
        });
    });
