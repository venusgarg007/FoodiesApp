var React = require('react');
export default class About extends  React.Component{

	render()
	{
		return(
		<div className="container-fluid">
		<div className="row">
		<div className="col-md-12">
		<div className="jumbotron">
		<h2>
		About Us
		</h2>
		<p>
		We are here to help you search for the restaurants in your favourite city and with your favourite food.
		</p>
		<p>
		<a className="btn btn-primary btn-medium" target="_blank" href="https://www.zomato.com/bangalore">Learn more</a>
		</p>
		</div>
		</div>
		</div>
		</div>
		);
	}
}
