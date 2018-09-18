import React from "react";
import User from "service/user-service.jsx";
import MUtil from "util/mm.jsx";
const _mm = new MUtil();
const _user = new User();

import './index.scss';
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			redirect: _mm.getUrlParam('redirect') || ''
		}
	}
	onInputChange(e){
		let inputName = e.target.name,
			inputValue = e.target.value;
		this.setState({
			[inputName]: inputValue
		})
	}
	onSubmit(e){
		let data = {
				username: this.state.username,
				password: this.state.password
			}
		let checkResult = _user.checkLoginInfo(data);
		
		if(checkResult.status){
			//通过
			_user.login(data)
			.then( (res) => {
				console.log(this.state.redirect);
				this.props.history.push(this.state.redirect)
			}, (errMsg) => {
				console.log(errMsg)
				_mm.errorTips(errMsg);
			})
		}else{
			//不通过
			_mm.errorTips(checkResult.msg)
		}
		
	}
	render(){
		return (
			<div>
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default login-panel">
					  <div className="panel-heading">登录</div>
					  <div className="panel-body">
					  		<div>
							  <div className="form-group">
							    <input type="text"
							    	   name="username" 
							    	   className="form-control" 
							    	   placeholder="请输入帐号"
							    	   onChange={e => this.onInputChange(e)} />
							  </div>
							  <div className="form-group">
							    <input type="password"
							    	   name="password"  
							    	   className="form-control" 
							    	   placeholder="请输入密码"
							    	   onChange={e => this.onInputChange(e)} />
							  </div>
							  <button className="btn btn-primary col-md-12"
							  		  onClick={e => {this.onSubmit(e)}}>登录</button>
							</div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;