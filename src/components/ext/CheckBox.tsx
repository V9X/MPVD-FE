import { createUseStyles } from "react-jss";
import { ReactComponent as CheckedIcon } from "../../icons/Checked.svg";

interface styleProp {
  size: number;
  pointerEvents: boolean;
}

const useStyle = createUseStyles({
  checkBoxContainer: (sp: styleProp) => ({
    position: "relative",
    cursor: "pointer",
    marginInline: 5,
    width: sp.size,
    height: sp.size,
    transition: "all 200ms",
    pointerEvents: sp.pointerEvents ? "" : "none",
  }),
  checkBoxHidden: {
    opacity: 0,
    cursor: "pointer",
    height: 0,
    width: 0,
    "&:checked + $checkBox": {
      backgroundColor: "rgb(0, 0, 0, 0.3)",
    },
    "&:checked ~ $checkedIcon": {
      "& path": {
        fill: "white",
      },
    },
  },
  checkBox: {
    boxSizing: "border-box",
    border: "2px solid rgb(0, 0, 0, 0.5)",
    position: "absolute",
    backgroundColor: "transparent",
    transition: "all 200ms",
    borderRadius: 4,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  checkedIcon: {
    position: "absolute",
    top: "20%",
    left: "20%",
    width: "60%",
    height: "60%",
    "& path": {
      transition: "all 200ms",
      fill: "transparent",
    },
  },
});

interface props {
  onClick?: () => void;
  checked: boolean;
  size: number;
}

function CheckBox(props: props) {
  const classes = useStyle({
    size: props.size,
    pointerEvents: Boolean(props.onClick),
  });

  return (
    <label className={classes.checkBoxContainer}>
      <input className={classes.checkBoxHidden} type="checkbox" checked={props.checked} onChange={() => { props.onClick() }}/>
      <div className={classes.checkBox} />
      <CheckedIcon className={classes.checkedIcon} />
    </label>
  );
}

export default CheckBox;
