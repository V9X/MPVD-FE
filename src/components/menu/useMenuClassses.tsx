import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  menu: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "auto",
    maxHeight: "100%",
    width: 250,
    flexShrink: 0,
    background: "rgb(0, 0, 0, 0.3)",
    overflow: "hidden",
  },
  closeMenu: {
    position: "absolute",
    height: "100%",
    width: "calc(100% - 250px)",
    bottom: 0,
    left: 0,
    zIndex: 420,
  },
  menuContentContainer: {
    position: "relative",
    margin: 10,
    flexGrow: 1,
    width: "calc(100% - 20px)",
    overflow: "hidden",
  },
  sepDiv: {
    width: "100%",
    marginTop: "auto",
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    height: 2,
  },

  linkContainer: {
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 20px)",
    height: "auto",
    margin: 10,
    flexShrink: 0,
    borderRadius: 10,
    background: "rgb(0, 0, 0, 0.2)",
    overflow: "hidden",
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

  menuEnter: { width: 0 },
  menuEnterActive: { width: 250, transition: "all 300ms" },
  menuExit: { width: 250 },
  menuExitActive: { width: 0, transition: "all 300ms" },
});

export default useStyle;