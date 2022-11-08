import React from "react";
import { createUseStyles } from "react-jss";
import { ReactComponent as MenuIcon } from "../../icons/Menu.svg";
import { Theme } from "../../App";
const useStyle = createUseStyles((theme: Theme) => ({
  button: {
    marginRight: "1%",
    border: "none",
    background: "none",
    height: "100%",
    width: "50px",
    marginLeft: "auto",
    cursor: "pointer",
    "&:hover $menuIcon": {
      "& path": {
        fill: "rgb(255, 255, 255, 0.7)",
      },
      "& #line2": {
        transform: "translateX(30%)",
      },
    },
    "&:active $menuIcon": {
      "& path": {
        transform: "translateX(30%)",
      },
    },
  },
  menuIcon: {
    height: "70%",
    maxHeight: 40,
    "& path": {
      fill: theme.fontMainColor,
      transform: "translateX(0)",
      transition: "all 200ms",
    },
  },
}));

interface props {
  menu: {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
  };
}

function MenuButton(props: props) {
  const classes = useStyle();

  const onButtonClick = React.useCallback(() => {
    props.menu.setMenuOpen(!props.menu.menuOpen)
  }, [props.menu.menuOpen])

  return (
    <button className={classes.button} onClick={onButtonClick}>
      <MenuIcon className={classes.menuIcon} />
    </button>
  );
}

export default MenuButton;
