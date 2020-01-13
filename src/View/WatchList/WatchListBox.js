import React, { useState } from "react";
import ReactTimeAgo from "react-timeago";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faThumbsUp,
	faThumbsDown,
	faBookmark
} from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { stories } from "../../Data/Stories";

import "./WatchList.scss";

const WatchListBox = ({ Story }) => {
	const [isSubDetailsOpen, setIsSubDetailsOpen] = useState(false);

	const showHideDetailsBox = () => {
		setIsSubDetailsOpen(!isSubDetailsOpen);
	};

	const stopShowHideDetailsBox = e => {
		e.stopPropagation();
	};

	return (
		<div className="watchList-box">
			<div className="watchList-box-main" onClick={showHideDetailsBox}>
				<div className="watchList-box-logo">
					<img
						alt=""
						src={Story.domain_cached_logo_url}
						height="34px"
						width="34px"
					/>
				</div>
				<div className="watchList-box-details">
					<div className="watchList-title">
						<a
							target="_blank"
							href={Story.url}
							rel="noopener noreferrer"
							onClick={stopShowHideDetailsBox}
						>
							{Story.title}
						</a>
					</div>
					<div className="watchList-sub-details">
						<div>
							{Story.domain_name}
							<span className="watchList-sub-time">
								<ReactTimeAgo date={new Date(Story.publishTime)} />
							</span>
						</div>

						{!isSubDetailsOpen ? (
							<div className="watchList-box-arrow-small">
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
						<div className="watchList-desc">{Story.description}</div>
					) : null}
				</div>
				<div className="watchList-box-right">
					<div className="watchList-box-perc">{Story.score || "0"}%</div>
					<div className="watchList-box-arrow">
						<FontAwesomeIcon
							icon={isSubDetailsOpen ? faChevronUp : faChevronDown}
							style={{ fontSize: "15px", color: "#d2d2d2" }}
						/>
					</div>
				</div>
			</div>
			{isSubDetailsOpen ? (
				<div className="watchList-box-arrow-small">
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
				<div className="watchList-box-sub">
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

const WatchListContainer = () => {
	return (
		<div className="watchList">
			<div className="watchList-header">Watchlist</div>
			<div className="watchList-list-holder">
				{stories.map((Story, i) => (
					<WatchListBox key={i} Story={Story} />
				))}
			</div>
		</div>
	);
};

export default WatchListContainer;
