import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from "component/page-header/index.jsx";
import Pagination from "util/pagination/index.jsx";

import User from "service/user-service.jsx";
import MUtil from "util/mm.jsx";
const _mm = new MUtil();
const _user = new User();

class UserList extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         list : [],
         pageNum : 1
      };
   }
   componentDidMount(){
      this.loadUserList();
   }
   onPageNumberChange(pageNum){
      this.setState({
         pageNum: pageNum
      }, () => {
         this.loadUserList();
      })
   };
   loadUserList(){
      _user.getUserList(this.state.pageNum).then(res => {
         this.setState(res.data);
      })
   }
   render(){
      return (
         <div id="page-wrapper">
            <PageHeader title="用户列表" />

            <div className="row">
               <div className="col-md-12">
                 <table className="table table-striped table-bordered">
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>邮箱</th>
                        <th>电话</th>
                        <th>注册时间</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.state.list.map((user, index) => {
                           return (
                              <tr key={index}>
                                 <td>{user.id}</td>
                                 <td>{user.username}</td>
                                 <td>{user.email}</td>
                                 <td>{user.phone}</td>
                                 <td>{user.createTime}</td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
                 </table>

                 <Pagination current={this.state.pageNum} 
                             total={this.state.total}
                             onChange={(pageNum) => this.onPageNumberChange(pageNum)} />
               </div> 
            </div> 
         </div>
      )
   }
}

export default UserList;