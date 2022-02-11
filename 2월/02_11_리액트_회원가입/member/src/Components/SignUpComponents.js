import React, { Component } from 'react';
import axios from 'axios';

class SignUpComponents extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
            num : 1,
            txtId : '',
            txtPwd : '',
            txtName : '',
            txtTel : '',
            txtEmail : ''
        }
    }

    // 전송버튼
    submitfn = (e) =>
    {
        e.preventDefault();
        console.log(this.state.num);
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

        axios({
            url : './member.php',
            method : "POST",
            data : formData
        });

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
    render() {

        const {txtId, txtPwd, txtName, txtTel, txtEmail} = this.state;
        
        return (
            <div className='member-form'>
                <h1>회원가입 폼</h1> 
                <div className='form-box'>
                    <ul>
                        <li>
                            <label>아이디</label>   
                            <input type='text' id='txtId' value={txtId} onChange={this.onChangeIdfn} placeholder="아이디를 입력하세요"/>
                        </li>
                        <li>
                            <label>비밀번호</label>   
                            <input type='text' id='txtPwd' value={txtPwd} onChange={this.onChangePwdfn} placeholder="비밀번호를 입력하세요"/>
                        </li>
                        <li>
                            <label>이름</label>   
                            <input type='text' id='txtName' value={txtName} onChange={this.onChangeNamefn} placeholder="이름을 입력하세요"/>
                        </li>
                        <li>
                            <label>전화번호</label>   
                            <input type='text' id='txtTel' value={txtTel} onChange={this.onChangeTelfn} placeholder="전화번호를 입력하세요"/>
                        </li>
                        <li>
                            <label>이메일</label>   
                            <input type='text' id='txtEmail' value={txtEmail} onChange={this.onChangeEmailfn} placeholder="이메일을 입력하세요"/>
                        </li>
                        <li>
                            <button type='submit' onClick={this.submitfn}>전송</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SignUpComponents;