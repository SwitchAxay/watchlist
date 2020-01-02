import React, { useState } from "react";

import Like from "../../Images/Like.png";
import Dislike from "../../Images/Dislike.png";
import DownArrowBorder from "../../Images/DownArrowBorder.png";
import DownArrowBorderColor from "../../Images/DownArrowBorderColor.png";

const WatchListBox = ({ Story }) => {
	const [isSubDetailsOpen, setIsSubDetailsOpen] = useState(false);

	const showHideDetailsBox = () => {
		setIsSubDetailsOpen(!isSubDetailsOpen);
	};

	return (
		<div className="WatchList-box">
			<div className="WatchList-box-main">
				<div className="WatchList-box-logo">
					<img
						alt=""
						src={Story.domain_cached_logo_url}
						height="34px"
						width="34px"
					/>
				</div>
				<div className="WatchList-box-details">
					<div className="WatchList-title">
						<a target="_blank" href={Story.url} rel="noopener noreferrer">
							{Story.title}
						</a>
					</div>
					<div className="WatchList-sub-details">
						<div>
							{Story.domain_name}
							<span className="WatchList-sub-time">22 hours ago</span>
						</div>

						{!isSubDetailsOpen ? (
							<div className="WatchList-box-arrow-small">
								<div className="arrow-small" onClick={showHideDetailsBox}>
									More
									<img alt="" src={DownArrowBorderColor} />
								</div>
							</div>
						) : null}
					</div>
					{isSubDetailsOpen ? (
						<div className="WatchList-desc">{Story.description}</div>
					) : null}
				</div>
				<div className="WatchList-box-right">
					<div className="WatchList-box-perc">{Story.score || "0"}%</div>
					<div
						className={`WatchList-box-arrow ${
							isSubDetailsOpen ? "WatchList-box-arrow-open" : ""
						}`}
					>
						<img
							className="arrow"
							alt=""
							src={DownArrowBorder}
							width="15px"
							onClick={showHideDetailsBox}
						/>
					</div>
				</div>
			</div>
			{isSubDetailsOpen ? (
				<div className="WatchList-box-arrow-small">
					<div className="arrow-small" onClick={showHideDetailsBox}>
						Less
						<img alt="" src={DownArrowBorderColor} />
					</div>
				</div>
			) : null}
			{isSubDetailsOpen ? (
				<div className="WatchList-box-sub">
					<div className="bookmark">
						<img alt="" src={Like} height="14px" />
						<div>Bookmark</div>
					</div>
					<div className="like">
						<img alt="" src={Like} height="14px" />
						<div>Like</div>
					</div>
					<div className="dis-like">
						<img alt="" src={Dislike} height="14px" />
						<div>Dislike</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default WatchListBox;
