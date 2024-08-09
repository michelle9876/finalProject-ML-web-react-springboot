import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ imageSrc, title, description, path }) => (
  <div className="w-full max-w-[213px] bg-white rounded-[4px] border-[1px] border-solid border-[#E8F0F5] flex flex-col items-start justify-start gap-3.5  p-[10px] bg-[#fff] rounded-[4px]">
    <img className="w-full h-auto" src={imageSrc} alt={title}></img>
    <h3 className="text-base leading-[26px] font-bold text-black">{title}</h3>
    <p className="h-[66px] text-sm leading-[22px] font-light text-[#676767]">{description}</p>
    <div className="w-full flex justify-end">
      <Link to={path} className="py-2.5 px-5 bg-[#0c78c7] text-sm font-medium text-white">
        시작하기
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* <TopNav /> */}
      {/* <div className="relative w-[1440px] flex flex-col items-center justify-start pt-[80px] px-0 pb-0 bg-[#fff]"></div> */}
      
      {/* Main Section */}
      <div className="relative w-full">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-[450px] bg-[#edf5ff]">
            <img className="w-full h-full object-cover" src="/home/image 39112_419.png" alt="배경 이미지"></img>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#191619] mb-4">
              지금 시작하세요, <br className="hidden md:inline"/>세상의 모든 사장님을 응원합니다
            </h1>
            <p className="text-sm md:text-base text-[#878787] max-w-lg mx-auto">
              Start now, we support all the bosses in the world.
            </p>
          </div>
          <Link to="/recommend" className="flex items-center justify-center gap-2 py-3 px-6 bg-[#0c78c7] text-white font-bold text-sm md:text-base">
            AI로 내 매출액 예측하기
            <img className="w-3 h-4" src="/home/arrow-back 1112_424.png" alt="화살표"></img>
          </Link>
          <img className="w-full max-w-4xl" src="/home/Mask group112_427.png" alt="그래프 이미지"></img>
        </div>
      </div>

      {/* Customers Section */}
      <div className="w-full py-12 px-4">
        <div className="container mx-auto flex flex-col items-center justify-start gap-8 md:gap-12">
          <div className="text-center">
            <div className="inline-block mb-2 py-1 px-3 bg-[#edf5ff] rounded-full">
              <span className="text-xs tracking-wider font-medium uppercase text-[#0c78c7]">Our Customers</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#000] pt-3">
              <span className="font-light">지금까지 </span>
              <span className="font-bold">10,000+ 고객사</span>
              <span className="font-light">가 함께했어요</span>
            </h2>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex items-center justify-center">
              <img className="max-w-full h-auto" src="/home/Group 7112_401.png" alt="고객사 로고들"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="relative w-full py-12 px-4 overflow-hidden">
        {/* Background div */}
        <div className="absolute left-0 bottom-0 w-full h-[345px] bg-[#edf5ff] z-0"></div>
        
        <div className="container mx-auto flex flex-col items-center justify-start gap-6 md:gap-12 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-2 py-1 px-3 bg-[#edf5ff] rounded-full ">
              <span className="text-xs tracking-wider font-medium uppercase text-[#0c78c7]">Service</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#000] pt-3">
              <span className="font-bold">사장님 구해요</span>
              <span className="font-light">만의 특별한 서비스</span>
            </h2>
          </div>
          <div className="w-full px-4 pt-6 pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
              <FeatureCard
                imageSrc="/home/Rectangle 45I112_532;111_163.png"
                title="AI 맞춤 추천"
                description="업종과 상권을 선택하세요, AI가 매출액을 예측해드려요"
                path="/recommend"
              />
              <FeatureCard
                imageSrc="/home/Rectangle 45I112_533;111_163.png"
                title="랭킹 in 지도"
                description="원하는 업종을 선택하세요, 지도로 한눈에 알려드려요"
                path="/rank"
              />
              <FeatureCard
                imageSrc="/home/Rectangle 45I112_534;111_163.png"
                title="확인하기"
                description="누구나 갖고 있는 나만의 가설! 지금 검증하세요"
                path="/check"
              />
              <FeatureCard
                imageSrc="/home/Rectangle 45I112_535;111_163.png"
                title="휴일추천"
                description="항상 고민되는 휴일 선정, 데이터를 통해 추천해드려요"
                path="/holiday"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#232323] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img className="h-10" src="/home/logo-white112_592.png" alt="Logo" />
            </div>
            {/* <div className="lg:col-start-3">
              <h3 className="text-[18px] font-bold mb-4">Menu</h3>
              <ul className="space-y-2 text-[14px] text-[#7c7c7c]">
                {['AI 맞춤 추천', '랭킹 in 지도', '확인하기', '휴일추천'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div> */}
            <div>
              <h3 className="text-[18px] font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-[14px] text-[#7c7c7c]">
                {['About Us', 'Careers', 'Team', 'Contact Us'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-[12px] text-[#9b9b9b]">
            Copyright 2024 사장님구해요. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;