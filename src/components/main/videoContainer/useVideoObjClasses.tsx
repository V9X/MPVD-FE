import { createUseStyles } from "react-jss";
import { Theme } from "../../../App";

interface StyleProp {
  status: "idle" | "downloading" | "success" | "failure";
}

const useStyle = createUseStyles((theme: Theme) => ({
  container: (sp: StyleProp) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexBasis: "calc(100% * (1/3) - 10px)",
    flexGrow: 1,
    height: 135,
    minWidth: 300,
    backgroundColor:
      sp.status === "idle"
        ? "rgb(0, 0, 0, 0.2)"
        : sp.status === "success"
        ? "rgb(75, 182, 67, 0.3)"
        : "rgb(255, 0, 0, 0.2)",
    borderRadius: 8,
    margin: 5,
    transition: "all 500ms",
  }),
  rContainer: {
    display: "flex",
    flexDirection: "row",
    height: 95,
    width: "100%",
  },
  thumbnailContainer: {
    position: "relative",
    height: "100%",
    overflow: "hidden",
    minWidth: "fit-content",
    userSelect: "none",
    color: theme.fontErrorColor,
    backgroundColor: "rgb(0, 0, 0, 0.2)"
  },
  thumbnail: {
    display: "block",
    width: "auto",
    maxWidth: 150,
    minWidth: 100,
    height: "100%",
  },
  length: {
    position: "absolute",
    bottom: "3%",
    right: "3%",
    padding: "1%",
    width: "auto",
    height: "auto",
    backgroundColor: "black",
    color: theme.fontMainColor,
    fontSize: 20,
  },
  linksContainer: {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    padding: 10,
    width: "100%",
    height: "100%",
    color: theme.fontMainColor,
    overflow: "hidden",
    "& a:nth-child(1)": {
      fontSize: 16,
    },
    "& a:nth-child(2)": {
      fontSize: 12,
    },
    "@media only screen and (max-width: 400px)": {
      "& a:nth-child(1)": {
        fontSize: 14,
      },
      "& a:nth-child(2)": {
        fontSize: 10,
      },
    },
  },
  links: {
    marginBottom: 5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineClamp: 2,
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    width: "auto",
    color: theme.fontLinkColor,
    textDecoration: "none",
    "&:hover": {
      filter: "brightness(130%)",
    },
  },
}));

export default useStyle;
