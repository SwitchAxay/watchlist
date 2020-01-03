import React, { useState } from "react";
import ReactTimeAgo from "react-timeago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faBookmark
} from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const WatchListBox = ({ Story }) => {
	const [isSubDetailsOpen, setIsSubDetailsOpen] = useState(false);

	const showHideDetailsBox = () => {
		setIsSubDetailsOpen(!isSubDetailsOpen);
	};

	const stopShowHideDetailsBox = e => {
		e.stopPropagation();
	};

	return (
		<div className="WatchList-box">
			<div className="WatchList-box-main" onClick={showHideDetailsBox}>
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
						<a
							target="_blank"
							href={Story.url}
							rel="noopener noreferrer"
							onClick={stopShowHideDetailsBox}
						>
							{Story.title}
						</a>
					</div>
					<div className="WatchList-sub-details">
						<div>
							{Story.domain_name}
							<span className="WatchList-sub-time">
								<ReactTimeAgo date={new Date(Story.publishTime)} />
							</span>
						</div>

						{!isSubDetailsOpen ? (
							<div className="WatchList-box-arrow-small">
								<div className="arrow-small">
									More
									<FontAwesomeIcon
										icon={faChevronDown}
										style={{
											fontSize: "12px",
											color: "#3971c1",
											marginLeft: "5px",
											marginTop: "2px"
										}}
									/>
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
					<div className="WatchList-box-arrow">
						<FontAwesomeIcon
							icon={isSubDetailsOpen ? faChevronUp : faChevronDown}
							style={{ fontSize: "15px", color: "#d2d2d2" }}
						/>
					</div>
				</div>
			</div>
			{isSubDetailsOpen ? (
				<div className="WatchList-box-arrow-small">
					<div className="arrow-small">
						Less
						<FontAwesomeIcon
							icon={faChevronUp}
							style={{
								fontSize: "12px",
								color: "#3971c1",
								marginLeft: "5px",
								marginTop: "2px"
							}}
						/>
					</div>
				</div>
			) : null}
			{isSubDetailsOpen ? (
				<div className="WatchList-box-sub">
					<div className="bookmark">
						<FontAwesomeIcon icon={faBookmark} style={{ fontSize: "14px" }} />
						<div>Bookmark</div>
					</div>
					<div className="like">
						<FontAwesomeIcon icon={faThumbsUp} style={{ fontSize: "14px" }} />
						<div>Like</div>
					</div>
					<div className="dis-like">
						<FontAwesomeIcon icon={faThumbsDown} style={{ fontSize: "14px" }} />
						<div>Dislike</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default WatchListBox;
