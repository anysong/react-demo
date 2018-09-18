import MUtil from "util/mm.jsx";
const _mm = new MUtil();

class User {
	//登录
	login(data){
		return _mm.request({
			url: '/manage/user/login.do',
			type: 'post',
			data: data
		});
	}
	//
	checkLoginInfo(data){
		let username = $.trim(data.username),
			password = $.trim(data.password);
		if(typeof username !== 'string' || username.length == 0){
			return {
				status: false,
				msg: '用户名不能为空！'
			}
		}
		if(typeof password !== 'string' || password.length == 0){
			return {
				status: false,
				msg: '密码不能为空！'
			}
		}

		return {
			status: true,
			msg: '验证成功'
		}
	}
}

export default User;