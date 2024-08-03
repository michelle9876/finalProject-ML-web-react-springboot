import { useState, EventHandler, ReactNode } from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
  <div className="w-[701px] flex flex-row items-center justify-start gap-4 py-4 px-6 bg-[#f7f9fc]">
    <div className="flex-1 flex flex-col items-start justify-center gap-1">
      <div className="w-[304px] text-sm leading-[18px] tracking-[.01em] text-[#79819a]">{description}</div>
      <div className="w-[161px] text-base leading-5 font-bold text-[#2e2e48]">{title}</div>
    </div>
    <div className="text-xl leading-4 tracking-[.01em] font-bold text-[#47516b] whitespace-nowrap">{value}</div>
  </div>
)

const Detail = ({ onClose, businessType, commercialArea, correlations, recentFactors }) => {
  const factorColors = ["bg-[#618dff]", "bg-[#97b4ff]", "bg-[#c3d4ff]", "bg-[#e5ecff]", "bg-[#f5f7ff]"];

  const factors = correlations.slice(0, 5).map((correlation, index) => ({
    bg: factorColors[index],
    text: correlation.factorKor.replace('_', '\n')
  }));

  const statusItems = correlations.slice(0, 5).map(correlation => {
    const factorKor = correlation.factorKor;
    const value = recentFactors["20234"] ? recentFactors["20234"][factorKor] : "데이터 없음";
    return {
      description: correlation.correlationCoefficient >= 0 ? "많을수록 좋아요" : "적을수록 좋아요",
      title: factorKor.replace('_', ' '),
      value: value.toLocaleString() // 숫자 포맷팅
    };
  });

  return (
    <div className="flex flex-col items-center justify-start bg-white border border-solid border-[#b9b9b9] rounded-[14px] overflow-hidden">
      <div className="scroll-container overflow-y-scroll max-h-[80vh] w-full">
        <div className="sticky top-0 z-10 bg-white w-full flex justify-between items-center p-4">
          <div className="flex-1 text-3xl leading-[30px] font-black text-[#1d1c1d] truncate pr-4">
            {businessType} - {commercialArea} Report
          </div>
          <CloseButton className="shrink-0" onClick={onClose} />
        </div>
        <div className="w-full max-w-[802px] px-4 md:px-0">
          <div className="self-stretch flex flex-row items-start justify-center gap-8 pt-5 px-0 pb-0">
            <div className="self-stretch flex flex-col items-center justify-start">
              <TimelineDot src="/misc/dot.png" />
              <img width="1" height="185" src="/Divider304_12206.png" alt="Divider" />
            </div>
            <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
              <div className="text-2xl leading-[33px] tracking-[.01em] font-medium text-[#2e2e48] whitespace-nowrap">{businessType}의 주요 매출요인</div>
              <div className="flex flex-row items-center justify-start gap-[13px]">
                {factors.map((factor, index) => (
                  <FactorItem key={index} bg={factor.bg}>{factor.text}</FactorItem>
                ))}
              </div>
              <div className="text-[19px] leading-[33px] tracking-[.01em] text-[#79819a] whitespace-nowrap">총 5개 요인에 영향을 많이 받아요</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[33px] pt-5 px-0 pb-0">
            <div className="self-stretch flex flex-col items-center justify-start">
              <TimelineDot src="/misc/dot.png" />
              <div className="relative w-[1px] flex-1 overflow-hidden">
                <div className="absolute inset-0 border-r-2 border-solid border-[#e2e6ee]"></div>
              </div>
            </div>
            <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
              <div className="text-2xl leading-[33px] tracking-[.01em] font-medium text-[#2e2e48] whitespace-nowrap">{commercialArea} 현황</div>
              {statusItems.map((item, index) => (
                <StatusItem key={index} {...item} />
              ))}
              <div className="text-xl leading-[121.28%] text-[#79819a] whitespace-nowrap">종합적으로 우수한 위치에요</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DetailModal = ({ isOpen, onClose, data, correlations, recentFactors }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-hidden p-4">
      <div className="w-full max-w-[841px] bg-white rounded-[14px] shadow-lg relative">
        <Detail 
          onClose={onClose}
          businessType={data.serviceType}
          commercialArea={data.businessDistrict}
          correlations={correlations}
          recentFactors={recentFactors}
        />
      </div>
    </div>
  )
}

export default DetailModal