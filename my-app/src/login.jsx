import React from 'react';
import axios from "axios";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: '', 
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
            this.props.history.push('/homepage');
        }
    }

    submitForm() {
        const _this = this;
        let datas = new FormData();
        
        if(this.state.username == ''){
            this.setState({error: "Please fill all blank areas"});
            return;
        } else {
            datas.append('username', this.state.username);
        }

        if (this.state.password == '') {
            this.setState({error: "Please fill all blank areas"});
            return;
        } else {
            datas.append('password', this.state.password)
        }

        axios.post('http://localhost:8080/login', datas, {withCredentials: true})
        .then(function (response) {
            let data = response.data;
            if (data.success == true) {
                // token
                window.localStorage.setItem('usernameToken', data.detail.username);
                // redirect
                _this.props.history.push('/user/'+data.detail.username);
            } else {
                _this.setState({error: "Wrong username or password, please re-try!"});
            }
        }).catch(function (error) {
            console.log(error);
            _this.props.history.push('/error');
        });
    }

    render() {
        return (
            <div>
                <div class="innner_banner" style={{marginBottom: "20px"}}>
                    <div class="container">
                        <h3>Log In</h3>
                    </div>
                </div>
                <div style={{margin: "20px auto", width: "20%"}}>
                    <div className="form-floating mb-3">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onInput={(event)=>this.setUserInfo(event, 'username')} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-floating mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onInput={(event)=>this.setUserInfo(event, 'password')} className="form-control" placeholder="Password"/>
                    </div>
                    <div className="form-floating">
                        <div className="form-floating mb-3">
                            <button onClick={this.submitForm} className="btn btn-warning mb-3">LOG IN</button>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <p style={{color: "indianred"}}>{this.state.error}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;