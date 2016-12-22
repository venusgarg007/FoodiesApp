import 'file?name=[name].[ext]!../index.html';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute} = require('react-router');

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import registrationAndLogin from './components/registrationAndLogin.jsx';

class MainComponent extends React.Component {

	render() {
		return (
		<div>
		<NavBar/>
		<br/><br/><br/><br/>
		{this.props.children}
		</div>
		)
	}
}
ReactDOM.render(
	<Router history={browserHistory}>
	<Route path="/" component={MainComponent} >
		<IndexRoute component = {registrationAndLogin} />
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
	</Route>

</Router>,document.getElementById('content'));
