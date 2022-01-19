
        // 부모 컴포넌트(Parent Component)
        class MainComponent extends React.Component 
        {   // 상태관리가 필요한 모든 변수를 관리
            constructor(props)
            {
                super(props);
                // Update 수정 유지 정보관리(상태관리) state
                this.state = 
                {   // 입력상자 텍스트
                    txt: ''
                }
            }

            onChangefn = (event) =>
            {
                this.setState({txt: event.target.value})
            }

            render()
            {   
                const {txt} = this.state;
                const {title} = this.props;


                return(
                    <>
                    <section id='section1'>
                        <div className='container'>
                            <div className="title" style={{textAlign:'center'}}>
                                <h1 style={{fontSize:'30px', color:'#c88', textAlign:'center'}}>{title}</h1>
                                <input style={{width:'300px', height:'50px', border:'1px solid #d8d'}} value={txt} onChange={this.onChangefn}></input>
                                <button style={{cursor:'pointer', fontSize:'20px', backgroundColor:'#222', color:'#fff', padding:'10px 30px',}}>1씩증가</button>
                                &nbsp;
                                <button style={{cursor:'pointer', fontSize:'20px', backgroundColor:'#222', color:'#fff', padding:'10px 30px'}}>1씩감소</button>
                            </div>  
                            <div className="content">
                                <CountComponent txt={txt}></CountComponent>
                            </div>
                        </div>
                    </section>
                    </>
                )
            }
        }

        // 자식 컴포넌트(Children Component)
        class CountComponent extends React.Component 
        {
            render()
            {   //구조 분할 할당
                const {txt} = this.props;
                return(
                    <>
                        <ul className='food-list' style={{fontSize:'50px'}}>
                            {txt}
                        </ul>  
                    </>
                )
            }
        }

        // 기본프롭스(defaultProps)
        MainComponent.defaultProps = {
            title: 'Count Programing',
            txt: 0
        }

        ReactDOM.render(
            <MainComponent>컴포넌트</MainComponent>,
            document.querySelector('#app')
        );
