import { createUseStyles } from "react-jss";
import { Theme } from "../../../App";

const useStyle = createUseStyles((theme: Theme) => ({
  errorContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    color: theme.fontErrorColor,
    textAlign: "center",
    borderRadius: 15,
    margin: "1%",
    "& span:nth-child(1)": {
      fontSize: 30,
      padding: 10,
    },
    "& span:nth-child(2)": {
      fontSize: 20,
      padding: 10,
    },
  },
}));

export default useStyle;