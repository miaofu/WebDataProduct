     var tmp=10;
     $(function () { 
        $('#IndustryKeyword').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'My first Highcharts chart'
            },
            xAxis: {
                categories: ['my', 'first', 'chart']
            },
            yAxis: {
                title: {
                    text: 'something'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 3, tmp]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    });