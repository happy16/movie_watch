import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faHeart,
// 	faBookmark,
// 	faHandHoldingHeart,
// 	faUser
// } from "@fortawesome/free-regular-svg-icons";

function SidebarButtons(props) {
	return (
		<div>
			<button className="sidebarButtons">
				{props.label}
				<FontAwesomeIcon icon={props.icon} />
				{/* <FontAwesomeIcon icon={faBookmark} /> */}
			</button>
		</div>
	);
}

export default SidebarButtons;
