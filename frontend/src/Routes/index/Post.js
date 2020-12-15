import React from 'react';
import './Post.css'
import './Post.scss'
import { withRouter } from "react-router-dom";


const MainTitle = ({title, subtitle , content, bigimage, smallimage, link}) => (
    <div className="fh5co-project js-fh5co-waypoint" data-bgcolor="" data-next="yes">
        <div className="container">
            <div className="fh5co-project-inner row">
                <div className="fh5co-imgs col-md-8 animate-box fadeInUp animated">
                    <div className="img-holder-1 animate-box fadeInUp animated">
                        <img src={bigimage} alt="Free HTML5 Bootstrap Template"/>
                    </div>
                    <div className="img-holder-2 animate-box fadeInUp animated">
                        <img src={smallimage} alt="Free HTML5 Bootstrap Template"/>
                    </div>
                </div>
                <div className="fh5co-text col-md-4 animate-box fadeInUp animated">
                    <h2>{ title }</h2>
                    <p>{subtitle}</p>
                    <p>{content}</p>
                    <p>
                        <a href={link}
                                className="btn btn-light btn-outline transition" rel="noopener" target="_blank">View
                            Project
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default withRouter(MainTitle);
