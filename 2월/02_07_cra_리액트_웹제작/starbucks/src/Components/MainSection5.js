import React, { Component } from 'react';

class MainSection5 extends Component {
    render() {
        return (
            <>
                <section id="section5">
                    <div className="container">
                        <div className="left">
                            <img className="pc" src="./img/2022_NewYear_bean_bean.png" alt="커피콩"/>
                            <img className="mobile" src="./img/2022_m_NewYear_bean_beans.png" alt="커피콩"/>
                        </div>
                        <div className="right">
                            <span>
                                <img className="pc" src="./img/2022_NewYear_bean_txt.png" alt="활기찬 새해와"/>
                                <img className="mobile" src="./img/2022_m_NewYear_bean_txt.png" alt="활기찬 새해와"/>
                                <a href="#" className="more-btn">자세히보기</a>
                            </span>
                        </div>
                    </div>
                </section>                
            </>
        );
    }
}

export default MainSection5;