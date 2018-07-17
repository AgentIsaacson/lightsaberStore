import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./homePage";
import Order from "./order";
import Confirm from "./confirm";

export default class Content extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/order" component={Order} />
				<Route path="/confirm" component={Confirm} />
			</Switch>
		);
	}
}
