import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
	// const video = props.video -  this is the same as passing in ({video}) in the component, instead of props
	const imageUrl = video.snippet.thumbnails.default.url
	return(
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">

				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;