import { createUseStyles } from "react-jss";
import { Theme } from "../../../App";


interface StyleProp {
  isAnythingLoaded: boolean;
  isAnyVideoSelected: boolean;
}

const useStyle = createUseStyles((theme: Theme) => ({
  mainMenu: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignItems: "center",
    color: theme.fontMainColor,
    overflow: "hidden",
  },
  bulkDownload: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(0, 0, 0, 0.1)",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bdSpan: {
    whiteSpace: "nowrap",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: 30,
    fontSize: 18,
    borderBottom: "1px solid rgb(0, 0, 0, 0.2)",
  },
  selboxContainer: (sp: StyleProp) => ({
    transition: "all 100ms",
    cursor: "pointer",
    pointerEvents: sp.isAnythingLoaded ? "" : "none",
    opacity: sp.isAnythingLoaded ? "" : "0.5",
    paddingTop: 5,
    paddingBottom: 5,
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    height: 20,
    "& > span": {
      userSelect: "none",
      whiteSpace: "nowrap",
      fontSize: 15,
      marginInline: 5,
    },
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 0.1)",
    },
  }),
  downloadButton: (sp: StyleProp) => ({
    display: "flex",
    flexGrow: 1,
    height: 40,
    alignItems: "center",
    paddingInline: 20,
    margin: 5,
    marginTop: 20,
    marginBottom: 0,
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    opacity: sp.isAnyVideoSelected ? "" : "0.5",
    pointerEvents: sp.isAnyVideoSelected ? "" : "none",
    color: theme.fontMainColor,
    fontFamily: "Century Gothic",
    transition: "all 100ms",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 0.3)",
    },
    "& > span": {
      whiteSpace: "nowrap",
      fontSize: 18,
    },
    "& > svg": {
      marginLeft: "auto",
      fill: theme.fontMainColor,
      height: 20,
      width: 20,
    },
  }),
  dbEnter: {
    transform: "translateX(-100%)",
  },
  dbEnterActive: {
    transform: "translateY(0)",
    transition: "all 200ms",
  },
  dbExit: {
    transform: "translateY(0)",
  },
  dbExitActive: {
    transform: "translateX(100%)",
    transition: "all 200ms",
  },
}));

export default useStyle;