import React from "react";
import { CurrentScrollPositionContext } from "../../Content";
import useAboutMenuStyles from "./useAboutMenuStyles"

function AboutMenu() {
  const {position, setPosition} = React.useContext(CurrentScrollPositionContext);
  const classes = useAboutMenuStyles({ position: position });

  return (
    <div className={classes.helpMenu}>
      <div className={classes.inPageLinkContainer} id="sidemLC1">
        <div className={classes.curOverlay} />
        <a href="#N1">Preview Mode</a>
        <a href="#N2">example heading 1</a>
        <a href="#N3">example heading 2</a>
      </div>
    </div>
  );
}

export default AboutMenu;
