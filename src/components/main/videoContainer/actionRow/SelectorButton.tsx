import { VideoStateContext } from "../../../Content";
import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../../../icons/ArrowDown.svg";
import { CSSTransition } from "react-transition-group";
import useSelectorButtonClasses from "./useSelectorButtonClasses";


function SelectorButton(props: { id: string }) {
  const vsCtx = React.useContext(VideoStateContext);
  const [selectorOpen, setSelectorOpen] = React.useState(false);
  const downloadUrls = vsCtx.vidState.vids[props.id].downloadUrls;
  const selectedQuality = downloadUrls[vsCtx.vidState.vids[props.id].selectedUrlIndex];

  const classes = useSelectorButtonClasses({
    selectorOpen: selectorOpen,
    optionsLength: downloadUrls.length,
  });

  return (
    <div className={classes.selectButton} onClick={() => { setSelectorOpen(!selectorOpen) }}>
      <span className={classes.span}>{`${selectedQuality.format} ${selectedQuality.quality}`}</span>
      <ArrowDownIcon className={classes.ArrowDownIcon} />
      <CSSTransition
        in={selectorOpen}
        unmountOnExit
        timeout={200}
        classNames={{ 
          enter: classes.selectorEnter, 
          enterActive: classes.selectorEnterActive, 
          exit: classes.selectorExit, 
          exitActive: classes.selectorExitActive 
        }}
      >
        <div className={classes.selector}>
          {downloadUrls.map((val, index) => {
            return (
              <button type="button" key={index} className={classes.item}
                onClick={() => { vsCtx.dispatchVidState({ setQuality: { id: props.id, selectedUrlIndex: index }})}}
              >
                <span style={{ marginRight: downloadUrls.length > 3 ? 7 : 15 }} className={classes.span}>{`${val.quality} ${val.format}`}</span>
              </button>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
}

export default SelectorButton;
