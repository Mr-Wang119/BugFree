import React from 'react';
import axios from "axios";
import './css/edit.css';
import api from './utils/api';

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            name: '', 
            password: '', 
            passwordConfirm: '',
            birthday: '',
            email: '',
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
        const _this = this;
        if(!localStorage.getItem('usernameToken')) {
            window.location.href = '/error';
        }
        let username = this.props.match.params.username;
        let usernameStore = localStorage.getItem('usernameToken');
        if (username !== usernameStore) {
            window.location.href = '/error';
        }
        this.setState({username: username});
        axios.get(api.user+username)
        .then(res => {
            let detail = res.data.detail;
            _this.setState({name: detail.name, birthday: detail.birthday, email: detail.email})
        })
        .catch(err => {
            console.log(err);
            window.location.href = '/error';
        })
    }

    submitForm() {
        const _this = this;
        let datas = new FormData();
        
        if(this.state.name == ''){
            this.setState({error: "Please fill all blank areas"});
            return;
        } else {
            datas.append('name', this.state.name);
        }

        if (this.state.password == '') {
            this.setState({error: "Please fill all blank areas"});
            return;
        } else {
            datas.append('password', this.state.password)
        }

        if (this.state.passwordConfirm == '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        }

        if (this.state.birthday == '') {
            this.setState({error: "Please fill all blanks!"});
            return;
        } else {
            datas.append('birthday', this.state.birthday);
        }

        if (this.state.password != this.state.passwordConfirm) {
            this.setState({error: "Different passwords!"});
            return;
        }

        axios.post(api.edituser+_this.state.username, datas)
        .then(function (response) {
            let data = response.data;
            if (data.success == true) {
                // redirect
                window.location.href = '/user/'+_this.state.username;
            } else {
                window.location.href = '/error';
            }
        }).catch(function (error) {
            console.log(error);
            window.location.href = '/error';
        });
    }

    render() {
        return (
            <div id="edit-form">
                <div class="form-floating mb-3">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="username" value={this.state.username} disabled/>                
                </div>
                <div class="form-floating mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" value={this.state.email} disabled/>
                </div>
                <div class="form-floating mb-3">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" value={this.state.name} onInput={(event)=>this.setUserInfo(event, 'name')} />
                </div>
                <div class="form-floating mb-3">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" onInput={(event)=>this.setUserInfo(event, 'password')}/>
                </div>
                <div class="form-floating mb-3">
                    <label for="passwordConfirm">Retype Password</label>
                    <input type="password" className="form-control" id="passwordConfirm" onInput={(event)=>this.setUserInfo(event, 'passwordConfirm')}/>
                </div>
                <div class="form-floating mb-3">
                    <label for="birthday">Birthday</label>
                    <input type="date" value={this.state.birthday} className="form-control" id="birthday" onInput={(event)=>this.setUserInfo(event, 'birthday')} />
                </div>
                <div id="edit-confirm-btn">
                    <button class="btn btn-warning mb-3" onClick={this.submitForm}>Confirm</button>
                </div>
                <div className="form-floating mb-3">
                        <p style={{color: "indianred"}}>{this.state.error}</p>
                </div>
            </div>
        );
    }
}

export default Edit;