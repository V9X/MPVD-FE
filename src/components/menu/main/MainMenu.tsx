import React from "react";
import { VideoStateContext } from "../../Content";
import CheckBox from "../../ext/CheckBox";
import { ReactComponent as DownloadIcon } from "../../../icons/Download.svg";
import fileSaver from "file-saver";
import useMainMenuClasses from "./useMainMenuClasses";

interface OptState {
  selectAll: boolean;
  mp3: boolean;
  hq: boolean;
}

interface OptAction {
  selectAll?: boolean;
  mp3?: boolean;
  hq?: boolean;
}

function optionReducer(state: OptState, action: OptAction) {
  return {
    selectAll: action.selectAll
      ? !state.selectAll
      : action.selectAll === undefined
        ? state.selectAll
        : false,
    mp3: action.mp3 ? !state.mp3 : action.mp3 === undefined ? state.mp3 : false,
    hq: action.hq ? !state.hq : action.hq === undefined ? state.hq : false,
  };
}

function MainMenu() {
  const {vidState, dispatchVidState} = React.useContext(VideoStateContext);
  const [optState, dispatchOptState] = React.useReducer(optionReducer, { selectAll: false, mp3: false, hq: false });

  React.useEffect(() => {
    dispatchOptState({ selectAll: false, mp3: false, hq: false });
  }, [vidState.currentUrl]);

  let selectedInTotal: number = 0;

  Object.entries(vidState.vids).forEach(([_, vid]) => {
    if (vid.isSelected) selectedInTotal += 1;
  });
  

  function downloadVideos() {
    let success: string[] = [];
    let failure: string[] = [];

    Object.entries(vidState.vids).forEach(([id, video]) => {
      if (!video.isSelected) return;

      let downloadUrl: string;
      if (!optState.hq && !optState.mp3) downloadUrl = video.downloadUrls[video.selectedUrlIndex].url;
      if (optState.hq && !optState.mp3) downloadUrl = video.downloadUrls[0].url;
      if (optState.mp3) downloadUrl = video.downloadUrls[video.downloadUrls.length - 1].url;

      try {
        fileSaver(downloadUrl, video.title);
        success.push(id);
      } catch (e) {
        failure.push(id);
      }
    });
    success.length && dispatchVidState({ setStatus: { ids: success, status: "success" } });
    failure.length && dispatchVidState({ setStatus: { ids: failure, status: "failure" } });
  }

  const classes = useMainMenuClasses({
    isAnythingLoaded: Object.keys(vidState.vids).length > 0,
    isAnyVideoSelected: selectedInTotal > 0,
  });

  return (
    <div className={classes.mainMenu}>
      <div className={classes.bulkDownload}>
        <span className={classes.bdSpan}>Bulk download</span>
        <div className={classes.selboxContainer} onClick={() => {
            dispatchOptState({ selectAll: true });
            dispatchVidState({ toggleSelectAll: { currentState: optState.selectAll } });
          }}
        >
          <CheckBox checked={optState.selectAll} size={20} />
          <span>Select all</span>
        </div>
        <div className={classes.selboxContainer} onClick={() => { dispatchOptState({ hq: true }) }}>
          <CheckBox checked={optState.hq} size={20} />
          <span>Auto highest quality</span>
        </div>
        <div className={classes.selboxContainer} onClick={() => { dispatchOptState({ mp3: true }) }}>
          <CheckBox checked={optState.mp3} size={20} />
          <span>Auto mp3</span>
        </div>
        <button type="button" className={classes.downloadButton} onClick={downloadVideos}>
          <span>{`Download (${selectedInTotal})`}</span>
          <DownloadIcon />
        </button>
      </div>
    </div>
  );
}

export default MainMenu;
