import React, { Component } from 'react';

class MainSection4 extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default MainSection4;