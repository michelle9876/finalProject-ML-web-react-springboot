import React, { useEffect, useState } from 'react';
import TOC from "./components/TOC"; // TOC 컴포넌트 import
import Content from './components/Content'; // Content 컴포넌트 import
import './App.css'; // App.css 스타일시트 import
import axios from 'axios'; // axios HTTP 클라이언트 import

function Subject(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.sub}
    </header>
  );
}

function App() {
  const [subject] = useState({ title: "사장님 구해요", sub: "World Wide Web!" }); // subject 상태 변수 설정
  const [contents] = useState([
    { id: 1, title: '어디에 어떤 업종?', desc: 'AI맞춤추천', content: 'AI맞춤추천에 대한 내용입니다.' },
    { id: 2, title: '지도로 한눈에 확인', desc: '랭킹 in 지도', content: '랭킹 in 지도에 대한 내용입니다.' },
    { id: 3, title: '내 생각이 맞을까?', desc: '확인하기', content: '내 생각이 맞을까?에 대한 내용입니다.' },
    { id: 4, title: '휴일 추천해요', desc: '휴일추천', content: '휴일 추천해요에 대한 내용입니다.' },
  ]); // contents 상태 변수 설정

  const [selectedContent, setSelectedContent] = useState(contents[0]); // 선택된 컨텐츠 상태 변수 설정 (초기값: 첫 번째 컨텐츠)

  // 컨텐츠 클릭 시 선택된 컨텐츠 설정하는 함수
  const handleClick = (content) => {
    setSelectedContent(content);
  };

  const [data, setData] = useState(''); // API 데이터 상태 변수 설정

  useEffect(() => {
    axios.get('/api/data') // '/api/data' 엔드포인트에 GET 요청
      .then(res => setData(res.data)) // 요청 성공 시 데이터 설정
      .catch(err => console.log(err)); // 요청 실패 시 에러 처리
  }, []); // 컴포넌트 마운트 시 한 번만 실행되는 useEffect 설정

  return (
    <div className="App">
      <header>
        <h1>{subject.title}</h1>
        {subject.sub}
      </header>
      {/* 각 컨텐츠의 버튼을 렌더링 */}
      <div className="buttons">
        {contents.map(item => (
          <button key={item.id} onClick={() => handleClick(item)}>
            {item.title}
          </button>
        ))}
      </div>
      <TOC data={contents}></TOC> {/* TOC 컴포넌트 렌더링 */}
      {/* 선택된 컨텐츠의 제목과 설명을 출력하는 Content 컴포넌트 */}
      <Content title={selectedContent.title} desc={selectedContent.desc} />
      {/* 선택된 컨텐츠의 내용을 출력 */}
      <p>{selectedContent.content}</p>
      받아온 값 : {data} {/* 받아온 API 데이터 출력 */}
    </div>
  );
}

export default App; // App 컴포넌트 export
