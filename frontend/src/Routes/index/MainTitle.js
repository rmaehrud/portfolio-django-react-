import React from 'react';
import './MainTitle.css'
import { withRouter } from "react-router-dom";



const MainTitle = () => (
    <div className="fh5co-text-wrap animate-box fadeInUp animated">
        <div className="container">
        <div className="fh5co-intro-text">
            <h1>데이터 기반의 웹 · 앱 서비스를
                제공하는 개발자를 꿈꾸는 <a>금도경</a>
              입니다.</h1>
        </div>
        </div>
    </div>
);

export default withRouter(MainTitle);
