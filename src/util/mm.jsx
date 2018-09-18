 class MUtil {
 	request(params){
 		return new Promise((resolve, reject) => {
 			$.ajax({
	 			type: params.type || 'get',
	 			url: params.url || '',
	 			dataType: params.dataType || 'json',
	 			data: params.data || null,
	 			success: res => {
	 				
	 				if(res.status == 0){
	 					typeof resolve === 'function' && resolve(res);
	 				}else if(res.status == '999998'){
	 					this.doLogin();
	 				}else {
	 					typeof reject === 'function' && reject(res.msg);
	 				}
	 			},
	 			error: err => {
	 				console.log(err);
	 				typeof reject === 'function' && reject(err.msg);
	 			}
 			});
 		});
 	}
 	// 跳转登录
 	doLogin(){
 		window.location.href= '/login?redirect=' + encodeURIComponent(window.location.pathname);
 	}
 	// 获取URL参数
 	getUrlParam(name){
 		//xxxx.com?param=123&aaa=456
 		let queryString = window.location.search.split('?')[1] || '',
 			reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
 			result = queryString.match(reg);

 		console.log('mm',result);
 		return result ? decodeURIComponent(result[2]) : null;
 	}
 	// 错误提示
 	errorTips(errMsg){
 		alert(errMsg || '错误')
 	}
 }

 export default MUtil