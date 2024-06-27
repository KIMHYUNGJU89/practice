// Loading.js
import React from 'react';
import {Background, LoadingText} from './Styles';
import Spinner from './img/spinner.gif';
export default () => {
      return (
        <Background>
          <LoadingText>잠시만 기다려 주세요.</LoadingText>
          <img src={Spinner} alt="로딩중" width="5%" />
        </Background>
      );
    };
// 출처: https://anerim.tistory.com/221 [디발자 뚝딱:티스토리]