import React, { Component } from "react";

import WatchListBox from "./WatchListBox";
import { stories } from "../../Data/Stories";

import "./WatchList.scss";

class WatchListContainer extends Component {
	render() {
		return (
			<div className="WatchList">
				<div className="WatchList-header">Watchlist</div>
				<div className="WatchList-list-holder">
					{stories.map((Story, i) => (
						<WatchListBox key={i} Story={Story} />
					))}
				</div>
			</div>
		);
	}
}

export default WatchListContainer;
