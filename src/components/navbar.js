import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar" >
				<NavLink to="/" className="link">Home</NavLink>
				<NavLink to="/order" className="link">Order</NavLink>
			</div>
		);
	}
}
