import React, { Component } from 'react';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <section id="section1">
                        <div className="container">
                            <span className="ani ani1"><img src="./img/2022_NewYear_main_slogan.png" alt="" /></span>
                            <span className="ani ani2"><img src="./img/2022_NewYear_main_new_year_citrus_tea.png" alt=""/></span>
                            <span className="ani ani3"><img src="./img/2022_NewYear_main_lavender_beige_oat_latte.png" alt=""/></span>
                            <span className="ani ani4"><img src="./img/2022_NewYear_main_dolce_black_milk_tea.png" alt=""/></span>
                            <span className="ani ani5 more-btn"><a href="#" className="more-btn">자세히보기</a></span>
                        </div>
                    </section>
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
                    <section id="section4">
                        <div className="container">
                            <div className="left">
                                <img src="./img/rewards-logo.png" alt="스타벅스로고"/>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <h2>
                                        <span>스타벅스만의 특별한 혜택,</span><strong>스타벅스 리워드</strong>
                                    </h2>
                                    <div>
                                        <h3 className="pc">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <h3 className="mobile">
                                            <strong>스타벅스 회원이세요?</strong><span>로그인을 통해<br/> 나만의 리워드를 확인해보세요.</span><br/>
                                            <strong>스타벅스 회원이 아니세요?</strong><br/><span>가입을 통해 리워드 혜택을 즐기세요.</span>
                                        </h3>
                                        <span>
                                            <a href="#" className="sign-up">회원가입</a>
                                            <a href="#" className="sign-in">로그인</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <h4 className="pc">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를 </span><strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <h4 className="mobile">
                                        <span>회원 가입 후, 스타벅스 e-Gift Card를 </span><strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong><br/>
                                        <span>카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!</span>
                                    </h4>
                                    <span>
                                        <a href="#" className="gift-card">e-Gift Card 선물하기</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
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
                    
                    <section id="section7">
                        <div className="container">

                        </div>
                    </section>
                    
                    <section id="section8">
                        <div className="container">

                        </div>
                    </section>
                    
                    <section id="section9">
                        <div className="container">

                        </div>
                    </section>
                    
                </main>
            </>
        );
    }
}

export default MainComponent;