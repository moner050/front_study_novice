class MainComponent extends React.Component {
    render() {
        return (
            <>
                <div id='main'>
                    <div className='title'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='content'>
                        <FormComponent/>
                    </div>
                </div>
            </>
        );
    }
}


class FormComponent extends React.Component
{
    toDay = new Date();

    constructor(props)
    {
        super(props);
        this.state = 
        {   // 새로고침해도 번호는 전체개수 + 1
            id: localStorage.length+1,
            subjectValue: '',
            dateValue: this.toDay.getFullYear() + '-' + this.toDay.getMonth()+1 + '-' + this.toDay.getDate()
        }
    }

    onChangeSubjectFm = (event) => 
    {
        this.setState({subjectValue: event.target.value});
    }

    onChangeDateFm = (e) => 
    {
        this.setState({dateValue: e.target.value});
    }

    // 전송
    onClickSubmit = (e) =>
    {
        e.preventDefault();

        let arr = [
            {
                id: this.state.id,
                subject: this.state.subjectValue,
                date:this.state.dateValue
            }
        ]
        // JSON.stringify(arr) 객체를 문자열로 변환 > 출력시는 다시 객체로 변환(JSON.parse(arr))
        localStorage.setItem(this.state.id, JSON.stringify(arr) );
        // 번호 증가
        this.setState({
            id: this.state.id + 1
        })
    }

    render()
    {
        return(
            <>
                <div id='notice'>
                    <h1>폼 요소</h1>
                    <form>
                        <div>
                            <input id='subject' value={this.state.subjectValue} onChange={this.onChangeSubjectFm} placeholder='제목' />
                        </div>
                        <div>
                            <input id='date' value={this.state.dateValue} onChange={this.onChangeDateFm} placeholder='날짜' />
                        </div>
                        <div>
                            <button type='submit' onClick={this.onClickSubmit}>ADD</button>
                        </div>
                    </form>
                </div>

                <ListComponent/>
            </>
        )
    }

}

MainComponent.defaultProps = {
    title: '리액트 로컬스토리지 객체 저장 게시판 출력'
}

// ListComponent 출력

class ListComponent extends React.Component {
    
    render() 
    {
        // 출력할 내용 가져오기
        // 로컬스토리지
        // console.log( JSON.parse ( localStorage.getItem(1) ) );
        // localStorage.setItem( );// 데이터 저장
        // localStorage.getItem( ); // 데이터 가져오기
        // localStorage.removeItem(); // 데이터 삭제.
        // localStorage.length;        // 로컬스토리지 길이
        // localStorage.key(0);        // 키
        // localStorage.clear();       // 전체 삭제        
        let a = [];
        for(let i = 0; i < localStorage.length; i++)
        {
            a[i] = JSON.parse(localStorage.getItem(i+1));
        }
        console.log(a);
        console.log(a[0]);
        console.log(a[1]);
        console.log(a[2]);
        console.log(a[3]);
        console.log(a[4]);
        
        // map() 함수 이용 데이터 요소에 출력
        // key prop 오류남
        // const listElement = a.map((item) => {
        //     return(
        //         <tr key={item.id}>
        //             <td>{item.id}</td>
        //             <td>{item.subject}</td>
        //             <td>{item.date}</td>
        //         </tr>
        //     )
        // });
        
        // 이게 왜 되는거지
        const listElement = a.map((item) => {
            return(
                <tr key={item[0].id}>
                    <td>{item[0].id}</td>
                    <td>{item[0].subject}</td>
                    <td>{item[0].date}</td>
                </tr>
            )
        });


        return (
            <>
            <h1>출력</h1>
            <table className='list'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {listElement}
                </tbody>
            </table>  
            </>
        );
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.querySelector('#app')
);