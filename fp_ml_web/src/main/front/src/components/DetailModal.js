import { useState, EventHandler, ReactNode } from 'react'

const Detail = () => {
	return (<div className="relative w-[841px] flex flex-col items-center justify-start bg-[#fff] border-[1px] border-solid border-[#b9b9b9] rounded-[14px] overflow-hidden">
  <div className="relative self-stretch h-[70px] shrink-0">
    <div className="absolute right-[20px] top-[17px] w-[36px] h-[36px]">
      <img className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" width="20" height="20" src="Icon / close times close crossI1104_1220;653_639.png"></img>
    </div>
    <div className="absolute left-[36px] right-[116px] top-[17px] h-[36px] text-[30px] leading-[30px] font-['Lato'] font-black text-[#1d1c1d] flex flex-col justify-center">대치역 양식음식점 Report</div>
  </div>
  <div className="w-[802px] h-[775px] shrink-0 flex flex-col items-start justify-start">
    <div className="self-stretch flex flex-row items-start justify-center gap-[32px] pt-[20px] px-0 pb-0">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[33px] h-[33px] shrink-0 bg-[#fff] rounded-[204px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="20" height="20" src="misc/dot_04_l1103_656.png"></img>
        </div>
        <img width="1" height="185" src="Divider1103_658.png"></img>
      </div>
      <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
        <div className="text-[24px] leading-[33px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] whitespace-nowrap">양식음식점은</div>
        <div className="flex flex-row items-center justify-start gap-[13px]">
          <div className="w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] bg-[#618dff] rounded-[10px]">
            <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">20대 여성<br/>상주인구</div>
          </div>
          <div className="w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] bg-[#97b4ff] rounded-[10px]">
            <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">30대 여성<br/>거리인구</div>
          </div>
          <div className="w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] bg-[#c3d4ff] rounded-[10px]">
            <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">버스 정류장 수</div>
          </div>
          <div className="w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] bg-[#e5ecff] rounded-[10px]">
            <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">약국 수</div>
          </div>
          <div className="w-[130px] shrink-0 flex flex-row items-center justify-center py-[26px] px-[2px] bg-[#f5f7ff] rounded-[10px]">
            <div className="w-[99px] h-[50px] text-[17px] leading-[120%] font-['Inter'] text-[#2e2e48] text-center flex flex-col justify-center">한식 음식점 수</div>
          </div>
        </div>
        <div className="text-[19px] leading-[33px] tracking-[.01em] font-['Outfit'] text-[#79819a] whitespace-nowrap">총 5개 요인에 영향을 많이 받아요</div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-center gap-[33px] pt-[20px] px-0 pb-0">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[33px] h-[33px] shrink-0 bg-[#fff] rounded-[204px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="20" height="20" src="misc/dot_04_l1103_865.png"></img>
        </div>
        <div className="relative w-[1px] flex-1 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 border-[2px] border-solid border-[#e2e6ee]"></div>
        </div>
      </div>
      <div className="w-[705px] shrink-0 flex flex-col items-start justify-start gap-[10px] pt-0 px-0 pb-[30px]">
        <div className="text-[24px] leading-[33px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] whitespace-nowrap">대치역 현황</div>
        <div className="w-[701px] flex flex-row items-center justify-start gap-[16px] py-[16px] px-[24px] bg-[#f7f9fc]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
            <div className="w-[304px] text-[14px] leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">적을수록 좋아요</div>
            <div className="w-[161px] text-[16px] leading-[20px] font-['DM_Sans'] font-bold text-[#2e2e48]">20대 여성 상주인구</div>
          </div>
          <div className="text-[20px] leading-[16px] tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">1000,000</div>
        </div>
        <div className="w-[701px] flex flex-row items-center justify-start gap-[16px] py-[16px] px-[24px] bg-[#f7f9fc]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
            <div className="w-[304px] text-[14px] leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">많을수록 좋아요</div>
            <div className="w-[161px] text-[16px] leading-[20px] font-['DM_Sans'] font-bold text-[#2e2e48]">30대 여성 거리인구</div>
          </div>
          <div className="text-[20px] leading-[16px] tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">1000,000</div>
        </div>
        <div className="w-[701px] flex flex-row items-center justify-start gap-[16px] py-[16px] px-[24px] bg-[#f7f9fc]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
            <div className="w-[304px] text-[14px] leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">적을수록 좋아요</div>
            <div className="w-[161px] text-[17px] leading-[120%] font-['Inter'] font-bold text-[#2e2e48]">버스 정류장 수</div>
          </div>
          <div className="text-[20px] leading-[16px] tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">1000,000</div>
        </div>
        <div className="w-[701px] flex flex-row items-center justify-start gap-[16px] py-[16px] px-[24px] bg-[#f7f9fc]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
            <div className="w-[304px] text-[14px] leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">적을수록 좋아요</div>
            <div className="w-[161px] text-[17px] leading-[120%] font-['Inter'] font-bold text-[#2e2e48]">약국 수</div>
          </div>
          <div className="text-[20px] leading-[16px] tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">1000,000</div>
        </div>
        <div className="w-[701px] flex flex-row items-center justify-start gap-[16px] py-[16px] px-[24px] bg-[#f7f9fc]">
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
            <div className="w-[304px] text-[14px] leading-[18px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">적을수록 좋아요</div>
            <div className="w-[161px] text-[17px] leading-[120%] font-['Inter'] font-bold text-[#2e2e48]">한식 음식점 수</div>
          </div>
          <div className="text-[20px] leading-[16px] tracking-[.01em] font-['DM_Sans'] font-bold text-[#47516b] whitespace-nowrap">1000,000</div>
        </div>
        <div className="text-[20px] leading-[121.28%] font-['Inter'] text-[#79819a] whitespace-nowrap">종합적으로 우수한 위치에요</div>
      </div>
    </div>
  </div>
  <div className="absolute right-[20px] top-[19px] w-[36px] h-[36px] shrink-0">
    <img className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" width="20" height="20" src="Icon / close times close crossI1103_637;653_639.png"></img>
  </div>
</div>)
}

export default Detail