import React from 'react';
import axios from "axios";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '', 
            passwordConfirm: '',
            email: '',
            birthday: '',
            error: ''};
        this.submitForm = this.submitForm.bind(this);
    }

    setUserInfo(event, key) {
        // input表单元素会自动绑定一个event对象对事件函数
        // event对象target属性等于input DOM元素对象，所以event.target.value 可以获取到当前input的value值
        let obj = {};
        obj[key] = event.target.value;
        // 更新状态
        this.setState(obj);
    }

    componentWillMount() {
        if(localStorage.getItem('usernameToken')) {
            window.location.href = '/homepage';
        }
    }

    submitForm() {
        const _this = this;
        let datas = new FormData();
        if (this.state.username === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('username', this.state.username);
        }
        
        if (this.state.password === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('password', this.state.password);
        }
        
        if (this.state.passwordConfirm === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        }

        if (this.state.email === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('email', this.state.email);
        }

        if (this.state.name === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('name', this.state.name);
        }

        if (this.state.birthday === '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('birthday', this.state.birthday);
        }

        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({error: "Different passwords!"});
            return;
        }

        axios.post('http://localhost:8080/signup', datas)
        .then(function (response) {
            // session
            window.location.href = '/user/'+_this.state.username;
        }).catch(function (error) {
            console.log(error);
            window.location.href = '/error';
        });
    }

    render() {
        return (
            <div>
                <div class="innner_banner" style={{marginBottom: "20px"}}>
                    <div class="container">
                        <h3>Sign Up</h3>
                    </div>
                </div>
                <div style={{margin: "20px auto", width: "20%"}}>
                    <div className="form-floating mb-3">
                        <label for="username">Username</label>
                        <input type="text" id="username" onInput={(event)=>this.setUserInfo(event, 'username')} className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                        <label for="password">Password</label>
                        <input type="password" id="password" onInput={(event)=>this.setUserInfo(event, 'password')} className="form-control"/>  
                    </div>
                    <div className="form-floating mb-3">
                        <label for="passwordConfirm">Confirm Password</label>
                        <input type="password" id="passwordConfirm" onInput={(event)=>this.setUserInfo(event, 'passwordConfirm')} className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                        <label for="name">Name</label>
                        <input type="text" id="name" onInput={(event)=>this.setUserInfo(event, 'name')} className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" onInput={(event)=>this.setUserInfo(event, 'email')} className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                        <label for="birthday">Birthday</label>
                        <input type="date" id="birthday" onInput={(event)=>this.setUserInfo(event, 'birthday')} className="form-control"/>
                    </div>
                    <div className="form-floating mb-3">
                        <button onClick={this.submitForm} className="btn btn-warning mb-3">SIGN UP</button>
                    </div>
                    <div className="form-floating mb-3">
                        <p style={{color: "indianred"}}>{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;