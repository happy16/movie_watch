import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar";

class App extends Component {
	render() {
		return (
			<div className="body">
				<Sidebar />
				<p style={{ height: "100vh" }}>movie</p>
			</div>
		);
	}
}

export default App;
