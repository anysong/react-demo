import React from "react";
import './index.scss';
class Login extends React.Component {
	render(){
		return (
			<div>
				<div className="col-md-4 col-md-offset-4">
					<div className="panel panel-default login-panel">
					  <div className="panel-heading">登录</div>
					  <div className="panel-body">
					  		<form>
							  <div className="form-group">
							    <input type="text" className="form-control" placeholder="请输入帐号" />
							  </div>
							  <div className="form-group">
							    <input type="password" className="form-control" placeholder="请输入密码" />
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