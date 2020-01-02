import React, { useState } from "react";

import Logo from "../../Images/logo.png";
import User from "../../Images/User.png";
import DownArrow from "../../Images/DownArrow.png";

import "./Header.scss";

const Header = () => {
	const [userMenu, setUserMenu] = useState(false);

	const updateUserMenu = () => {
		setUserMenu(!userMenu);
	};

	return (
		<header className="header">
			<div className="mobile-menu">
				<div/>
				<div/>
				<div/>
			</div>
			<div className="header-logo">
				<img alt="" src={Logo} height="30px" />
			</div>
			<div
				className={`header-user ${userMenu ? "header-user-open" : ""}`}
				onClick={updateUserMenu}
			>
				<img alt="" src={User} height="35px" />
				<div className="header-username">
					<span className="name">
						Jane Doe
					</span>
					<img
						className="header-user-arrow"
						alt=""
						src={DownArrow}
						height="7px"
					/>
				</div>
				{userMenu ? (
					<div className="header-user-menu">
						<div className="header-user-menu-item">Sign Out</div>
					</div>
				) : null}
			</div>
		</header>
	);
};

export default Header;
