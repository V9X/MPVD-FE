import { createUseStyles } from "react-jss";
import { Theme } from "../../../../App";

const useStyle = createUseStyles((theme: Theme) => ({
  actionRow: {
    display: "flex",
    backgroundColor: "rgb(0, 0, 0, 0.1)",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  downloadButton: {
    boxSizing: "border-box",
    display: "flex",
    marginInline: 5,
    paddingInline: 5,
    width: 100,
    height: 30,
    border: "none",
    borderRadius: 4,
    backgroundColor: "rgb(0, 0, 0, 0.3)",
    color: theme.fontLinkColor,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 13,
    fontFamily: "Century Gothic",
    transition: "all 100ms",
    userSelect: "none",
    "&:hover": {
      filter: "brightness(2)",
    },
    "&:active": {
      transform: "scale(0.95)",
    },
  },
  downloadIcon: {
    marginLeft: "auto",
    width: 15,
    height: 15,
    fill: theme.fontLinkColor,
  },
}));

export default useStyle;