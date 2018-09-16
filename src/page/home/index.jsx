import React from 'react';
// import './index.css';
import PageHeader from "component/page-header/index.jsx";

class Home extends React.Component{
   render(){
   	return (
   		<div id="page-wrapper">
   			<PageHeader title="ingi-首页" />
   			<div className="row">
   				<div className="col-md-12">body1</div>
   			</div>
   		</div>
   	)
   }
}

export default Home;