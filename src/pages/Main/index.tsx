import React from 'react';


const request = require('request');
const convert = require('xml-js');

function Main() {
    const url = 'http://apis.data.go.kr/1611000/LuArinfoService/attr/getLuLuinfoAttrList';
    let queryParams = '?' + encodeURIComponent('ServiceKey') + '=CJc1eCI%2BlQBdxfrnhKxrK%2BKHE8MMSUkMw7R8inyl1m%2BWcFiTd1Wv7iLVaOq3IECUnn40xW1zj%2Fotcnv5qMs1%2FQ%3D%3D'; /* Service Key*/
    queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent('-'); /* 공공데이터포털에서 받은 인증키 */
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* 페이지번호 */
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* 한 페이지 결과 수 */
    queryParams += '&' + encodeURIComponent('jrsdInstt') + '=' + encodeURIComponent('41800'); /* 행위규제의 소관기관 */
    queryParams += '&' + encodeURIComponent('spcfcuCdNm') + '=' + encodeURIComponent('학교시설보호지구'); /* 용도지역지구명 */
    queryParams += '&' + encodeURIComponent('ladUseNm') + '=' + encodeURIComponent('단독주택'); /* 토지 이용 코드에 대한 이름 */

    request({
        url: url + queryParams,
        method: 'GET'
    }, function (error, response, body) {
        if (response.statusCode === 200) {
            var xmlToJson = convert.xml2json(body, { compact: true, spaces: 4 });
            console.log(JSON.parse(xmlToJson))
        }
        // console.log('Status', response.statusCode);
        // console.log('Headers', JSON.stringify(response.headers));
        // console.log('Reponse received', JSON.stringify(body));
    });
    return (
        <div>

        </div>
    );
}

export default Main;