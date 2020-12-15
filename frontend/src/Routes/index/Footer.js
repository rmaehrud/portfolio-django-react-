import React from 'react';
import { withRouter } from "react-router-dom";
import './Footer.css'
import './Footer.scss'


const Footer = () => (
<footer id="fh5co-footer" class="js-fh5co-waypoint">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p><small>&copy; 2020 금도경 All Rights Reserved.</small></p>
                <ul class="fh5co-social">
                    <li>
                        <a href="https://www.youtube.com/watch?v=ytnbB14huTM&t=46s"><i class="icon-youtube"></i> 세명대학교 경진대회 대상 - 디지털사이니지</a>
                        <p><a href="#"> 정보처리기사 필기 합격</a></p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

);

export default withRouter(Footer);
