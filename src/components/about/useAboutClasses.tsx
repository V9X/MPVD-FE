import { createUseStyles } from "react-jss";
import { Theme } from "../../App";

const useStyle = createUseStyles((theme: Theme) => ({
  about: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 30px)",
    flexGrow: 1,
    color: theme.fontMainColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  contentContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    width: "80%",
    height: "100%",
    paddingInline: 40,
    overflowY: "auto",
    fontSize: 19,
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgb(0, 0, 0, 0.5)",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgb(0, 0, 0, 0.3)",
    },
    "& h1": {
      fontSize: 30,
      marginTop: 20,
      marginBottom: 10,
    },
    "& a": {
      textDecoration: "none",
      color: theme.fontLinkColor,
    },
  },
}));

export default useStyle