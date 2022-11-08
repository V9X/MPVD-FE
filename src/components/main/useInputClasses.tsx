import { createUseStyles } from "react-jss";
import { Theme } from "../../App";

interface StyleProp {
  isPageSupported: boolean;
  inputContent: string;
}

const useStyle = createUseStyles((theme: Theme) => ({
  form: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    height: 50,
    width: "100%",
    color: theme.fontMainColor,
    marginTop: "20px",
    marginBottom: "20px",
    transition: "all 0.2s",
    "&:focus-within": {
      transform: "scale(1.01, 1.01)",
    },
  },

  inputContainer: (sp: StyleProp) => ({
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,
    height: 50,
    transition: "border 0.3s",
    borderRadius:
      sp.inputContent === "" || !sp.isPageSupported
        ? "10px"
        : "10px 0px 0px 10px",
    border: `2px solid ${
      sp.isPageSupported ? "rgb(0, 0, 0, 0.3)" : "rgb(255, 0, 0, 0.5)"
    }`,
  }),

  invalidContainer: (sp: StyleProp) => ({
    display: "flex",
    position: "absolute",
    opacity: sp.isPageSupported ? 0 : 1,
    visibility: sp.isPageSupported ? "hidden" : "unset",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    right: 0,
    top: 0,
    width: 50,
    height: 50,
    "&:hover $invalidWindow": {
      visibility: "unset",
      opacity: 1,
    },
  }),
  invalidIcon: {
    width: 40,
    height: 40,
    "& path": {
      fill: "rgb(255, 0, 0, 0.5)",
    },
  },
  invalidWindow: {
    position: "absolute",
    visibility: "hidden",
    display: "flex",
    flexDirection: "column",
    opacity: 0,
    background: "rgb(0, 0, 0, 0.8)",
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: "auto",
    top: 55,
    right: 0,
    color: theme.fontMainColor,
    fontSize: "15px",
    transition: "opacity 0.5s",
  },

  input: {
    padding: "0px 50px 0px 20px",
    backgroundColor: "rgb(0, 0, 0, 0)",
    height: "100%",
    width: "100%",
    transitionDuration: "0.1s",
    color: theme.fontMainColor,
    border: "none",
    "&::placeholder": {
      color: "rgb(255, 255, 255, 0.5)",
    },
    "&:focus": {
      outline: "none",
    },
  },

  inputSubmit: {
    border: "2px solid rgb(0, 0, 0, 0.3)",
    backgroundColor: "rgb(0, 0, 0, 0)",
    borderLeft: "none",
    height: "100%",
    width: 80,
    borderRadius: "0px 10px 10px 0px",
    padding: 0,
    margin: 0,
    transition: "width 0.3s, backgroundColor 0.2s, color 0.2s",
    overflow: "hidden",
    "&:disabled": {
      width: "0",
      color: "transparent",
      border: "none",
    },
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 0.1)",
      cursor: "pointer",
    },
    "&:active": {
      width: "8%",
    },
  },
  searchIcon: {
    width: 30,
    height: 30,
    "& path": {
      fill: "rgb(255, 255, 255, 0.8)",
    },
  },
}));

export default useStyle;