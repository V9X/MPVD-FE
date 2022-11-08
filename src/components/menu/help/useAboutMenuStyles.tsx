import { createUseStyles } from "react-jss"
import { Theme } from "../../../App";

interface styleProp {
  position: number;
}
const useStyle = createUseStyles((theme: Theme) => ({
  helpMenu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  inPageLinkContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    width: "100%",
    borderLeft: "solid 5px rgb(255, 255, 255, 0.5)",
    "& a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.fontMainColor,
      textDecoration: "none",
      width: "100%",
      height: 35,
      backgroundColor: "rgb(0, 0, 0, 0.1)",
    },
  },
  curOverlay: (sp: styleProp) => ({
    position: "absolute",
    width: "100%",
    height: 35,
    transition: "all 100ms",
    background: "rgb(0, 0, 0, 0.2)",
    borderLeft: "solid 5px rgb(255, 255, 255, 0.7)",
    pointerEvents: "none",
    top: sp.position * 35,
    right: 0,
  }),
}));

export default useStyle;