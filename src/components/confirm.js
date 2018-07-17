import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Confirm extends Component {
   render() {
		return (
			<div className="confirm">
				<div>Thanks for your order!</div>
				<div>
                    <label>First Name</label> 
					<div>{this.state.fName}</div>
					<label>Last Name</label>
					{/* <div>{this.state.lName}</div> */}
					<label>Address</label>
					{/* <div>{this.state.address}</div> */}
					<label>City</label>
					{/* <div>{this.state.city}</div> */}
					<label>State</label>
					{/* <div>{this.state.state}</div> */}
					<label>Zip</label>
					{/* <div>{this.state.zip}</div> */}
				</div>
                <NavLink to="/order" className="link">Go Back</NavLink>
			</div>
		);
	}
}
