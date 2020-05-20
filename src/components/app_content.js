import React, {Component} from 'react';
import Appimg from './app_img';
import Appsocial from './app_social';
import '../style.css';

class Appcontent extends React.Component {
    render() {
        return (
            <div className = "d-flex justify-content-center align-items-center content">
                <div className = "content_card">
                    <div className = "content_img">
                        <Appimg />
                    </div>
                    <h2 className = "mt-5 text-center">
                        Alex Smith
                    </h2>
                    <h6 className = "mt-3 text-center">
                        Applied Psychometrics Specialist
                    </h6>
                    <div className = "d-flex justify-content-center mt-4">
                        <div className = "content_line">
                        </div>
                    </div>
                    <div className = "mt-5 d-flex justify-content-center content_social">
                        <Appsocial />
                    </div>
                </div>
            </div>
        );
    }
}

export default Appcontent;