import React from 'react';
import './holiday.css';

const Header = ({ category, location, recommendedDay }) => (
  <div className="header w-full sm:w-[768px] lg:w-[768px]">
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-1">
        <div className="text-xs lg:text-sm text-[#47516b]">{category}</div>
        <div className="flex items-center gap-1">
          <img className="w-3 h-3 lg:w-4 lg:h-4" src="basic/location304_12566.png" alt="location" />
          <div className="text-xs lg:text-sm text-[#79819a]">{location}</div>
        </div>
      </div>
      <div className="flex gap-4">
        <img className="w-8 h-8 lg:w-10 lg:h-10" src="image 1304_12576.png" alt="icon" />
        <div className="flex flex-col gap-1">
          <div className="text-xs lg:text-sm text-[#79819a]">{`${location} ${category} 추천휴일`}</div>
          <div className="text-sm lg:text-base font-medium text-[#2e2e48]">{recommendedDay}</div>
        </div>
      </div>
    </div>
  </div>
);

const ChartSection = ({ title, hasData = true }) => (
  <div className="flex gap-4 sm:gap-8 pt-5">
    <div className="flex flex-col items-center">
      <div className="timeline-dot">
        <img className="m-1.5" width="20" height="20" src="misc/dot_04_l304_12204.png" alt="dot" />
      </div>
      <div className="timeline-line"></div>
    </div>
    <div className="w-full sm:w-[705px] flex flex-col gap-4 sm:gap-8 pb-6 sm:pb-12">
      <div className="text-lg sm:text-1xl font-medium text-[#2e2e48]">{title}</div>
      <div className="chart-container">
        <div className="chart-placeholder">
          {hasData ? (
            <div className="text-sm sm:text-base text-[#2e2e48]">여기에는 차트를 넣을 예정</div>
          ) : (
            <div className="text-sm sm:text-base text-[#79819a]">데이터가 없어요</div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Container = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 bg-white max-w-[852px]">
      <Header category="예술학원" location="강남개포시장" recommendedDay="월요일" />
      <ChartSection title="강남개포시장 예술학원 요일별 매출" hasData={true} />
      <ChartSection title="예술학원 전체상권 요일별 매출" hasData={false} />
      <ChartSection title="강남개포시장 전체상권 요일별 매출" hasData={false} />
    </div>
  );
};

export default Container;