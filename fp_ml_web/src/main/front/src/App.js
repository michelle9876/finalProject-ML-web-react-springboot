import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';

    { id: 1, title: ['어디에 어떤 업종?', 'AI맞춤추천'], path: '/content1' },
    { id: 2, title: ['지도로 한눈에 확인', '랭킹 in 지도'], path: '/content2' },
    { id: 3, title: ['내 생각이 맞을까?', '확인하기'], path: '/content3' },
    { id: 4, title: ['휴일 추천해요', '휴일추천'], path: '/content4' },

  return (
        {contents.map((item) => (
              {item.title.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < item.title.length - 1 && <br />}
                </React.Fragment>
              ))}
        ))}
  );

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/content1" element={<Content1 />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
        <Route path="/content4" element={<Content4 />} />
      </Routes>
    </Router>
  );

export default App;