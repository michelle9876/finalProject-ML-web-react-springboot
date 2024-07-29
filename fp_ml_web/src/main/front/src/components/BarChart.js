import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ data, type, days }) => {
  const isDataEmpty = data.every(value => value === 0);
  if (isDataEmpty) {
    return (
      <div style={{
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f9fc',
        borderRadius: '8px',
        fontSize: '16px',
        color: '#79819a'
      }}>
        데이터가 없습니다
      </div>
    );
  }

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
        },
        height: '300px'
    },
    title: {
      text: null // 타이틀 제거
    },
    // subtitle: {
    //     text: '', // 분석 텍스트 제거
    //     align: 'left',
    //     style: {
    //       fontSize: '14px',
    //       color: '#666'
    //     }
    // },
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