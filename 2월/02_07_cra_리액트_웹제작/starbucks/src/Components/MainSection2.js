import React, { Component } from 'react';

class MainSection2 extends Component {
    render() {
        return (
            <>
                <section id="section2">
                    <div className="container">
                        <div className="left"> 
                        {/* <!-- 공지사항 550 relative--> */}
                            <div className="left-box">
                                {/* <!-- 높이 24 --> */}
                                <div className="notice-title"> 
                                {/* <!-- 65 --> */}
                                <h2 className="blind">공지사항</h2>
                                </div>
                                    <div className="notice-list">
                                        <ul>
                                            <li className="notice-slide"><a href="#">Gift배송하기 서비스 배송지연 안내</a></li>
                                            <li className="notice-slide"><a href="#">홈페이지 이용약관 / 스타벅스 카드 이용약관 개정 안내</a></li>
                                            <li className="notice-slide"><a href="#">제25기 정기주주총회 권리행사 기준일 공고</a></li>
                                            <li className="notice-slide"><a href="#">시스템 개선 및 점검 안내</a></li>
                                            <li className="notice-slide"><a href="#">스타벅스커피 코리아 원산지 오표시 관련 고객설명문</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- 더보기 --> */}
                                    <div className="notice-more">
                                        <a href="#" className="more-btn" title="Notice More View"><img src="./img/btn_notice_plus.png" alt="더보기"/></a>
                                    </div>
                                </div>
                            </div>
                        <div className="right">
                            <div className="promotion"> 
                                {/* <!--234*36--> */}
                                <a href="#" title="스타벅스 프로모션" className="promotion-btn blind">스타벅스 프로모션</a>
                            </div>
                        </div>
                    </div>
                </section>                
            </>
        );
    }
}

export default MainSection2;