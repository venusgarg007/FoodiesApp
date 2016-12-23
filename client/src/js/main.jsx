import 'file?name=[name].[ext]!../index.html';
import 'file?name=[name].[ext]!../css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory, Route, Router, IndexRoute}
= require('react-router');

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import FetchFavouritecomponent from './components/FetchFavouritecomponent';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';

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
		<IndexRoute component = {Login} />
		<Route path="/home" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/login" component={Login}/>
		<Route path="/contact" component={Contact}/>
		<Route path="/favrestaurants" component={FetchFavouritecomponent}/>
	</Route>

</Router>,document.getElementById('content'));
