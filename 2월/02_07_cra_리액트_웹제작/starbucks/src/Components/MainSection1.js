import React, { Component } from 'react';

class MainSection1 extends Component {
    render() {
        return (
            <>
                <section id="section1">
                    <div className="container">
                        <span className="ani ani1"><img src="./img/2022_NewYear_main_slogan.png" alt="" /></span>
                        <span className="ani ani2"><img src="./img/2022_NewYear_main_new_year_citrus_tea.png" alt=""/></span>
                        <span className="ani ani3"><img src="./img/2022_NewYear_main_lavender_beige_oat_latte.png" alt=""/></span>
                        <span className="ani ani4"><img src="./img/2022_NewYear_main_dolce_black_milk_tea.png" alt=""/></span>
                        <span className="ani ani5 more-btn"><a href="#" className="more-btn">자세히보기</a></span>
                    </div>
                </section>
            </>
        );
    }
}

export default MainSection1;