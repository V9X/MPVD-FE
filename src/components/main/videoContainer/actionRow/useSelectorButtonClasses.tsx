import { createUseStyles } from "react-jss";
import { Theme } from "../../../../App";

interface StyleProp {
  selectorOpen: boolean;
  optionsLength: number;
}

const useStyle = createUseStyles((theme: Theme) => ({
  selectButton: (sp: StyleProp) => ({
    position: "relative",
    display: "flex",
    boxSizing: "border-box",
    flexGrow: 1,
    marginInline: 5,
    paddingInline: 6,
    height: 30,
    border: "none",
    borderRadius: 4,
    borderBottomLeftRadius: sp.selectorOpen ? 0 : 4,
    borderBottomRightRadius: sp.selectorOpen ? 0 : 4,
    backgroundColor: "rgb(0, 0, 0, 0.3)",
    color: theme.fontLinkColor,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 15,
    userSelect: "none",
    transition: "all 100ms",
  }),
  ArrowDownIcon: (sp: StyleProp) => ({
    fill: theme.fontLinkColor,
    height: 15,
    width: 15,
    transition: "all 300ms",
    transform: sp.selectorOpen ? "rotate(180deg)" : "",
  }),
  span: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  selector: {
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2,
    position: "absolute",
    width: "100%",
    top: 30,
    left: 0,
    height: "auto",
    maxHeight: 90,
    cursor: "default",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "8px",
      background: "rgb(0, 0, 0, 0.4)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "rgb(255, 255, 255, 0.5)",
      borderRadius: 10,
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgb(255, 255, 255, 0.6)",
    },
  },
  selectorEnter: {
    height: 0,
  },
  selectorEnterActive: (sp: StyleProp) => ({
    transition: "all 200ms",
    height: 90,
    overflow: sp.optionsLength <= 3 ? "hidden" : "auto",
  }),
  selectorExit: {
    height: 90,
  },
  selectorExitActive: (sp: StyleProp) => ({
    transition: "all 200ms",
    height: 0,
    overflow: sp.optionsLength <= 3 ? "hidden" : "auto",
  }),
  item: {
    display: "flex",
    boxSizing: "border-box",
    fontFamily: "Century Gothic",
    border: "none",
    color: theme.fontLinkColor,
    fontSize: 15,
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    paddingInline: 6,
    flexGrow: 1,
    minHeight: 30,
    maxHeight: 30,
    background: "rgb(0, 0, 0, 0.9)",
    "&:hover": {
      background: "rgb(50, 50, 50, 0.9)",
    },
  },
}));

export default useStyle;