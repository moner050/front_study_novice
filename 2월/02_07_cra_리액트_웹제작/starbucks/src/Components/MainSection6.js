import React, { Component } from 'react';

class MainSection6 extends Component {
    render() {
        return (
            <>
                <section id="section6">
                    <div className="container">
                        <div className="pc">
                            <span>
                                <img className="font-img" src="./img/reserve_2022_hawaii_kau_title.png"></img>
                                <a href="#" className="more-btn">자세히보기</a>
                                <img className="pc-img" src="./img/reserve_2022_hawaii_kau_visual_v4.jpg" alt="하와이 카우"/>
                            </span>
                        </div>
                        <div className="mobile">
                            <span>
                                <img className="mobile-img" src="./img/m_reserve_2022_hawaii_kau_visual.jpg" alt="하와이 카우"/>
                                <a href="#" className="more-btn">자세히보기</a>
                            </span>
                        </div>
                    </div>
                </section>                
            </>
        );
    }
}

export default MainSection6;