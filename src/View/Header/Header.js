import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../Images/logo.png";
import User from "../../Images/User.png";

import "./Header.scss";

const Header = () => {
	const [userMenu, setUserMenu] = useState(false);

	const updateUserMenu = () => {
		setUserMenu(!userMenu);
	};

	const useOutsideAlerter = ref => {
		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setUserMenu(false);
			}
		};

		useEffect(() => {
			document.addEventListener("mousedown", handleClickOutside);
			return () => {
				document.removeEventListener("mousedown", handleClickOutside);
			};
		});
	};

	const wrapperRef = useRef(null);
	useOutsideAlerter(wrapperRef);

	return (
		<header className="header">
			<div className="mobile-menu">
				<div />
				<div />
				<div />
			</div>
			<div className="header-logo">
				<img alt="" src={Logo} height="30px" />
			</div>
			<div
				ref={wrapperRef}
				className={`header-user ${userMenu ? "header-user-open" : ""}`}
				onClick={updateUserMenu}
			>
				<img alt="" src={User} height="35px" />
				<div className="header-username">
					<span className="name">Jane Doe</span>
					<FontAwesomeIcon
						icon={userMenu ? faSortUp : faSortDown}
						style={{
							fontSize: "14px",
							marginLeft: "5px"
						}}
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
