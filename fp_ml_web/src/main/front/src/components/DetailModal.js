import { useState, EventHandler, ReactNode } from 'react'

const CloseButton = ({ className }) => (
  <div className={`absolute w-9 h-9 ${className}`}>
    <img className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" width="20" height="20" src="Icon / close times close crossI1104_1220;653_639.png" alt="Close" />
  </div>
)

const TimelineDot = ({ src }) => (
  <div className="relative w-[33px] h-[33px] shrink-0 bg-white rounded-[204px] overflow-hidden">
    <div className="absolute inset-0 bg-white"></div>
    <img className="absolute inset-[18.75%]" width="20" height="20" src={src} alt="Dot" />
  </div>
)

const FactorItem = ({ bg, children }) => (
  <div className={`w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] ${bg} rounded-[10px]`}>
    <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">{children}</div>
  </div>
)

const StatusItem = ({ description, title, value }) => (
  <div className="w-[701px] flex flex-row items-center justify-start gap-4 py-4 px-6 bg-[#f7f9fc]">
    <div className="flex-1 flex flex-col items-start justify-center gap-1">
      <div className="w-[304px] text-sm leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">{description}</div>
      <div className="w-[161px] text-base leading-5 font-['DM_Sans'] font-bold text-[#2e2e48]">{title}</div>
    </div>
    <div className="text-xl leading-4 tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">{value}</div>
  </div>
)

const Detail = ({ onClose, businessType, commercialArea }) => {
  const factors = [
    { bg: "bg-[#618dff]", text: "20대 여성\n상주인구" },
    { bg: "bg-[#97b4ff]", text: "30대 여성\n거리인구" },
    { bg: "bg-[#c3d4ff]", text: "버스 정류장 수" },
    { bg: "bg-[#e5ecff]", text: "약국 수" },
    { bg: "bg-[#f5f7ff]", text: "한식 음식점 수" },
  ]

  const statusItems = [
    { description: "적을수록 좋아요", title: "20대 여성 상주인구", value: "1000,000" },
    { description: "많을수록 좋아요", title: "30대 여성 거리인구", value: "1000,000" },
    { description: "적을수록 좋아요", title: "버스 정류장 수", value: "1000,000" },
    { description: "적을수록 좋아요", title: "약국 수", value: "1000,000" },
    { description: "적을수록 좋아요", title: "한식 음식점 수", value: "1000,000" },
  ]

  return (
    <div className="relative w-[841px] flex flex-col items-center justify-start bg-white border border-solid border-[#b9b9b9] rounded-[14px] overflow-hidden">
      <div className="relative self-stretch h-[70px] shrink-0">
        <CloseButton className="right-5 top-[17px]" onClick={onClose} />
        <div className="absolute left-9 right-[116px] top-[17px] h-9 text-3xl leading-[30px] font-['Lato'] font-black text-[#1d1c1d] flex flex-col justify-center">{businessType} - {commercialArea} Report</div>
      </div>
      <div className="w-[802px] h-[775px] shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-row items-start justify-center gap-8 pt-5 px-0 pb-0">
          <div className="self-stretch flex flex-col items-center justify-start">
            <TimelineDot src="misc/dot_04_l1103_656.png" />
            <img width="1" height="185" src="Divider1103_658.png" alt="Divider" />
          </div>
          <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
            <div className="text-2xl leading-[33px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] whitespace-nowrap">양식음식점은</div>
            <div className="flex flex-row items-center justify-start gap-[13px]">
              {factors.map((factor, index) => (
                <FactorItem key={index} bg={factor.bg}>{factor.text}</FactorItem>
              ))}
            </div>
            <div className="text-[19px] leading-[33px] tracking-[.01em] font-['Outfit'] text-[#79819a] whitespace-nowrap">총 5개 요인에 영향을 많이 받아요</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[33px] pt-5 px-0 pb-0">
          <div className="self-stretch flex flex-col items-center justify-start">
            <TimelineDot src="misc/dot_04_l1103_865.png" />
            <div className="relative w-[1px] flex-1 overflow-hidden">
              <div className="absolute inset-0 border-r-2 border-solid border-[#e2e6ee]"></div>
            </div>
          </div>
          <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
            <div className="text-2xl leading-[33px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] whitespace-nowrap">대치역 현황</div>
            {statusItems.map((item, index) => (
              <StatusItem key={index} {...item} />
            ))}
            <div className="text-xl leading-[121.28%] font-['Inter'] text-[#79819a] whitespace-nowrap">종합적으로 우수한 위치에요</div>
          </div>
        </div>
      </div>
      <CloseButton className="right-5 top-[19px]" />
    </div>
  )
}

const DetailModal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-auto">
      <Detail 
        onClose={onClose}
        businessType={data.businessType}
        commercialArea={data.commercialArea}
      />
    </div>
  )
}

export default DetailModal