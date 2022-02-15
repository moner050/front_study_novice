function App() 
{
    return (
      <div className="app">
          <h1>회원가입</h1>
          <SignUpComponent />
      </div>
    );
}

class SignUpComponent extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            member:[],
            num : 1,
            txtId : '',
            txtPwd : '',
            txtName : '',
            txtTel : '',
            txtEmail : ''
        }
    }

    // DB서버에서 테이블 데이터를 가져오기 해서
    // 배열에 저장하고 그걸 목록에 출력한다.
    // 리액트 라이프 사이클
    getData = () =>
    {
        axios({
            url : './response.php',
            method : "GET",
        })// 성공
        .then((result) => 
        {
            console.log( result.data );
            this.setState({member: result.data });
            // 전체 레코드 개수
            this.setState({num: result.data.length });
            console.log( this.state.member );

          // 실패
        }).catch((err) => 
        {
            console.log( err );
        });
    }

    // 태그 요소들이 화면에 부착 후 구동됨
    componentDidMount()
    {
        this.getData();
    }

    componentDidUpdate()
    {
        // this.getData();
        console.log('수정되었습니다. componentDidUpdate()');
    }

    onChangeIdfn = (e) =>
    {
        e.preventDefault();
        this.setState({txtId : e.target.value});
    }
    onChangePwdfn = (e) =>
    {
        e.preventDefault();
        this.setState({txtPwd : e.target.value});
    }
    onChangeNamefn = (e) =>
    {
        e.preventDefault();
        this.setState({txtName : e.target.value});
    }
    onChangeTelfn = (e) =>
    {
        e.preventDefault();
        this.setState({txtTel : e.target.value});
    }
    onChangeEmailfn = (e) =>
    {
        e.preventDefault();
        this.setState({txtEmail : e.target.value});
    }

    // 전송버튼
    submitfn = (e) =>
    {
        e.preventDefault();
        alert("전송");
        const {num, txtId, txtPwd, txtName, txtTel, txtEmail} = this.state;

        // AJAX-제이쿼리
        // AXIOS - 리액트, 뷰

        // 폼데이터 생성
        let formData = new FormData();
        formData.append('num', num);
        formData.append('id', txtId);
        formData.append('pwd', txtPwd);
        formData.append('name', txtName);
        formData.append('tel', txtTel);
        formData.append('email', txtEmail);

        // 프로미스 비동기식 전송방식
        // JSON 데이터 형식(객체) 지원
        axios({
            url : './response.php',
            method : "POST",
            data : formData
        })// 성공
        .then((result) => 
        {
            console.log( result );
          // 실패
        }).catch((err) => 
        {
            console.log( err );
        });

        this.setState({num: this.state.num + 1 });
        this.setState({txtId : ''});
        this.setState({txtPwd : ''});
        this.setState({txtName : ''});
        this.setState({txtTel : ''});
        this.setState({txtEmail : ''});

        this.getData();
    }
    
    render() {

        const {txtId, txtPwd, txtName, txtTel, txtEmail} = this.state;
        
        return (
            <div className='member-form'>
                <h1>회원가입 폼</h1> 
                <div className='form-box'>
                    <ul>
                        <li> 
                            <input type='text' id='txtId' value={txtId} onChange={this.onChangeIdfn} placeholder="아이디를 입력하세요"/>
                        </li>
                        <li>
                            <input type='password' id='txtPwd' value={txtPwd} onChange={this.onChangePwdfn} placeholder="비밀번호를 입력하세요"/>
                        </li>
                        <li>
                            <input type='text' id='txtName' value={txtName} onChange={this.onChangeNamefn} placeholder="이름을 입력하세요"/>
                        </li>
                        <li>
                            <input type='text' id='txtTel' value={txtTel} onChange={this.onChangeTelfn} placeholder="전화번호를 입력하세요"/>
                        </li>
                        <li>  
                            <input type='text' id='txtEmail' value={txtEmail} onChange={this.onChangeEmailfn} placeholder="이메일을 입력하세요"/>
                        </li>
                        <li>
                            <button type='submit' onClick={this.submitfn}>전송</button>
                        </li>
                    </ul>
                </div>

                <ListComponent member = {this.state.member} />

            </div>
        );
    }
}

class ListComponent extends React.Component {
    
    render() {
        const {member} = this.props;

        console.log(member);

        const memberList = member.map((item) => { 
            return(
                <li key={item.번호}>
                    <span>{item.번호}</span>
                    <span>{item.아이디}</span>
                    <span>{item.비밀번호}</span>
                    <span>{item.이름}</span>
                    <span>{item.전화번호}</span>
                    <span>{item.이메일}</span>
                </li>
            )
        });

        return (
            <>
                <div className='member-list'>
                    <ul>
                        {memberList}
                    </ul>
                </div>
            </>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app')
);