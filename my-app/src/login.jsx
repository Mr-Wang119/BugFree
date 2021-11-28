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

        axios.post('http://localhost:8080/login', datas)
        .then(function (response) {
            let data = response.data;
            if (data.success == true) {
                // TODO: session
                _this.props.history.go(-1);
            } else {
                _this.setState({error: "Wrong username or password, please re-try!"});
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" id="username" onInput={(event)=>this.setUserInfo(event, 'username')}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div>
                    <input type="password" id="password" onInput={(event)=>this.setUserInfo(event, 'password')}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <button onClick={this.submitForm}>LOG IN</button>
                </div>
                <div>
                    <p style={{color: "red"}}>{this.state.error}</p>
                </div>
            </div>
        );
    }
}

export default Login;