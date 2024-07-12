// App.js

import React, { useEffect, useState } from 'react';
import Content from './components/Content';
import Subject from './components/Subject';
import './App.css';
import axios from 'axios';

function App() {
  const [subject] = useState({ title: "사장님 구해요" });
  const [contents] = useState([
    { id: 1, title: '어디에 어떤 업종?', desc: 'AI맞춤추천' },
    { id: 2, title: '지도로 한눈에 확인', desc: '랭킹 in 지도' },
    { id: 3, title: '내 생각이 맞을까?', desc: '확인하기' },
    { id: 4, title: '휴일 추천해요', desc: '휴일추천' },
  ]);

  const [selectedContent, setSelectedContent] = useState(contents[0]);

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Subject title={subject.title} />
      <div className="buttons">
        {contents.map((item, index) => (
          <div key={item.id} className="button-container">
            <button onClick={() => handleClick(item)}>
              {item.title}
            </button>
          </div>
        ))}
      </div>
      {selectedContent && (
        <Content title={selectedContent.title} desc={selectedContent.desc} content={selectedContent.content} />
      )}
      받아온 값 : {data}
    </div>
  );
}

export default App;
