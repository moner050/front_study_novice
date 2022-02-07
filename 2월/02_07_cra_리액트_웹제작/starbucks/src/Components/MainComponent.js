import React, { Component } from 'react';
import MainSection1 from './MainSection1';
import MainSection2 from './MainSection2';
import MainSection3 from './MainSection3';
import MainSection4 from './MainSection4';
import MainSection5 from './MainSection5';
import MainSection6 from './MainSection6';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    <MainSection1 />
                    <MainSection2 />
                    <MainSection3 />
                    <MainSection4 />
                    <MainSection5 />
                    <MainSection6 />
                    
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