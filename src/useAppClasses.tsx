import { createUseStyles } from "react-jss"

const useStyle = createUseStyles({
  app: {
    position: "relative",
    minHeight: "600px",
    height: "100%",
    width: "100%",
    minWidth: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Century Gothic",
    backgroundImage:
      "linear-gradient(19deg, rgb(33, 212, 253) 0%, rgb(183, 33, 255) 100%)",
    WebkitTapHighlightColor: "transparent",
  },

  "@global": {
    "html, body, #root": {
      margin: 0,
      height: "100%",
    },
  },
});

export default useStyle