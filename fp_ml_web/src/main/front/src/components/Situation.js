import React from 'react'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import styles from './Situation.less'

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe']

// 숫자 포맷 함수
const formatYAxis = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } 
  return value.toLocaleString();
};

function SituationChart({ data, dataKey, color, title }) {

  const calculateYAxisMax = (dataMax) => {
    // 1.2를 곱하고 10으로 나누어떨어지는 값으로 올림
    return Math.ceil(dataMax * 1.4 / 10) * 10;
  };
  return (
    <div className={styles.situation} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ left: 10, right: 10 }}>
          <XAxis
            dataKey="name"
            axisLine={{ stroke: '#e5e5e5', strokeWidth: 1 }}
            tickLine={false}
            height={60}
            tick={{
              angle: -45,  // 텍스트를 -45도 회전
              textAnchor: 'end',  // 텍스트 정렬 방식
              dy: 10,  // y 방향으로 10픽셀 이동
              fontSize: 14
            }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            domain={[0, 'auto']}  // 여기서 auto 값에 1.2를 곱합니다
            tickFormatter={formatYAxis}
            width={60}
            style={{ fontSize: '14px' }}  // 글꼴 크기를 조절합니다
          />
          <CartesianGrid
            vertical={false}
            stroke="#e5e5e5"
            strokeDasharray="3 3"
          />
          <Tooltip
            wrapperStyle={{
              border: 'none',
              boxShadow: '4px 4px 40px rgba(0, 0, 0, 0.05)',
            }}
            content={content => {
              const list = content.payload.map((item, key) => (
                <li key={key} className={styles.tipitem}>
                  <span
                    className={styles.radiusdot}
                    style={{ background: color }}
                  />
                  {`${item.name}: ${Number(item.value).toLocaleString()}`}
                </li>
              ))
              return (
                <div className={styles.tooltip}>
                  <p className={styles.tiptitle}>{content.label}</p>
                  {content.payload && <ul>{list}</ul>}
                </div>
              )
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            dot={{ fill: color }}
            activeDot={{ r: 5, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

function Situation({ data, factorKeys }) {
  return (
    <div>
      {factorKeys.map((factor, index) => (
        <ChartSection
          key={factor}
          title={factor.replace(/_/g, ' ')}
          chartComponent={
            <SituationChart
              data={data}
              dataKey={factor}
              color={colors[index % colors.length]}
            />
          }
          analysisText={`${factor.replace(/_/g, ' ')}의 추이를 나타내는 그래프입니다.`}
        />
      ))}
    </div>
  )
}

const ChartSection = ({ title, chartComponent, analysisText }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5">
    <div className="flex sm:flex-col items-center">
      <div className="timeline-dot hidden sm:block">
        <img className="m-1.5" width="20" height="20" src="/misc/dot.png" alt="dot" />
      </div>
      <div className="timeline-line hidden sm:block"></div>
    </div>
    <div className="w-full sm:w-[705px] flex flex-col items-start justify-start gap-[6px] pt-0 px-0 pb-[49px]">
      <div className="text-lg sm:text-xl font-medium text-[#2e2e48]">{title}</div>
      <div className="text-sm text-[#79819a]">{analysisText}</div>
      <div className="chart-container w-full" style={{ minHeight: '300px' }}>
        {chartComponent}
      </div>
    </div>
  </div>
);

Situation.propTypes = {
  data: PropTypes.array,
  factorKeys: PropTypes.array,
}

export default Situation