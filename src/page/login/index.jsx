import React from "react";
import './index.scss';
class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
		}
	}
	onInputChange(e){
		let inputName = e.target.name,
			inputValue = e.target.value;
		this.setState({
			[inputName]: inputValue
		})
	}
	render(){
		return (
			<div>
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default login-panel">
					  <div className="panel-heading">登录</div>
					  <div className="panel-body">
					  		<form>
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
							  <button type="submit" className="btn btn-primary col-md-12">登录</button>
							</form>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;