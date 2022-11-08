import React from "react";
import ActionRow from "./actionRow/ActionRow";
import { VideoStateContext } from "../../Content";
import useVideoObjClasses from "./useVideoObjClasses";

interface video {
  id: string;
  url: string;
  thumbnail?: string;
  length: number;
  title: string;
  author?: {
    name: string;
    url: string;
  };
  downloadUrls: {
    url: string;
    format: string;
    quality: string;
  }[];
}

interface props {
  id: string;
  video: video;
}

function Video(props: props) {
  const {vidState, dispatchVidState} = React.useContext(VideoStateContext);
  const status = vidState.vids[props.id].status;
  const classes = useVideoObjClasses({ status });

  return (
    <div className={classes.container}>
      <div className={classes.rContainer}>
        <div className={classes.thumbnailContainer}>
          <img src={props.video.thumbnail} className={classes.thumbnail} alt={"Thumbnail unavaible"}/>
          <span className={classes.length}>{new Date(props.video.length * 1000).toISOString().substring(11, 19)}</span>
        </div>
        <div className={classes.linksContainer}>
          <a className={classes.links} href={props.video.url} target="_blank" rel="noreferrer noopener">
            {props.video.title || "unknown title"}
          </a>
          <a className={classes.links} href={props.video.author?.url} target="_blank" rel="noreferrer noopener">
            {props.video.author?.name || "author unknown"}
          </a>
        </div>
      </div>
      <ActionRow id={props.id} />
    </div>
  );
}

export default Video;
