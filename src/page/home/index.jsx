import React from 'react';
import {Link} from 'react-router-dom';
import PageHeader from "component/page-header/index.jsx";
import './index.scss';
import Statistic from "service/statistic-service.jsx";
const _statistic = new Statistic();

class Home extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         userCount: '-',
         productCount: '-',
         orderCount: '-'
      }
   }
   componentDidMount(){
      this.loadCount();
   }
   loadCount(){
      _statistic.getHomeCount().then(res => {
         this.setState(res.data);
      })
   }
   render(){
   	return (
   		<div id="page-wrapper">
   			<PageHeader title="ingi-首页" />
   			<div className="row">
   				<div className="col-md-4">
                  <Link to="/user" className="color-box brown">
                     <p className="count">{this.state.userCount}</p>
                     <p className="desc">
                        <i className="fa fa-user-o"></i>
                        <span>用户数量</span>  
                     </p>
                  </Link>  
               </div>
               <div className="col-md-4">
                  <Link to="/product" className="color-box red">
                     <p className="count">{this.state.productCount}</p>
                     <p className="desc">
                        <i className="fa fa-user-o"></i>
                        <span>产品数量</span>  
                     </p>
                  </Link>  
               </div>
               <div className="col-md-4">
                  <Link to="/order" className="color-box blue">
                     <p className="count">{this.state.orderCount}</p>
                     <p className="desc">
                        <i className="fa fa-user-o"></i>
                        <span>订单数量</span>  
                     </p>
                  </Link>  
               </div>
   			</div>
   		</div>
   	)
   }
}

export default Home;