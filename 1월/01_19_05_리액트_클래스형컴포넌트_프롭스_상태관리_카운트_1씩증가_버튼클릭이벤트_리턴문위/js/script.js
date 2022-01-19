
        // 부모 컴포넌트(Parent Component)
        class MainComponent extends React.Component 
        {   // 상태관리가 필요한 모든 변수를 관리
            constructor(props)
            {
                super(props);
                // Update 수정 유지 정보관리(상태관리) state
                this.state = 
                {
                    cnt: 0
                }
            }

            render()
            {   
                const {cnt} = this.state;
                const {title} = this.props;

                
            const onClickAddFn = (event) =>
            {
                event.preventDefault();
                this.setState({cnt: cnt+1 });
            }

            const onClickSubtractFn = (event) =>
            {
                // console.log( event );
                event.preventDefault();
                this.setState({ cnt: cnt-1 });
            }

                return(
                    <>
                    <section id='section1'>
                        <div className='container'>
                            <div className="title" style={{textAlign:'center'}}>
                                <h1 style={{fontSize:'30px', color:'#c88', textAlign:'center'}}>{title}</h1>
                                <button onClick={onClickAddFn} style={{cursor:'pointer', fontSize:'20px', backgroundColor:'#222', color:'#fff', padding:'10px 30px',}}>1씩증가</button>
                                &nbsp;
                                <button onClick={onClickSubtractFn} style={{cursor:'pointer', fontSize:'20px', backgroundColor:'#222', color:'#fff', padding:'10px 30px'}}>1씩감소</button>
                            </div>  
                            <div className="content">
                                <CountComponent cnt={cnt}></CountComponent>
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
                const {cnt} = this.props;
                return(
                    <>
                        <ul className='food-list' style={{fontSize:'50px'}}>
                            {cnt}
                        </ul>  
                    </>
                )
            }
        }

        // 기본프롭스(defaultProps)
        MainComponent.defaultProps = {
            title: 'Count Programing',
            cnt: 0
        }

        ReactDOM.render(
            <MainComponent>컴포넌트</MainComponent>,
            document.querySelector('#app')
        );
