import React from 'react';
import { useState, EventHandler, ReactNode } from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Situation from './Situation';
import CountUp from 'react-countup';
import Sales from './Sales';

// CloseButton 컴포넌트 수정
const CloseButton = ({ className, onClick }) => (
  <IconButton
    aria-label="close"
    onClick={onClick}
    className={`${className}`}
    sx={{
      color: (theme) => theme.palette.grey[500],
    }}
  >
    <CloseIcon />
  </IconButton>
);

const TimelineDot = ({ src }) => (
  <div className="relative w-[33px] h-[33px] shrink-0 bg-white rounded-[204px] overflow-hidden">
    <div className="absolute inset-0 bg-white"></div>
    <img className="absolute inset-[18.75%]" width="20" height="20" src={src} alt="Dot" />
  </div>
)

const FactorItem = ({ bg, children }) => (
  <div className={`w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] ${bg} rounded-[10px]`}>
    <div className="w-[99px] h-[50px] text-[17px] leading-[120%] text-[#2e2e48] text-center flex flex-col justify-center">{children}</div>
  </div>
)

const StatusItem = ({ description, title, value }) => (
  <div className="w-full sm:w-[701px] flex flex-col sm:flex-row items-start sm:items-center justify-start gap-2 sm:gap-4 py-4 px-6 bg-[#f7f9fc]">
    <div className="flex-1 flex flex-col items-start justify-center gap-1 w-full sm:w-auto">
      <div className="w-full sm:w-[304px] text-sm leading-[18px] tracking-[.01em] text-[#79819a]">{description}</div>
      <div className="w-full sm:w-[161px] text-base leading-5 font-bold text-[#2e2e48]">{title}</div>
    </div>
    <div className="text-xl leading-4 tracking-[.01em] font-bold text-[#47516b] whitespace-nowrap mt-2 sm:mt-0">{value}</div>
  </div>
)

const Detail = ({ onClose, businessType, commercialArea, correlations, recentFactors, sales, rent }) => {
  const factorColors = ["bg-[#618dff]", "bg-[#97b4ff]", "bg-[#c3d4ff]", "bg-[#e5ecff]", "bg-[#f5f7ff]"];

  const factors = correlations.filter(correlation => correlation.factorKor !== '점포당_당월_매출_금액')
  .slice(0, 5)
  .map((correlation, index) => ({
    bg: factorColors[index],
    text: correlation.factorKor.replace('_', '\n')
  }));

  // isRecentFactorsEmpty 계산 부분을 다음과 같이 변경
  const isRecentFactorsEmpty = Object.keys(recentFactors).length === 0;

  // 기간 포매팅 함수
  const formatPeriod = (period) => {
    const year = period.slice(0, 4);
    const quarter = period.slice(4);
    return `(${year}년 ${quarter}분기 기준)`;
  };

  // 가장 최신 기간 찾기
  const latestPeriod = Object.keys(recentFactors).reduce((a, b) => (a > b ? a : b), '');

  const statusItems = correlations.filter(correlation => correlation.factorKor !== '점포당_당월_매출_금액')
  .slice(0, 5)
  .map(correlation => {
    const factorKor = correlation.factorKor;
    let value = "데이터 없음";
    if (recentFactors[latestPeriod] && recentFactors[latestPeriod][factorKor] !== undefined) {
      value = recentFactors[latestPeriod][factorKor].toLocaleString();
    }
    return {
      description: correlation.correlationCoefficient >= 0 ? "많을수록 좋아요" : "적을수록 좋아요",
      title: factorKor.replace(/_/g, ' '),
      value: value
    };
  });

  // chartData 수정
  const chartData = Object.entries(recentFactors).map(([period, values]) => ({
    name: period,
    '점포당_당월_매출_금액': values['점포당_당월_매출_금액'] ? values['점포당_당월_매출_금액'] / 30000 : undefined,
    ...Object.fromEntries(
      Object.entries(values).filter(([key]) => key !== '점포당_당월_매출_금액')
    )
  }));


  // factorKeys 수정 (점포당_당월_매출_금액을 맨 앞에 추가)
  const factorKeys = ['점포당_당월_매출_금액', ...correlations.filter(correlation => correlation.factorKor !== '점포당_당월_매출_금액')
    .slice(0, 5)
    .map(correlation => correlation.factorKor)];

  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid border-[#b9b9b9] rounded-[14px] overflow-hidden">
      <div className="scroll-container overflow-y-scroll max-h-[80vh] w-full">
        <div className="sticky top-0 z-10 bg-white w-full flex justify-between items-center p-4">
          <div className="flex-1 text-2xl md:text-2xl sm:text-xl xs:text-lg leading-tight font-black text-[#1d1c1d] pr-4 break-words">
            {businessType} - {commercialArea}
            <span className="hidden sm:inline"> Report</span>
          </div>
            <CloseButton className="shrink-0" onClick={onClose} />
        </div>
        <div className="w-full max-w-[802px] px-4 md:px-0 mx-auto ">
          <Sales sales={sales} rent={rent} />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5">
            <div className="hidden sm:flex sm:flex-col items-center">
              <TimelineDot src="/misc/dot.png" />
              <div className="timeline-line"></div>
            </div>
            <div className="w-full sm:w-[705px] flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
              <div className="text-lg sm:text-xl font-medium text-[#2e2e48]">{businessType}의 주요 매출요인</div>
              <div className="flex flex-row items-center justify-start gap-[13px] flex-wrap">
                {factors.map((factor, index) => (
                  <FactorItem key={index} bg={factor.bg}>{factor.text}</FactorItem>
                ))}
              </div>
              <div className="text-sm text-[#79819a]">총 5개 요인에 영향을 많이 받아요</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-5">
            <div className="hidden sm:flex sm:flex-col items-center">
              <TimelineDot src="/misc/dot.png" />
              <div className="timeline-line"></div>
            </div>
            <div className="w-full sm:w-[705px] flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
              <div className="text-lg sm:text-xl font-medium text-[#2e2e48]">
                {commercialArea} 현황 {formatPeriod(latestPeriod)}
              </div>
              {statusItems.map((item, index) => (
                <StatusItem key={index} {...item} />
              ))}
              <div className="text-sm text-[#79819a]">종합적으로 우수한 위치에요</div>
            </div>
          </div>
          
          {!isRecentFactorsEmpty && (
            <>
              <Situation
                data={chartData}
                factorKeys={factorKeys}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const DetailModal = ({ isOpen, onClose, data, correlations, recentFactors }) => {
  if (!isOpen || !data) return null;

  // console.log("DetailModal data:", data);

  // 여기서 sales와 rent 데이터를 TableRowContent와 동일한 방식으로 처리
  const salesInTenThousand = Math.round(data.predictedSales / 30000);
  const rentInTenThousand = (data.rent / 10).toFixed(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden p-4">
      <div className="w-full max-w-[841px] bg-white rounded-[14px] shadow-lg relative">
        <Detail 
          onClose={onClose}
          businessType={data.serviceType}
          commercialArea={data.businessDistrict}
          correlations={correlations}
          recentFactors={recentFactors}
          sales={salesInTenThousand}  // 수정된 부분
          rent={rentInTenThousand}    // 수정된 부분
        />
      </div>
    </div>
  )
}

export default DetailModal