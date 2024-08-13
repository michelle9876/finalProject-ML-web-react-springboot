# :loudspeaker: 사장님 구해요 :convenience_store:
![image](https://github.com/user-attachments/assets/76f7b3de-09fa-4f20-a7b8-5ce3971d5789)

- 배포URL : http://13.125.214.231/
- 시연영상 : [https://youtu.be/JsON0VODjc8](https://youtu.be/_66WkqjPo3A)


## 목차

- [프로젝트 소개](#rocket-프로젝트-소개)
- [팀원구성](#crown-팀원구성)
- [개발 환경](#wrench-개발-환경)
- [채택한 개발 기술과 브랜치 전략](#bulb-채택한-개발-기술과-브랜치-전략)
- [프로젝트 구조](#link-프로젝트-구조)
- [데이터셋](#chart-with-upwards-trend-데이터셋)
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
- Front : `React`
- Back-end : `Spring Boot`
- 버전 및 이슈 관리 : `Github`, `Jira`
- 협업 툴 : `Notion`, Slack`
- 서비스 배포 환경 : `AWS`
- 디자인 : `Figma`

## :bulb: 채택한 개발 기술과 브랜치 전략
### [Backend]
### `SpringBoot`
- **빠른 개발 속도**: Spring Boot는 개발자에게 설정이 간단하고 빠른 시작을 제공하는 프레임워크여서 선택을 하였습니다. 기존의 Spring Framework에 비해 설정이 단순화되어 있으며, 다양한 내장 기능이 있어 생산성이 높다고 판단했습니다.
- **마이크로서비스 아키텍처**: Spring Boot는 마이크로서비스 아키텍처를 쉽게 구현할 수 있도록 설계가 되어, 프로젝트 확장성과 유지 보수성을 높이는데 유리하다고 생각이되어 선택하였습니다.
- **안정성과 확장성**: Spring Boot는 대규모 트래픽을 처리할 수 있는 안정적이고 확장 가능한 솔루션을 제공하고 있어, Spring Boot를 선택하였습니다.   
   
### [Frontend]
### `React`
- 학습 자료가 풍부하고, 다른 라이브러리나 도구와 통합이 자유롭기에 `React`를 선택하게 되었습니다.
- `React`를 핵심 프레임워크로 사용하여 사용자 인터페이스를 구축하고, `React DOM`을 통해 컴포넌트를 웹 브라우저에 렌더링했습니다.
- 동일한 필터 컴포넌트가 여러 컴포넌트에 사용되어 불필요한 로딩을 방지하고 필터 상태 일관성을 유지하기 위해 `Redux`, `React Redux`, `Redux Toolkit`을 도입하였습니다.
  - 애플리케이션의 상태를 중앙 집중식으로 관리하고 `React`와의 통합을 간소화했습니다. 
- 라우팅은 `React Router DOM`을 사용하여 SPA에서의 페이지 간 네비게이션을 구현했습니다. 
- UI 컴포넌트와 스타일링을 위해 `Material-UI (MUI)`와 `Tailwind CSS`를 활용하여 Material Design을 구현하고 빠른 UI 개발을 가능하게 했습니다. 
- 데이터 시각화에는 `Highcharts`와 `Recharts`를 사용하여 인터랙티브한 차트와 그래프를 생성했습니다. 
- API 통신을 위해 `Axios`를 사용하여 Promise 기반의 HTTP 요청을 처리하고, `React Query`를 도입하여 서버 상태 관리와 데이터 페칭을 간소화했습니다.
- 디자인의 경우 Figma 무료 템플릿을 활용하여 제작하였고, 카카오에서 제작한 'Figma to Code’도구인 'OROR Forge’ 플러그인을 사용하여 css와 컴포넌트를 추출했습니다. 이런 과정을 통해 구현 속도를 향상시켰습니다

### [Modeling]
### `Machine Learning`
- Model Ensemble-Bagging, Gradient Boosting, Random Forest, LASSO, XGBoost, AutoML-TPOT 등 최적의 성능을 내기 위해 각 팀원마다 다양한 모델을 시도해 보았습니다.   
   
**1. Model Ensemble-Bagging (윤소영)**   

**2. AutoML-TPOT (최은서)**
- **TPOT**
     
![image](https://github.com/user-attachments/assets/a5d15fda-9f0f-4850-af1d-9869cfd90c39)   
    
TPOT은 딥러닝 모델보다는 트리 기반 모델 혹은 회귀 모델에 특화되어있습니다. 특정 configuration을 지정해줌으로써 딥러닝 학습도 가능합니다. Windows 운영체제에서 사용할 수 있는 가장 간단하고 성능 좋은 automl 패키지라고 볼 수 있습니다. TPOT은 수천 개에 달하는 pipeline을 탐색해서 최적의 성능을 내는 모델을 찾습니다.   

- **코드**
```
# Import libraries
import pandas as pd
from tpot import TPOTRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.impute import SimpleImputer

# CSV 파일 경로 설정
file_path = "/content/drive/MyDrive/merged_output.csv"

# CSV 파일 읽기
df = pd.read_csv(file_path)

# 피처와 타겟 설정
selected_features = [
    '월_평균_소득_금액', '지출_총금액','총_유동인구_수',
    '총_상주인구_수', '총_가구_수', '아파트_평균_시가', '총_직장_인구_수',
    '집객시설_수'
]
X = df[selected_features]
y = df['점포당_당월_매출_금액']

# 결측치 처리
imputer = SimpleImputer(strategy='mean')
X = imputer.fit_transform(X)
y = imputer.fit_transform(y.values.reshape(-1, 1)).ravel()

# 데이터셋 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# TPOT 모델 생성 및 학습
tpot = TPOTRegressor(
    generations=5,        # 세대 수 줄임
    population_size=5,    # 개체 수 줄임
    verbosity=2,           # 출력 로그를 줄임
    random_state=42,
    n_jobs=-1
)
tpot.fit(X_train, y_train)

# 예측
y_pred = tpot.predict(X_test)

# 평가 지표 계산
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Mean Absolute Error: {mae:.2f}')
print(f'Mean Squared Error: {mse:.2f}')
print(f'R-squared: {r2:.2f}')

# 최적 모델 코드 출력
tpot.export('tpot_best_model.py')
```
    
- **성능**

```

Drive already mounted at /content/drive; to attempt to forcibly remount, call drive.mount("/content/drive", force_remount=True).

Generation 1 - Current best internal CV score: -1.9594205961084084e+16

Generation 2 - Current best internal CV score: -1.9594205961084084e+16

Generation 3 - Current best internal CV score: -1.9594205961084084e+16

Generation 4 - Current best internal CV score: -1.913944229937482e+16

Generation 5 - Current best internal CV score: -1.913944229937482e+16

Best pipeline: ExtraTreesRegressor(StandardScaler(input_matrix), bootstrap=True, max_features=0.9000000000000001, min_samples_leaf=15, min_samples_split=20, n_estimators=100)
Mean Absolute Error: 60895405.41
Mean Squared Error: 17969009768218358.00
R-squared: 0.07
TPOT model code has been saved to /content/drive/MyDrive/tpot_best_model.py

```
   
- **결과해석**
   
**내부 교차 검증 점수 (Internal CV Score)**   
   
- 모든 세대에서 내부 교차 검증 점수가 동일하고 매우 큰 음수 값을 가지고 있습니다. 이는 모델이 데이터에 대해 제대로 학습되지 않았음을 나타낼 수 있습니다. 매우 높은 음수 값은 모델의 예측 오류가 크다는 것을 의미합니다.   
   
**최적화된 모델 (Best Pipeline)**   
    
- TPOT이 선택한 최적의 파이프라인은 **ExtraTreesRegressor**입니다.
- 이 모델은 **StandardScaler**를 통해 표준화된 입력 데이터(**input_matrix**)를 사용합니다.   
- Hyperparameter로는 다음과 같습니다:
    - **bootstrap=True**: 부트스트랩 샘플링을 사용하여 각 트리를 훈련합니다.
    - **max_features=0.9000000000000001**: 각 트리가 사용할 최대 특성의 비율입니다.
    - **min_samples_leaf=15**: 리프 노드가 가져야 하는 최소 샘플 수입니다.
    - **min_samples_split=20**: 노드를 분할하기 위해 필요한 최소 샘플 수입니다.
    - **n_estimators=100**: 사용할 트리의 수입니다.   
   
**평가 지표 (Evaluation Metrics)**   
    
- **Mean Absolute Error (MAE)**: 평균 절대 오차는 약 60,895,405.41입니다. 이는 모델이 예측한 값과 실제 값의 절대 차이의 평균이 이 값만큼 난다는 것을 의미합니다.
- **Mean Squared Error (MSE)**: 평균 제곱 오차는 약 17,969,009,768,218,358.00입니다. 이는 모델의 예측 오류의 제곱 평균을 나타내며, 값이 매우 큽니다.
- **R-squared (R²)**: 결정 계수는 0.07로, 이는 모델이 전체 데이터 변동성의 7%만 설명할 수 있음을 의미합니다. R² 값이 1에 가까울수록 모델의 설명력이 높지만, 0.07는 매우 낮은 설명력을 의미합니다.   
    
**종합 해석**   
    
- 모델의 성능이 좋지 않다는 것을 알 수 있습니다. 내부 교차 검증 점수와 평가 지표 모두 높은 오류와 낮은 설명력을 나타냅니다.
- 이유는 데이터의 품질 문제일 수 있습니다. 데이터셋에 중요한 피처가 누락되었거나, 데이터의 분포가 불균형할 수 있습니다. 또한, 결측치 처리나 데이터 전처리가 불충분할 수 있습니다.
- 모델을 개선하기 위해서는 데이터의 질을 높이고, 피처 엔지니어링을 통해 더 중요한 피처를 추가하거나 다른 전처리 방법을 시도해 볼 필요가 있습니다. 모델의 하이퍼파라미터를 튜닝하거나 다른 모델을 시도해 보는 것도 한 방법입니다.
   
**3. Random Forest & Gradient Boosting Regressor & MultiOutputRegressor(김보경)**
- **Random Forest**

랜덤 포레스트(Random Forest)는 여러개의 결정 트리를 앙상블하여 예측 성능을 향상시키는 머신러닝 알고리즘입니다.
렌덤 포레스트의 주요장점은 다음과 같습니다.
1. **높은 예측 정확도**: 여러개의 결정 트리를 결합하여 예측을 수행하기 때문에, 단일 결정 트리보다 예측 정확도가 높습니다.
2. **과적합 방지**: 랜덤 포레스트는 여러 트리를 사용해 평균화된 결과를 도출하기 때문에 단일 트리에 비해 과적합(Overfitting)이 덜 발생합ㅂ니다.
3. **변수의 중요도 평가**: 랜덤 포레스트는 각 변수(특성)의 중요도를 측정할 수 있는 기능을 제공합니다.
4. **다양항 문제에 적용 가능**: 분류(Clssification)와 회귀(Regression)모두에서 사용할 수 있는 유연한 알고리즘입니다. 다양한 유혀으이 문제에 적용할 수 있습니다.

- **코드**
```
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', RandomForestRegressor(n_estimators=100, random_state=42))
])

# 데이터를 학습 세트와 테스트 세트로 분리
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 모델 학습
model.fit(X_train, y_train.values.ravel())


# 모델 저장
import joblib
joblib.dump(model, '/content/drive/MyDrive/FinalProject_data/ml_model/trained_model2.pkl')

# 모델 로드
loaded_pipeline = joblib.load('/content/drive/MyDrive/FinalProject_data/ml_model/trained_model2.pkl')

# 예측 수행
predictions = loaded_pipeline.predict(X_test)

# 성능 지표 계산
mse = mean_squared_error(y_test, predictions)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, predictions)

print(f"Mean Squared Error (MSE): {mse:.4f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")
print(f"R² Score: {r2:.4f}")

np.argsort( predictions)[-5:]
```

- **Gradient Boosting Regressor**

Gradient Boosting Regressor는 여러개의 약한 학습자(주로 결정트리)를 순차적으로 결합하여 강력한 예측 모델을 만드는 앙상블 학습방법입니다. Gradient Boosting Regressor의 주요 장점은 다음과 같습니다.
1. **높은 예측 정확도**: Gradient Boosting Regressor는 모델을 점진적으로 개선해 나가기 때문에 매우 높은 예측 정확도를 달성할 수 있습니다.
2. **유연성**: Gradient Boosting Regressor은 다양한 손실 함수(loss function)사용할 수 있어, 회귀, 분류, 순위 예측 등 다양한 문제에 적용할 수 있는 유연성을 제공합니다. 득정 문제의 특성에 맞는 맞춤형 모델을 만들 수 있습니다.
3. **특성 중요도 평가**: Gradient Boosting Regressor모델은 각 특성이 예측에 기여하는 중요도를 평가할 수 있습니다.
4. **다양한 데이터 처리 능력**: Gradient Boosting Regressor는 결측값 처리, 비선형 데이터, 상호작용 효과가 있는 데이터에 대해 강력한 성을을 발휘합니다. 다양한 유형의 데이터를 효과적으로 다룰 수 있습니다.

- **코드**


```
from sklearn.ensemble import GradientBoostingRegressor

# 모델 파이프라인 설정
model = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('regressor', GradientBoostingRegressor(random_state=42))
])

# 모델 학습
model.fit(X_train, y_train)

# 특성 중요도 추출
regressor = model.named_steps['regressor']
importances = regressor.feature_importances_

# 변수명 추출
feature_names = numerical_features.tolist() + list(model.named_steps['preprocessor'].named_transformers_['cat']['onehot'].get_feature_names_out(categorical_features))


# 중요도와 변수명을 데이터프레임으로 정리
importance_df = pd.DataFrame({'Feature': feature_names, 'Importance': importances})

# 중요도 기준으로 내림차순 정렬
importance_df = importance_df.sort_values(by='Importance', ascending=False)

# 상위 8개 변수 출력
top_features_gradient_boosting = importance_df.head(8)
print(top_features_gradient_boosting)

```

- **MultiOutputRegressor**
  
MultiOutputRegressor는 여러 개의 회귀 문제를 동시에 해결할 수 있도록 설계된 멀티아웃풋 회귀 모델입니다. 단일 모델을 각각의 출력(target) 변수에 대해 독립적으로 학습시키는 방식으로 동작합니다. MultiOutputRegressor의 주요 장점은 다음과 같습니다.
1. **다중 출력 예측 가능**: MultiOutputRegressor는 여러 개의 출력 변수를 동시에 예측할 수 있도록 설계되었습니다. 이로 인해 다중 목표(출력)가 있는 회귀 문제를 효율적으로 해결할 수 있습니다. 각 출력 변수를 독립적으로 처리하면서도, 하나의 통합된 프레임워크 내에서 관리할 수 있습니다.
2. **모델의 독립성**: 각 출력 변수에 대해 독립적인 회귀 모델을 학습하므로, 특정 출력 변수에 대한 예측 성능이 다른 변수에 영향을 받지 않습니다. 이는 각 목표 변수가 서로 독립적이거나 관계가 약한 경우 유리합니다.
3. **다양한 기반 회귀 모델 적용 가능**: MultiOutputRegressor는 기본 회귀 모델로 사용할 알고리즘을 자유롭게 선택할 수 있습니다. 선형 회귀, 결정 트리, 랜덤 포레스트, 서포트 벡터 머신 등 다양한 회귀 모델을 사용하여 멀티아웃풋 회귀 문제를 해결할 수 있습니다.
4. **단순하고 직관적인 접근**: MultiOutputRegressor는 복잡한 구조나 알고리즘을 필요로 하지 않으며, 단순히 여러 개의 출력 변수에 대해 각각의 회귀 모델을 학습시키는 직관적인 방법을 제공합니다. 이를 통해 복잡한 데이터 전처리 없이도 쉽게 구현할 수 있습니다.
5. **확장성**: MultiOutputRegressor는 출력 변수가 증가하더라도 쉽게 확장할 수 있습니다. 각 출력 변수에 대해 독립적인 모델을 학습시키기 때문에, 출력 변수가 많아질 때에도 관리가 용이합니다.
   
- **코드 **
  
```
# 모델 정의
model = MultiOutputRegressor(RandomForestRegressor(n_estimators=100, random_state=42))

# 파이프라인 생성
pipeline = Pipeline(steps=[
    ('preprocessor', preprocessor),
    ('model', model)
])

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 모델 학습
pipeline.fit(X_train, y_train)

# # 테스트 데이터에 대한 예측
predictions = pipeline.predict(X_test)

# 각 타겟 변수에 대해 MAE, MSE 계산
mae_scores = []
mse_scores = []

for i, column in enumerate(target):
    mae = mean_absolute_error(y_test.iloc[:, i], predictions[:, i])
    mse = mean_squared_error(y_test.iloc[:, i], predictions[:, i])
    mae_scores.append(mae)
    mse_scores.append(mse)
    print(f"{column} - MAE: {mae:.4f}, MSE: {mse:.4f}")

# 전체 평균 MAE, MSE 계산
avg_mae = np.mean(mae_scores)
avg_mse = np.mean(mse_scores)

print(f"\nAverage MAE: {avg_mae:.4f}")
print(f"Average MSE: {avg_mse:.4f}")

# monthly_sales_per_store 기준으로 상위 5개 항목 추천
top_5_indices = np.argsort(predictions[:, -1])[-5:]
top_5_info = X_test.iloc[top_5_indices].copy()
top_5_info.loc[:, 'predicted_monthly_sales_per_store'] = predictions[top_5_indices, -1]

# 상세 정보 출력
print("Top 5 Recommendations based on monthly_sales_per_store:")
for index in top_5_info.index:
    row = top_5_info.loc[index]
    print(f"Service Industry: {row['service_industry_name']}, Business District: {row['business_district_name']}")
    print(f"Predicted Monthly Sales Per Store: {row['predicted_monthly_sales_per_store']}")
    print(f"Monthly Average Income: {y_test.loc[index, 'monthly_average_income_amount']}")
    print(f"Total Floating Population: {y_test.loc[index, 'total_floating_population']}")
    print(f"Total Working Population: {y_test.loc[index, 'total_working_population']}")
    print(f"Apartment Average Price: {y_test.loc[index, 'apartment_average_price']}")
    print(f"Total Households: {y_test.loc[index, 'total_households']}")
    print(f"Total Expenditure Amount: {y_test.loc[index, 'total_expenditure_amount']}")
    print(f"Total Stores: {y_test.loc[index, 'total_stores']}")
    print(f"Average Operating Months: {y_test.loc[index, 'average_operating_months']}")
    print(f"Total Attraction Facilities: {y_test.loc[index, 'total_attraction_facilities']}")
    print()

# monthly_sales_per_store 기준으로 상위 5개 항목 추천
top_5_indices = np.argsort(predictions[:, -1])[-5:]
top_5_info = X_test.iloc[top_5_indices]
top_5_info['predicted_monthly_sales_per_store'] = predictions[top_5_indices, -1]

print("Top 5 Recommendations based on monthly_sales_per_store:")
top_5_info
```
![mae](https://github.com/user-attachments/assets/10e831d6-4128-4c3f-92c5-04d2a5ad2d73)
![image](https://github.com/user-attachments/assets/56f444bd-da64-4cac-9e6b-f13894badff4)


### [DB]
### `AWS RDS`
- **관리 용이성**: AWS RDS는 자동화된 백업, 패치, 복구 기능을 제공하여 데이터베이스 관리 부담을 줄여줄 수 있어 AWS RDS를 선택하였습니다.
- **보안**: VPC, 암호화, IAM통합 등 강력한 보안 기능을 제공하여 데이터 보호를 강화해줄 수 있다고 판단이 되어 AWS RDS를 선택하였습니다.
- **비용 효율성**: 사용한 만큼만 비용을 지불하는 유연한 요금제와 다영한 인스턴스 옵션으로 비용을 최적화할 수 있다고 판단하여 AWS RDS를 선택하였습니다.
- **성능**: 자동화된 성능 조정과 최적화를 통해 일관된 데이터베이스 성능을 유지할 수 있다는 장점으로 AWS RDS를 선택하였습니다.   
   
### [배포&CI/CD]
- **프로젝트 배포 및 CI/CD 전략**
  1. 배포 전략
     - 단일 EC2 인스턴스에 백엔드와 프론트엔드 통합 배포
     - GitHub Actions를 활용한 CI/CD 파이프라인 구축
  2. 도입 이유
     - 비용 효율성: 단일 서버로 인프라 비용 절감
     - 간편한 관리: 통합 환경으로 유지보수 용이성 증대
     - 배포 자동화, 동일 도메인 배포로 CORS 이슈 최소화 등
  3. 워크플로우
     - 코드 푸시/PR → GitHub Actions 트리거
     - 환경 설정 및 의존성 설치
     - 프론트엔드 및 백엔드 빌드
     - 아티팩트 생성 및 S3 업로드
     - CodeDeploy를 통한 EC2 배포











### 브랜치 전략
- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
  - main 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - develop 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - Feat 브랜치는 기능 단위로 독립적인 개발 환경을 구축하기 위한 목적으로 사용하고 merge 후 각 브랜치를 삭제했습니다.

## :link: 프로젝트 구조
- 백엔드드
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

-  프론트
```
\DE30-final-4\fp_ml_web\src\main\front
│  .eslintrc.js
│  .gitignore
│  .prettierrc
│  package-lock.json
│  package.json
│  postcss.config.js
│  README.md
│  tailwind.config.js
│  
├─public
│
└─src
    │  App.css
    │  App.js
    │  index.css
    │  index.js
    │  logo.svg
    │  reportWebVitals.js
    │  setupProxy.js
    │  setupTests.js
    │
    ├─components
    │  │  BarChart.jsx
    │  │  BusinessTypeFilter.jsx
    │  │  CombinedChart.jsx
    │  │  CommonFilter.css
    │  │  Container.jsx
    │  │  CustomMapMarker.jsx
    │  │  DetailModal.jsx
    │  │  MapComponent.css
    │  │  MapComponent.jsx
    │  │  MapSelectionModal.jsx
    │  │  NicknameInputDialog.jsx
    │  │  RecommendationResults.jsx
    │  │  RegionFilter.jsx
    │  │  Sales.jsx
    │  │  Situation.jsx
    │  │  Situation.less
    │  │  TOC.jsx
    │  │
    │  ├─navigation
    │  │      BottomNav.jsx
    │  │      TopNav.jsx
    │  │
    │  └─table
    │          TableHeader.jsx
    │          TableRowContent.jsx
    │
    ├─fonts
    │      GmarketSansBold.otf
    │      GmarketSansBold.woff
    │      GmarketSansLight.otf
    │      GmarketSansLight.woff
    │      GmarketSansMedium.otf
    │      GmarketSansMedium.woff
    │
    ├─hooks
    │      useApi.js
    │      useInfiniteScroll.js
    │
    ├─pages
    │  ├─aiRecommend
    │  │      AiRecommend.jsx
    │  │      Ranking.jsx
    │  │
    │  ├─checkThought
    │  │      CheckThought.jsx
    │  │
    │  ├─holiday
    │  │      holiday.css
    │  │      Holiday.jsx
    │  │
    │  ├─home
    │  │      Home.jsx
    │  │
    │  └─rankMap
    │          RankMap.jsx
    │
    ├─redux
    │  │  configureStore.js
    │  │  rootReducer.js
    │  │
    │  └─modules
    │          filter.js
    │
    ├─services
    │      api.js
    │
    └─utils
            filterUtils.js
```

## :chart_with_upwards_trend: 데이터셋
### 1. 서울열린데이터광장 - 서울시 상권분석 데이터
#### 1-1. 원본 데이터

- 출처: 서울시, [서울열린데이터광장](https://data.seoul.go.kr/dataList/datasetList.do) (상권분석 검색)
- 수집 기준:
    - 기간: 2019년 1분기 ~ 2024년 1분기   
    - 항목: 서울시상권분석 데이터 중 “상권” 기준 데이터(길단위인구, 상권변화지표, 상주인구, 소득소비, 아파트, 영역, 점포, 직장인구, 접객시설, 추정매출 총 10개)   
        - 추정매출, 점포 데이터의 경우 ‘기준년분기’, ‘상권코드’, ‘서비스업종’ 으로 구분하여 제공
        - 이외 데이터는  ‘기준년분기’, ‘상권코드’ 으로 구분하여 제공   

![image](https://github.com/user-attachments/assets/2e3185ca-a4ad-4a4a-921c-875c8330bd95)

#### 1-2. 데이터 선택(상권 기준 선택 이유)

- 서울열린데이터광장  상권분석 데이터는 “서울시, 자치구, 행정동, 상권, 상권배후지’ 총 5가지 기준으로 제공됨
    - 상권: 지역에 특화된 생활ㆍ문화ㆍ경제적 공동체를 형성하고 있는 상가건물 밀집지역
    - 상권배후지: 골목상권 영역에서 반경 200m 만큼 늘린 영역, ***배후지***는 ***상권***을 이용하는 소비자가. 거주하는 시간적 ⋅공간적 범위를 의미
    - 상권 배후지의 경우 영역끼리 겹치는 부분이 많아 구분하기 어렵다는 단점이 있으나, 상권의 경우 상권별로 영역이 확실히 구분되어 있기 때문에 '상권'을 기준으로 구분된 데이터를 활용하기로 결정했습니다. 
    
#### 1-3. 데이터 병합 및 컬럼 추가
- 10개 데이터 6년치를 하나의 파일로 병합
- '점포 당 매출액', '점포 당 매출 건수' 컬럼 추가
  - 추정 매출 속 매출 정보는 해당 상권과 업종의 총 점포 수의 매출 합을 나타낸다. 
  - 문제: 점포가 많을 수록 매출액, 매출 건수가 올라가는 이슈 발생
  - 해결: 점포 데이터의 “유사업종점포수(프랜차이즈 포함 점포 수)”와 매출 데이터를 나눠 점포당 매출액 도출
 
### 2. 한국부동산원 - 임대료 데이터
#### 2-1. 원본 데이터

- 출처: 한국부동산원, [KOSIS](https://kosis.kr/search/search.do) (상가 임대료 검색)
- 수집 기준
    - 기간: 2024년 1분기
    - 항목: 소규모 매장 임대료, 중대형 매장 임대료, 오피스 임대료
        - 상세 구분은 [임대료 데이터 정보](https://www.notion.so/0b9af9fffae94c8d8f0ebe189369738c?pvs=21) 참고
    - 세부 옵션: 층별 임대료 및 효율 비율 데이터 추가 (오피스의 경우 결측치가 많아 통합 임대료만 사용)

![image](https://github.com/user-attachments/assets/33fe856c-4c7e-49c7-a734-3526d701948a)


## :pushpin: 역할분담

- **김보경** : backend, ML, EDA
- **최은서** : backend, ML
- **윤소영** : frontend, ML
- **정제윤** : frontend, EDA

## :calendar: 개발 기간 및 작업 관리
### 개발기간
- **전체 개발 기간** : 2024.06.21 - 2024.08.09
- **기획 및 UI 구현** : 2024.06.21 - 2024.07.03
- **모델 개발** : 2024.07.05 - 2024.07.12
- **기능 구현** : 2024.07.13 - 2024.08.07

### 작업 관리
- GitHub과 Jira를 활용해 진행상황을 공유했습니다.
- 공유 중인 Notion 페이지를 통해 코드 및 기능의 상세 내용을 기록했습니다.

## :calling: 페이지별 기능
### 홈페이지
   
![리드미홈](https://github.com/user-attachments/assets/2af3cca4-7c1a-4419-85ca-1444d1beef51)
   
웹사이트 홈페이지입니다.    
    
![리드미 닉네임](https://github.com/user-attachments/assets/05c7005d-91ca-4b88-a431-a2af383bc245)   
   
홈페이지 최초 접속 시, 닉네임을 입력할 수 있습니다.   
  

### :mag: 기능 1 AI 맞춤추천
**“ 업종과 상권을 선택하세요! AI가 매출액을 예측해드립니다”**    
     
1. [ 지역(상권) / 업종 / 임대료 / 면적 ]을 사용자가 중복선택합니다.
      
![image](https://github.com/user-attachments/assets/21b01138-a5d7-4072-98f5-a1b5d8f61e0b)   
   
2. 선택한 옵션 내에서 최적의 매출액을 낼 수 있는 순위를 머신러닝을 통해 도출해줍니다.
      
![image](https://github.com/user-attachments/assets/2b2bed81-6cf8-492f-b623-5a442aa9c0a9)

3. 각 순위를 클릭하면, 세부정보 리포트를 확인할 수 있습니다.
      
![image](https://github.com/user-attachments/assets/ec1e89e2-f7fc-4467-bc5b-35407b82fd6b)   
![image](https://github.com/user-attachments/assets/b89250ce-26fa-4c6e-9065-415062c9abf3)   
   
### :round_pushpin: 기능 2 랭킹 IN 지도
**“원하는 업종을 선택하세요! 지도로 한 눈에 보여드립니다.”**    
   
1. 개업을 원하는 업종을 사용자가 중복선택합니다.   
   ![image](https://github.com/user-attachments/assets/3d44000d-4fbb-4f6d-b774-9dd6218c8e88)   
    
2. 최상의 매출을 낼 수 있는 상권을 업종별로 1위부터 5위까지 지도상에 표시해줍니다. (업종에 따라 색상 구분)
 ![리드미 지도2](https://github.com/user-attachments/assets/acb12afc-6ab0-4814-a5e7-ebfde2d22c05)

  
### :thought_balloon: 기능 3 내 생각 확인하기
**“누구나 갖고 있는 나만의 가설! 지금 검증해보세요.”**     

1. [ 업종 / 요인 / 조건 ]을 선택합니다.
   ex. **완구**는 **연령대 10 상주인구 수**가 **높으면** 매출이 높을 것이다.     
       
![image](https://github.com/user-attachments/assets/5eeee4c6-a7f0-45a1-977d-a4c4d38f7897)
   
3. 업종과 요인 간의 상관계수를 토대로 해당 가정의 통계적 유의미성을 판별해줍니다. 
![image](https://github.com/user-attachments/assets/069cf0af-840f-40c8-9cce-b57e2f5a5d77)


### :date: 기능 4 휴일 추천
**“고민되는 정기 휴무일 선정. 데이터를 기반으로 추천해드립니다”**    
   
1. 운영 중인 사업장의 업종과 지역(상권)을 선택합니다.
      
   ![image](https://github.com/user-attachments/assets/9fa82aa0-c4a7-4ff0-9a78-3ac4bdc41397)

2.  선택한 옵션의 요일별 매출액 현황을 그래프로 제공하고, 일주일 중 매출액이 가장 적은 요일을 정기휴무일로 추천합니다.
      
 ![image](https://github.com/user-attachments/assets/e8aa92bf-c2be-4e76-b57e-7c8b23ab2bf6)


## :collision: 트러블 슈팅
### 김보경
**Local DB에서 aws RDS로 전환 !**    
초반에는 개발작업을 local DB(MariaDB)를 사용하여, local DB가 있는 컴퓨터가 꺼지거나 다른 네트워크에 있는 경우, local DB에 접속에 어려운 문제를 격었습니다. 팀원들과 상의후 저희는 조금더 수월하게 DB에 접속하고 공유, 개발하고자 충분한 aws RDS비용리서치 후, aws RDS로 전환하여 DB접속 문제를 해결하였습니다!    

### 최은서
**DB 구조 개선을 통한 로직 단순화 및 성능 향상 !**    
DB에 있는 하나의 테이블에 모든 데이터들을 적재해놓고 다수의 api가 이를 공유해 사용하도록 했습니다. 그러나 그 과정에서 로직이 복잡해지고 데이터를 잘 불러오지 못하는 문제가 발생해, 기능별로 각각 테이블을 세분화하여 db에 업로드했습니다.   
   
### 윤소영
**안되는 건 없다 !**    
문제가 발생하면 바로바로 해결합니다. 문제 해결을 위해서 새로운 기술을 도입하는 것에 겁먹지 않아요.
너무 직진만 해서 정리가 안되는 편!  이제 체계적으로 관리하고 싶어요.
좀 더 시간이 된다면 데이터를 정확도를 높이고 싶어요.    
   

## :magic_wand: 개선 목표

## :speech_balloon: 프로젝트가 끝난 후

### 김보경
프로젝트 초반에는 마무리 과정이 막막하게 느껴졌지만, 리서치와 팀원들, 멘토님과의 지속적인 소통을 통해 프로젝트를 성공적으로 마무리할 수 있었습니다. 결과물도 기대 이상으로 나와 매우 뿌듯하며, 이번 프로젝트를 통해 팀워크와 소통의 중요성을 실감할 수 있었고, 다양한 기술적 역량도 크게 향상시킬 수 있었습니다. 매우 알찬 프로젝트 기간이었고, 많은 것을 배우고 얻어갈 수 있어 감사한 경험이었습니다. 
   
### 최은서
구상만 해두었던 아이디어들이 서서히 현실화되는 과정을 경험하면서, 큰 성취감을 느꼈습니다. 그동안 배워왔던 기술 스택을 실제 프로젝트에 적용해보면서, 앞으로 어떻게 더 효율적이고 창의적으로 활용할 수 있을지에 대한 감이 잡혔습니다. 또한, 수업시간에 배우지 않았던 새로운 기술들을 독학하고 실전에 사용해보면서, 기술 스택을 다룰 수 있는 범위와 역량이 이전보다 확연히 확장된 것 같아 매우 뿌듯합니다. 이 과정에서 얻은 경험과 자신감이 앞으로의 학습 과정에도 큰 자산이 될 수 있을 것 같습니다. 

### 윤소영
처음으로 프론트를 개발할 수 있는 시간이었습니다. 웹을

## :open_file_folder: 산출물
- [기획서 및 디자인 Figma](https://www.figma.com/design/jeuAW77eJx2rllhCnIrxGz/%EC%82%AC%EC%9E%A5%EB%8B%98-%EA%B5%AC%ED%95%B4%EC%9A%94---%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81-30%EA%B8%B0-4%EC%A1%B0-%EC%B5%9C%EC%A2%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=1138-882&t=b5hsHMAMhYdDK9qg-1)
![](https://velog.velcdn.com/images/devysy55/post/d3196b77-86f9-460e-8250-7af6898dfbf9/image.png)


- [brainstorming](https://www.figma.com/board/zUP9KENiW84KrknrW1MriG/Brainstorming?node-id=0-1&t=KDgraKbM3PlEI4ln-1) 
<img src="https://velog.velcdn.com/images/devysy55/post/ce9ff342-9ea7-4dc9-92e4-7cccb3ceaef7/image.png" width="400" height="300" align="left">

<br clear="all"/>

- Jira
<img src="https://velog.velcdn.com/images/devysy55/post/2308d404-8a54-4749-904f-1af00691673e/image.png" height="300" align="left">

<br clear="all"/>

- **갠트차트** : https://docs.google.com/spreadsheets/d/1D-ZymRVpYW4Ke9zWyekrmF3GOLdZIHlE07zJBrou3NY/edit?gid=1216572366#gid=1216572366
- **요구사항 정의서** : https://docs.google.com/spreadsheets/d/1UZflufgHaNtIHRyIJyky6rDAbLGrwatrjvRqxVuMKr4/edit?gid=0#gid=0
- **API 명세서** : https://docs.google.com/spreadsheets/d/1UEhghTYeV4GfCqCy38M5FT2DGRtcNG0WFXV3UNSw3HI/edit?gid=0#gid=0

