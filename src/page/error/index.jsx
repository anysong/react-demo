import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from "component/page-header/index.jsx";

class ErrorPage extends React.Component{
   constructor(props){
      super(props)
   }
  
   render(){
   	return (
   		<div id="page-wrapper">
            <PageHeader title="出错了" />

            <div className="row">
               <div className="col-md-12">
                  <span>找不到该路径，</span>
                  <Link to="/">点我返回首页</Link> 
               </div> 
            </div> 
         </div>
   	)
   }
}

export default ErrorPage;