import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const INITIAL_STATE = {
	fName: "",
	lName: "",
	address: "",
	city: "",
	state: "",
	zip: ""
};

export default class CustomerInfo extends Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
			<div>
				<label>First Name</label>
				<input
					name="fName"
					placeholder="Caleb"
					value={this.state.fName}
					ref={this.props.fName}
					onChange={this.handleInputChange}
				/>
				<label>Last Name</label>
				<input
					name="lName"
					placeholder="Isaacson"
					value={this.state.lName}
					onChange={this.handleInputChange}
				/>
				<label>Address</label>
				<input
					name="address"
					placeholder="1234 Main Street"
					value={this.state.address}
					onChange={this.handleInputChange}
				/>
				<label>City</label>
				<input
					name="city"
					placeholder="Cool Town"
					value={this.state.city}
					onChange={this.handleInputChange}
				/>
				<label>State</label>
				<input
					name="state"
					placeholder="UT"
					value={this.state.state}
					onChange={this.handleInputChange}
				/>
				<label>Zip</label>
				<input
					name="zip"
					placeholder="84HeckYeah5"
					value={this.state.zip}
					onChange={this.handleInputChange}
				/>
				<input type="submit"></input>
			</div>
		);
	}
}
