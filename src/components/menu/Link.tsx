import { createUseStyles } from "react-jss";
import { Theme } from "../../App";

const useStyle = createUseStyles((theme: Theme) => ({
  link: {
    boxSizing: "border-box",
    padding: 10,
    height: 40,
    display: "flex",
    fontSize: 15,
    textDecoration: "none",
    width: "100%",
    "&:hover": {
      backgroundColor: "rgb(255, 255, 255, 0.1)",
    },
    "& > svg": {
      width: 20,
      height: 20,
      marginLeft: "auto",
    },
  },
  span: {
    whiteSpace: "nowrap",
    color: theme.fontLinkColor,
  },
}));

interface Props {
  url: string;
  text: string;
  children: React.ReactNode;
}

function Link(porps: Props) {
  const classes = useStyle();

  return (
    <a className={classes.link} href={porps.url} target="_blank" rel="noreferrer noopener">
      <span className={classes.span}>{porps.text}</span>
      {porps.children}
    </a>
  );
}

export default Link;