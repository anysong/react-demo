import React from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router, 
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';

// 页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';


class App extends React.Component {
    render() {
        return (
        	<Router>
        		<Switch>
        			<Route path="/login" component={Login} />
        			<Route path="/" render={(props) => (
        				<Layout>
			        		<Switch>
			    				<Route exact path="/" component={Home} />
			    				<Redirect from="*" to="/" />
			        		</Switch>
		        		</Layout>
        			)} />
        		</Switch>
        	</Router>
        )
    }
}

ReactDOM.render( 
	<App />,	
    document.getElementById('app')
)





