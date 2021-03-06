import React, { useState, useEffect } from 'react';

const request = require('request');
const convert = require('xml-js');

export default function Main() {

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
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
                const xmlToJson = convert.xml2json(body, { compact: true, spaces: 4 });
                const parseData = JSON.parse(xmlToJson)
                console.log(parseData)
                console.log(currentPage)
                if (currentPage === 0 && totalPage === 0) {
                    setCurrentPage(parseData.response.pageNo._text)
                    setTotalPage(parseData.response.numOfRows._text)
                    setData(parseData.response.fields.field)
                }
            }
            // console.log('Status', response.statusCode);
            // console.log('Headers', JSON.stringify(response.headers));
            // console.log('Reponse received', JSON.stringify(body));
        });
        console.log(currentPage)
        console.log(totalPage)
        console.log(data)
    }, [currentPage, totalPage, data])
    
    return (
        <div>
            현재 페이지 : {currentPage}<br/>
            총 페이지수: {totalPage}<br/>
            데이터: {
                data.map(list => {
                    console.log(list)
                })
            }
        </div>
    )
}
