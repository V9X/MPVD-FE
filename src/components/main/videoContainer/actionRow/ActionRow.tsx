import React from "react";
import { VideoStateContext } from "../../../Content";
import CheckBox from "../../../ext/CheckBox";
import { ReactComponent as DownloadIcon } from "../../../../icons/Download.svg";
import SelectorButton from "./SelectorButton";
import fileSaver from "file-saver";
import useActionRowClasses from "./useActionRowClasses";


function ActionRow(props: { id: string }) {
  const {vidState, dispatchVidState} = React.useContext(VideoStateContext);

  const downloadVideo = React.useCallback(() => {
    const downloadUrl = vidState.vids[props.id].downloadUrls[vidState.vids[props.id].selectedUrlIndex].url;
    try {
      fileSaver(downloadUrl, vidState.vids[props.id].title);
      dispatchVidState({ setStatus: { ids: [props.id], status: "success" } });
    } catch {
      dispatchVidState({ setStatus: { ids: [props.id], status: "failure" } });
    }
  }, []);

  const handleCheckBoxClick = React.useCallback(() => {
    dispatchVidState({ toggleSelect: { id: props.id } });
  }, [dispatchVidState])

  const classes = useActionRowClasses();

  return (
    <div className={classes.actionRow}>
      <button type="button" className={classes.downloadButton} onClick={downloadVideo}>
        <span>Download</span>
        <DownloadIcon className={classes.downloadIcon} />
      </button>
      <SelectorButton id={props.id} />
      <CheckBox
        onClick={handleCheckBoxClick}
        checked={vidState.vids[props.id].isSelected}
        size={30}
      />
    </div>
  );
}

export default ActionRow;
