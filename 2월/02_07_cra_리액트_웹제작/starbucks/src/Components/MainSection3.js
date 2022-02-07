import React, { Component } from 'react';

class MainSection3 extends Component {
    render() {
        return (
            <>
                <section id="section3">
                    <div className="container">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                    <li className="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                    <li className="slide slide2"><div><img src="./img/slide_02.jpg" alt=""/></div></li>
                                    <li className="slide slide3"><div><img src="./img/slide_03.jpg" alt=""/></div></li>
                                    <li className="slide slide1"><div><img src="./img/slide_01.jpg" alt=""/></div></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- 페이지 버튼 --> */}
                        <ul className="page-btn-box">
                            <li><a href="#" className="play-btn"></a></li>
                            <li><a href="#" className="page-btn addPage"></a></li>
                            <li><a href="#" className="page-btn"></a></li>
                            <li><a href="#" className="page-btn"></a></li>
                        </ul>
                        {/* <!-- 좌우 화살 버튼--> */}
                        <span className="prev-btn-arrow">
                            <a href="#" className="prev-btn blind">prev-btn</a>
                        </span>
                        <span className="next-btn-arrow">
                            <a href="#" className="next-btn blind">next-btn</a>
                        </span>
                    </div>
                </section>                
            </>
        );
    }
}

export default MainSection3;