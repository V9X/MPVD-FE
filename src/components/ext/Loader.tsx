import { createUseStyles } from "react-jss";

interface props {
  size: string;
  borderSize: string;
  exStyle?: React.CSSProperties;
}

const useStyle = createUseStyles({
  loader: (sp: props) => ({
    display: "flex",
    border: `${sp.borderSize} solid rgb(255, 255, 255, 0.5)`,
    borderTop: `${sp.borderSize} solid rgb(255, 255, 255, 0.2)`,
    borderRadius: "50%",
    width: sp.size,
    height: sp.size,
    animation: "$loaderSpin 2s linear infinite",
  }),

  "@keyframes loaderSpin": {
    from: {
      rotate: "0deg",
    },
    to: {
      rotate: "360deg",
    },
  },
});

function Loader(props: props) {
  const classes = useStyle(props);
  return <div className={classes.loader} style={props.exStyle} />;
}

export default Loader;
