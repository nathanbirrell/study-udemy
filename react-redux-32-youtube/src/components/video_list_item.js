import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const description = video.snippet.description;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object"/>
          <div className="media-body">
            <div className="media-heading">
              <h3 className="small"><a href="#"><strong>{title}</strong></a></h3>
            </div>
            <p className="small">{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
