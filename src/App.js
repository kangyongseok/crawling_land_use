import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const KEY = 'CJc1eCI%2BlQBdxfrnhKxrK%2BKHE8MMSUkMw7R8inyl1m%2BWcFiTd1Wv7iLVaOq3IECUnn40xW1zj%2Fotcnv5qMs1%2FQ%3D%3D'
  const url = `http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuLuinfoAttrList?ServiceKey=${KEY}&numOfRows=10&pageNo=1`
  axios({
    method: 'get',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => console.log(res))

  // var xhr = new XMLHttpRequest();
  // var url = 'http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuLuinfoAttrList'; /*URL*/
  // var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'CJc1eCI%2BlQBdxfrnhKxrK%2BKHE8MMSUkMw7R8inyl1m%2BWcFiTd1Wv7iLVaOq3IECUnn40xW1zj%2Fotcnv5qMs1%2FQ%3D%3D'; /*Service Key*/
  // queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /*공공데이터포털에서 받은 인증키*/
  // queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지번호*/
  // queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /*한 페이지 결과 수*/
  // queryParams += '&' + encodeURIComponent('jrsdInstt') + '=' + encodeURIComponent('41800'); /*행위규제의 소관기관*/
  // queryParams += '&' + encodeURIComponent('spcfcuCdNm') + '=' + encodeURIComponent('학교시설보호지구'); /*용도지역지구명*/
  // queryParams += '&' + encodeURIComponent('ladUseNm') + '=' + encodeURIComponent('단독주택'); /*토지 이용 코드에 대한 이름*/
  // xhr.open('GET', url + queryParams);
  // xhr.onreadystatechange = function () {
  //     if (this.readyState === 4) {
  //         alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
  //         console.log(JSON.parse('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText))
  //     }
  // };

  // xhr.send('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
