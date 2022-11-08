import { createUseStyles } from "react-jss";
import { Theme } from "../../App";

const useStyle = createUseStyles((theme: Theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flexGrow: 1,
    color: theme.fontMainColor,
    alignItems: "center",
  },
  container: {
    position: "relative",
    boxSizing: "border-box",
    display: "flex",
    flexGrow: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: theme.background,
    borderRadius: 5,
    overflowY: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
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
  },
  span: {
    alignSelf: "center",
    color: theme.fontMainColor,
    fontSize: "20px",
    margin: 10,
  },
}));

export default useStyle;
