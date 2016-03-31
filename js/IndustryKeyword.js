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
                categories: ['Topic1(银行第三方，资金托管)', 'Topic2（司法，借贷责任）', 'Topic3（全国成交额）', 'Topic4（监管，非法集资）', 'Topic5（环比，上升）', 'Topic6（收益率，利息）', 'Topic7（平台担保问题）']
            },
            yAxis: {
                title: {
                    text: '主题数量'
                }
            },
            series: [ {
                name: '主题',
                data: [2345,1002 , 6031,3030,4304,900,421]
            }]
        });
    });
