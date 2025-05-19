import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';	//원래 다 바꿔서 씀 이런거 
import { BrowserRouter, HashRouter } from 'react-router-dom';
//BrowserRouter : DOM 형태의 페이지를 구분하는 형태의 라이브러리
//HashRouter : 해시 기호 형태의 페이지를 구분하는 라이브러리
//	http://localhost:3000/Login => 브라우저라우터 
//	http://localhost:3000/#Login => 해시라우터 (페이스북, 인스타그램이 이런거 많이씀 ) => 컨트롤러랑 충돌 안나서 좋음 핸들링 쉬움 

const root = ReactDOM.createRoot(document.getElementById('root'));
//기본셋팅 형태 (Router) => 여기서 더 손댈거없음 
root.render(
	//STS가 클래스로 인식함 
	<BrowserRouter>
		<App>
		</App>
	</BrowserRouter>
);