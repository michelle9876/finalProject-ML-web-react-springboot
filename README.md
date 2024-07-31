# :loudspeaker: 사장님 구해요 :convenience_store:
[home 이미지 삽입 예정]
- 배포URL : (url 삽입 예정)

## 목차

- [프로젝트 소개](#rocket-프로젝트-소개)
- [팀원구성](#crown-팀원구성)
- [개발 환경](#wrench-개발-환경)
- [채택한 개발 기술과 브랜치 전략](#bulb-채택한-개발-기술과-브랜치-전략)
- [역할분담](#pushpin-역할분담)
- [개발 기간 및 작업 관리](#calendar-개발-기간-및-작업-관리)
- [페이지별 기능](#calling-페이지별-기능)
- [트러블 슈팅](#collision-트러블-슈팅)
- [개선 목표](#magic_wand-개선-목표)
- [프로젝트가 끝난 후](#speech_balloon-프로젝트가-끝난-후)
- [산출물](#open_file_folder-산출물)

  
## :rocket: 프로젝트 소개

### 프로젝트 개요
이 프로젝트는 예비 창업자, 창업을 시작한지 얼마 안 된 사장님, 무직 청년 등 다양한 대상에게 필요한 데이터를 제공하고 업종과 상권을 추천하여 창업을 지원하는 것을 목표로 합니다. 
빅데이터 기반의 AI 및 머신러닝 모델을 활용하여, 데이터 분석과 시각화를 통해 인사이트를 도출하고, 이를 통해 의사결정을 돕는 솔루션을 제공합니다.

### **기능**
총 **4가지 서비스**를 제공합니다.     

:mag: **AI 맞춤추천** : 사용자로부터 개업을 원하는 업종과 상권, 임대료 및 면적을 선택 받습니다. 선택된 옵션 내에서 최상의 매출을 낼 수 있을 것으로 예상되는 지역/업종 조합 순위를 머신러닝을 통해 도출해줍니다. 최적의 조합 랭킹 중 하나의 선택지를 클릭할 시 보고서 형식의 자세한 정보가 제공됩니다.

:round_pushpin: **랭킹 in 지도** : 사용자가 개업을 원하는 업종을 중복선택하면, 최적의 매출을 낼 수 있는 상권을 업종별로 1위부터 5위까지 지도상에 표시해줍니다.  

:thought_balloon: **내 생각 확인하기** : 사용자가 매출액을 고려할 때 설정한 가정이 맞는지 확인해주는 서비스입니다. 상관계수를 토대로 해당 가정의 통계적 유의미성 여부를 판별해줍니다.   

:date: **휴일 추천** : 매장 운영을 시작한지 얼마 안 된 초보 사장님께 휴일을 추천해주는 서비스입니다. 사용자가 운영 중인 업장의 업종과 상권을 선택하면, 해당 옵션에 해당하는 데이터들을 기반으로 요일별 매출액 그래프를 제공하여 매출액이 평균적으로 가장 낮은 요일을 휴무일로 추천해주는 서비스입니다.     

### [ Needs ]
- **예비 창업자 및 초보 사장님**     
필요성: 창업과 운영에 필요한 AI 기반의 정교한 데이터 및 리소스 필요     
혜택: 업종 및 상권 결정에 필요한 데이터 제공을 통해 성공적인 사업 운영 지원   
- **무직 청년들**    
필요성: 창업 준비와 관련된 교육 및 정보 제공    
혜택: 창업 초기 진입 장벽을 낮추고 성공 가능성을 높이는 지원   
- **지자체**    
필요성: 지역 활성화를 위한 데이터 제공 및 상권 불균형 원인 분석 필요   
혜택: 상권 불균형 문제 해결 및 지역 경제 활성화를 위한 솔루션 제공   
- **프랜차이즈 본사**    
필요성: 적절한 입지 선정과 상권 분석을 통한 가맹점 확장 전략 필요    
혜택: 데이터를 기반으로 한 최적의 매장 입지 추천 및 효율적인 가맹점 운영 전략 수립 지원   

### [ Approach ]
- **빅데이터 기반 AI 및 머신러닝 모델 활용**: 방대한 데이터를 수집하고 분석하여 이해하기 쉬운 그래프와 지도 형태로 시각화
- **데이터 분석을 통한 인사이트 도출**: 사용자 맞춤형 정보 제공을 통해 최적의 의사결정을 돕는 도구 제공

### [ Benefits ]
- **시장 조사 비용 및 시간 절감**: 빠르고 정확한 데이터 제공으로 효율적인 시장 조사 가능
- **매출 향상 및 문제 해결**: 데이터를 기반으로 한 분석을 통해 매출에 영향을 미치는 주요 요인 파악 및 해결

### [ Competition ]
- **타 경쟁 업체와의 차별화**: 통계적으로 유의미한 데이터를 기반으로 개인화된 맞춤형 서비스 제공 가능
- **대표적인 경쟁업체**: 상권 분석 서비스 (서울상권정보, 오픈업)

## :crown: 팀원구성
| 김보경 | 최은서 | 윤소영 | 정제윤 |
|:-:|:-:|:-:|:-:|
|<img src="https://avatars.githubusercontent.com/u/50590112?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/127280706?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/161932948?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/163943897?v=4" width="150" height="150"/>|
|[@michelle9876](https://github.com/michelle9876)|[@dmschoi](https://github.com/dmschoi)|[@Soyeong124](https://github.com/Soyeong124)|[@JeongJeaYoon](https://github.com/JeongJeaYoon)|



## :wrench: 개발 환경 
- Front :
- Back-end :
- 버전 및 이슈 관리 : Github, Jira
- 협업 툴 : Notion, Slack
- 서비스 배포 환경 : 
- 디자인 : Figma

## :bulb: 채택한 개발 기술과 브랜치 전략

### SpringBoot
- (상세설명)

### React
- (상세설명)

### Machine Learning
- (상세설명)

### 브랜치 전략
- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
  - main 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - develop 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - Feat 브랜치는 기능 단위로 독립적인 개발 환경을 구축하기 위한 목적으로 사용하고 merge 후 각 브랜치를 삭제했습니다.

## :link: 프로젝트 구조

```

│  FpMlWebApplication.java
│  
├─config
│      SpringDocsConfig.java
│      SwaggerConfiguration.java
│      WebConfig.java
│      
├─controller
│      CheckYourThoughtsController.java
│      FilterSelectionController.java
│      HelloController.java
│      HolidayController.java
│      HomeController.java
│      IndustryCorrelationController.java
│      PredictionController.java
│      RankingController.java
│      RankMapController.java
│      RecentDataController.java
│      UserController.java
│      UserSelectionController.java
│      UserSelectionDetailController.java
│      
├─data
│  ├─converter
│  │      JsonLongListConverter.java
│  │      
│  ├─dao
│  │  │  UserDao.java
│  │  │  
│  │  └─impl
│  │          UserDaoImpl.java
│  │          
│  ├─dto
│  │      CheckYourThoughtsRequest.java
│  │      FactorRequestDto.java
│  │      FilterSelectionDto.java
│  │      HolidayRecommendationResponse.java
│  │      PredictionResponseDto.java
│  │      RankMapRequest.java
│  │      UserSelectionDto.java
│  │      
│  ├─entity
│  │      CheckingThought.java
│  │      DistrictWeeklySales.java
│  │      District_category.java
│  │      FilterSelection.java
│  │      InduDistWeeklySales.java
│  │      InduDistWeeklySalesId.java
│  │      IndustryCorrelation.java
│  │      IndustryCorrelationRanking.java
│  │      IndustryDistrictWgs84.java
│  │      IndustryWeeklySales.java
│  │      Ranking.java
│  │      RecentData.java
│  │      ReportAI.java
│  │      ResultHoliday.java
│  │      ResultPrediction.java
│  │      ResultThought.java
│  │      SelectionForHoliday.java
│  │      SelectionForMap.java
│  │      Service_industry.java
│  │      ShowingMap.java
│  │      User.java
│  │      UserSelection.java
│  │      UserSelectionDetail.java
│  │      UserTest.java
│  │      WeeklySalesData.java
│  │      
│  └─repository
│          CheckingThoughtRepository.java
│          DistrictCategoryRepository.java
│          DistrictWeeklySalesRepository.java
│          FilterSelectionRepository.java
│          InduDistWeeklySalesRepository.java
│          IndustryCorrelationRankingRepository.java
│          IndustryCorrelationRepository.java
│          IndustryDistrictWgs84Repository.java
│          IndustryWeeklySalesRepository.java
│          RankingRepository.java
│          RecentDataRepository.java
│          ResultHolidayRepository.java
│          ResultPredictionRepository.java
│          SelectionForHolidayRepository.java
│          SelectionForMapRepository.java
│          ServiceIndustryRepository.java
│          UserRepository.java
│          UserSelectionDetailRepository.java
│          UserSelectionRepository.java
│          WeeklySalesDataRepository.java
│          
└─service
    │  CheckingThoughtService.java
    │  CommercialArea.java
    │  FilterSelectionService.java
    │  HolidayService.java
    │  IndustryCorrelationRankingService.java
    │  IndustryCorrelationService.java
    │  PredictionService.java
    │  RankingService.java
    │  RankMapService.java
    │  RecentDataService.java
    │  UserSelectionDetailService.java
    │  UserSelectionService.java
    │  UserService.java
    │  
    └─impl
            HolidayServiceImpl.java
            UserService.java
            UserServiceImpl.java
            
```



## :pushpin: 역할분담

- 김보경 : backend
- 최은서 : backend
- 윤소영 : frontend
- 정제윤 : frontend

## :calendar: 개발 기간 및 작업 관리
### 개발기간
- 전체 개발 기간 : 2024.06.21 - 2024.08.09
- 기획 및 UI 구현 :
- 모델 개발 :
- 기능 구현 :

### 작업 관리
- GitHub과 Jira를 활용해 진행상황을 공유했습니다.
- 공유 중인 Notion 페이지를 통해 코드 및 기능의 상세 내용을 기록했습니다.

## :calling: 페이지별 기능


## :collision: 트러블 슈팅

## :magic_wand: 개선 목표

## :speech_balloon: 프로젝트가 끝난 후
(각자 후기 작성)

### 김보경

### 최은서

### 윤소영

### 정제윤

## :open_file_folder: 산출물

