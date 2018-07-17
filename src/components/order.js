import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CustomerInfo from "./customerInfo";
import Confirm from "./confirm";

const INITIAL_STATE = {
	fName: "",
	lName: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	saber: ""
};

export default class Order extends Component {
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
			<div className="order1">
				<div className="order">
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
					<label>Saber Color</label>
					<input
						name="saber"
						placeholder="Blue"
						value={this.state.saber}
						onChange={this.handleInputChange}
					/>
					<button onClick={() => this.setState(INITIAL_STATE)}>Submit</button>
				</div>
				<div className="confirm">
					<div>Thanks for your order!</div>
					<div>
						<label>First Name</label>
						<div className="label">{this.state.fName}</div>
						<label>Last Name</label>
						<div className="label">{this.state.lName}</div>
						<label>Address</label>
						<div className="label">{this.state.address}</div>
						<label>City</label>
						<div className="label">{this.state.city}</div>
						<label>State</label>
						<div className="label">{this.state.state}</div>
						<label>Zip</label>
						<div className="label">{this.state.zip}</div>
						<label>Saber Color</label>
						<div className="label">{this.state.saber}</div>
					</div>
				</div>
			</div>
		);
	}
}
