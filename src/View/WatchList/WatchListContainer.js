import React, { Component } from "react";

import WatchList from "./WatchList";

import "./WatchList.scss";

import { stories } from "../../Data/Stories";

class WatchListContainer extends Component {
	render() {
		return <WatchList Stories={stories} />;
	}
}

export default WatchListContainer;
