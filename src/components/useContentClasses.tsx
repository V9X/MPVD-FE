import { createUseStyles } from "react-jss";
import { Theme } from "../App";

const useStyle = createUseStyles((theme: Theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    width: "calc(100% - 40px)",
    height: "calc(100% - 40px)",
    color: "white",
    borderRadius: "10px",
    backdropFilter: "blur(5px)",
    boxShadow: "0px 0px 10px 0px black",
    overflow: "hidden",
  },
  pageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    backgroundColor: theme.background,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  pageWrapper: {
    boxSizing: "border-box",
    position: "relative",
    marginInline: "1%",
    transition: "all 300ms",
    flexGrow: 1,
  },
  routeEnter: {
    position: "absolute",
    width: "100%",
    opacity: 0,
  },
  routeEnterActive: {
    position: "absolute",
    width: "100%",
    opacity: 1,
    transition: "all 200ms",
  },
  routeExit: {
    position: "absolute",
    width: "100%",
    opacity: 1,
  },
  routeExitActive: {
    position: "absolute",
    width: "100%",
    opacity: 0,
    transition: "all 200ms",
  },
  "@media only screen and (max-width: 700px)": {
    pageWrapper: {
      minWidth: "calc(100% - 2%)",
    },
  },
  "@media only screen and (max-width: 700px), screen and (max-height: 600px)": {
    content: {
      width: "100%",
      height: "100%",
      margin: 0,
      boxShadow: "none",
      borderRadius: 0,
    },
  },
}));

export default useStyle;