import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CombinedChart = ({ industryData, allRegionsData, allIndustriesData, days }) => {
  const options = {
    chart: {
      type: 'column',
      height: '400px'
    },
    title: {
        text: null
    },
    xAxis: {
      categories: days,
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: '매출 (만 원)'
      },
      labels: {
        formatter: function() {
          return (this.value / 10000).toLocaleString();
        }
      }
    },
    tooltip: {
      shared: true,
      formatter: function() {
        let s = '<b>' + this.x + '요일</b><br/>';
        this.points.forEach(function(point) {
          s += point.series.name + ': ' + point.y.toLocaleString() + ' 원<br/>';
        });
        return s;
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: '선택한 업종 및 지역',
      data: industryData,
      color: '#003399'
    }, {
      name: '선택한 업종 전체 지역',
      data: allRegionsData,
      color: '#00A86B'
    }, {
      name: '선택한 지역 전체 업종',
      data: allIndustriesData,
      color: '#FF4500'
    }],

    // legend: {
    //     enabled: false
    // },
    credits: {
        enabled: false
    }
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CombinedChart;