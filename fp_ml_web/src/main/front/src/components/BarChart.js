import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ title, data, type, days, recommendedDay, region, industry }) => {
    const generateAnalysisText = () => {
    const recommendedDayIndex = days.indexOf(recommendedDay.slice(0, 1));
    const recommendedDaySales = data[recommendedDayIndex];
    const sortedData = [...data].sort((a, b) => a - b);
    const rank = sortedData.indexOf(recommendedDaySales) + 1;

    switch (type) {
      case 'industry':
        return `${recommendedDay}은 ${region}의 ${industry} 기준 ${rank}번째로 매출이 적으며`;
      case 'allRegions':
        return `${recommendedDay}은 전체 ${industry} 기준 ${rank}번째로 매출이 적은날이에요`;
      case 'allIndustries':
        return `${recommendedDay}은 ${region}의 전체 업종 기준 ${rank}번째로 매출이 적은날이에요`;
      default:
        return '';
    }
  };

  const getChartColor = () => {
    switch (type) {
      case 'industry':
        return {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#003399'],
            [1, '#3366AA']
          ]
        };
      case 'allRegions':
        return {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#00A86B'],
            [1, '#32CD32']
          ]
        };
      case 'allIndustries':
        return {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#FF4500'],
            [1, '#FF6347']
          ]
        };
      default:
        return {
          linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
          stops: [
            [0, '#003399'],
            [1, '#3366AA']
          ]
        };
    }
  };

  const options = {
    chart: {
        type: 'column',
        style: {
            fontFamily: 'Arial, sans-serif'
        }
    },
    title: {
        text: title,
        align: 'left',
        style: {
            fontSize: '18px',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        text: generateAnalysisText(),
        align: 'left',
        style: {
            fontSize: '14px',
            color: '#666'
        }
    },
    xAxis: {
        categories: days,
        crosshair: true,
        labels: {
            style: {
                fontSize: '12px'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '매출 (만 원)',
            style: {
                fontSize: '14px'
            }
        },
        labels: {
            formatter: function() {
                return (this.value / 10000).toLocaleString();
            },
            style: {
                fontSize: '12px'
            }
        }
    },
    tooltip: {
        formatter: function() {
            return `<b>${this.x}요일</b><br/>${this.series.name}: ${this.y.toLocaleString()} 원`;
        }
    },
    // plotOptions: {
    //     column: {
    //         pointPadding: 0.2,
    //         borderWidth: 0,
    //         dataLabels: {
    //             enabled: true,
    //             formatter: function() {
    //                 return this.y.toLocaleString();
    //             },
    //             style: {
    //                 fontSize: '11px',
    //                 fontWeight: 'bold',
    //                 color: '#000000'
    //             }
    //         }
    //     }
    // },
    series: [{
        name: '매출',
        data: data,
        color: getChartColor()
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
};

return (
    <HighchartsReact highcharts={Highcharts} options={options} />
);
};

export default BarChart;