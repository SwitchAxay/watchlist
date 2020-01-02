import React from "react";

import WatchListBox from './WatchListBox';

const WatchList = (props) => {
	return (
		<div className="WatchList">
			<div className="WatchList-header">Watchlist</div>
			<div className="WatchList-list-holder">
				{
					props.Stories.map((Story, i) => (
                        <WatchListBox key={i} Story={Story} />
					))
				}
			</div>
		</div>
	);
};

export default WatchList;
