import React, { Component } from "react";
import SidebarButtons from "./SidebarButtons";
import {
	faHeart,
	faBookmark,
	faUser,
	faThumbsUp
} from "@fortawesome/free-regular-svg-icons";

class Sidebar extends Component {
	render() {
		const sidebarButtons = [
			{ label: "My Movies", icon: faHeart },
			{ label: "Watch List", icon: faBookmark },
			{ label: "Recommended", icon: faThumbsUp },
			{ label: "Profile", icon: faUser }
		];

		return (
			<div className="sidebarContainer">
				<h2>My Stuff</h2>
				{sidebarButtons.map(button => (
					<SidebarButtons
						key={button.label}
						label={button.label}
						icon={button.icon}
					/>
				))}
			</div>
		);
	}
}

export default Sidebar;
