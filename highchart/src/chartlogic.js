Highcharts.chart('container1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sample population. January, 2020'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Age Group'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y}years'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}years</b> of total<br/>'
    },

    series: [
        {
            name: "Bio-data",
            colorByPoint: true,
            data: [
                {
                    name: "Ime Ekwere",
                    y: 22,
                    drilldown: "A"
                },
                {
                    name: "Owen Johnson",
                    y: 67,
                    drilldown: "O"
                },
                {
                    name: "Jane doe",
                    y: 18,
                    drilldown: "B"
                },
                {
                    name: "Julius Agu",
                    y: 56,
                    drilldown: "AB"
                },
                {
                    name: "Abubarkar Davinci",
                    y: 22,
                    drilldown: "A"
                },
                {
                    name: "Emmed Ntui",
                    y: 22,
                    drilldown: "B"
                },
                {
                    name: "Samuel David 23",
                    y: 23,
                    drilldown: "O"
                }
            ]
        }
    ]
        
    }
);

export default Highcharts