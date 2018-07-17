import React, { Component } from "react";
import Navbar from "./navbar";
import Content from "./content";

export default class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Content />
			</div>
		);
	}
}
