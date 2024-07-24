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
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    },
    subtitle: {
      text: generateAnalysisText(),
      style: {
        fontSize: '14px',
        color: '#666'
      }
    },
    xAxis: {
      categories: days,
      labels: {
        style: {
          fontSize: '12px'
        }
      }
    },
    yAxis: {
      title: {
        text: '매출 (원)',
        style: {
          fontSize: '14px'
        }
      },
      labels: {
        formatter: function() {
          return this.value.toLocaleString();
        },
        style: {
          fontSize: '12px'
        }
      }
    },
    series: [{
      name: '매출',
      data: data,
      color: getChartColor()
    }],
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          formatter: function() {
            return this.y.toLocaleString();
          },
          style: {
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#000000'
          }
        },
        borderRadius: 5
      }
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return `<b>${this.x}요일</b><br/>매출: ${this.y.toLocaleString()}원`;
      }
    }
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default BarChart;