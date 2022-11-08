import React from "react";
import Input from "./Input";
import VideoContainer from "./videoContainer/VideoContainer";
import { VideoStateContext } from "../Content";
import useMainClasses from "./useMainClasses";


function Main() {
  const videoStateContext = React.useContext(VideoStateContext);
  const classes = useMainClasses();

  return (
    <div className={classes.main}>
      <Input />
      <div className={classes.container}>
        {
          videoStateContext.vidState.currentUrl.length > 0 
            ? <VideoContainer /> 
            : <span className={classes.span}>Paste your url in the search bar above</span>
        }
      </div>
    </div>
  );
}
export default Main;
