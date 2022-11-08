import { Link, useLocation } from "react-router-dom";
import React from "react";
import MenuButton from "./MenuButton";
import useNavigationClasses from "./useNavigationClasses"


interface props {
  menu: {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
  };
  viewWidth: number;
}

function NavigationBar(props: props) {
  const location = useLocation();
  const [position, setPosition] = React.useState(0);

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPosition(0);
        break;
      case "/about":
        setPosition(1);
        break;
    }
  }, [location]);

  const classes = useNavigationClasses({ position: position });

  return (
    <nav className={classes.navigation}>
      <div className={classes.plWrapper}>
        <div className={classes.pageLogo}>
          <span>MPVD</span>
          <span>Multi page video downloader</span>
        </div>
        {props.viewWidth <= 700 && <MenuButton menu={props.menu} />}
      </div>
      <div className={classes.linkContainer}>
        <div className={classes.currentlySelected} />
        <Link to="/" className={classes.link} style={position === 0 ? { pointerEvents: "none" } : {}}>main</Link>
        <Link to="/about" className={classes.link} style={position === 1 ? { pointerEvents: "none" } : {}}>about</Link>
      </div>
      {props.viewWidth > 700 && <MenuButton menu={props.menu} />}
    </nav>
  );
}

export default NavigationBar;
