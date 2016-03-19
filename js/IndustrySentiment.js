     var postive = [1,2,3,5,6,4,6,4,4,5,3,7];
     var negative = [1,2,3,5,6,4,6,4,4,5,3,7];
     $(function () { 
        $('#IndustrySentiment').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '2015年P2P行业的情感变化'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

            },
            yAxis: {
                title: {
                    text: '行业的情感比例'
                }
            },
            series: [{
                name: 'Postive',
                data: postive
            }, {
                name: 'Negative',
                data: negative
            }]
        });
    });
