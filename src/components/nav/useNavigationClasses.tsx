import { createUseStyles } from "react-jss";
import { Theme } from "../../App";

interface styleProp {
  position: number;
}

const useStyle = createUseStyles((theme: Theme) => ({
  navigation: {
    display: "flex",
    height: 80,
    flexShrink: 0,
    width: "100%",
    backgroundColor: theme.background,
    borderBottom: "1px solid rgb(0, 0, 0, 0.3)",
    overflow: "auto",
  },
  plWrapper: {
    display: "flex",
    marginLeft: "1%",
    marginRight: 50,
  },
  pageLogo: {
    display: "flex",
    width: 210,
    flexDirection: "column",
    color: theme.fontMainColor,
    justifyContent: "center",
    alignItems: "flex-start",
    whiteSpace: "nowrap",
    "& span:nth-child(1)": {
      fontSize: "30px",
    },
    "& span:nth-child(2)": {
      fontSize: "14px",
    },
  },
  linkContainer: {
    position: "relative",
    display: "flex",
    flexGrow: 1,
    overflow: "auto",
    alignItems: "center",
  },

  link: {
    display: "flex",
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    color: theme.fontMainColor,
    height: "100%",
    width: 150,
    fontSize: 25,
    textDecoration: "none",
    transitionDuration: "0.2s",
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 0.1)",
    },
  },
  linkCurrent: {
    pointerEvents: "none",
  },

  currentlySelected: (sp: styleProp) => ({
    boxSizing: "border-box",
    position: "absolute",
    pointerEvents: "none",
    width: 150,
    height: "100%",
    transitionDuration: "200ms",
    left: `calc(150px * ${sp.position})`,
    borderBottom: "2px solid rgb(0, 0, 0, 0.5)",
  }),

  "@media only screen and (max-width: 700px)": {
    navigation: {
      flexDirection: "column",
      height: 100,
    },
    plWrapper: {
      marginInline: 0,
      marginTop: 2,
      marginBottom: 8,
      width: "100%",
    },
    pageLogo: {
      marginLeft: "calc(50% - 105px)",
      alignItems: "center",
      "& span:nth-child(1)": {
        fontSize: 30,
      },
      "& span:nth-child(2)": {
        fontSize: 12,
      },
    },
    link: {
      width: 100,
      fontSize: 20,
    },
    currentlySelected: (sp: styleProp) => ({
      width: "100px !important",
      left: `calc(100px * ${sp.position}) !important`,
    }),
  },
}));

export default useStyle;
