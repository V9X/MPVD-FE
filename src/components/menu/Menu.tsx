import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import MainMenu from "./main/MainMenu";
import HelpMenu from "./help/AboutMenu";
import Link from "./Link";
import { ReactComponent as GithubIcon } from "../../icons/Github.svg";
import useMenuClasses from "./useMenuClassses";

interface props {
  menu: {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
  };
  viewWidth: number;
}

function Menu(props: props) {
  const location = useLocation();
  const classes = useMenuClasses();

  return (
    <>
      {props.menu.menuOpen && props.viewWidth <= 700 && (
      <div className={classes.closeMenu} onClick={() => { props.menu.setMenuOpen(!props.menu.menuOpen) }}/>
      )}
      <CSSTransition
        in={props.menu.menuOpen}
        unmountOnExit
        timeout={300}
        classNames={{ enter: classes.menuEnter, enterActive: classes.menuEnterActive, exit: classes.menuExit, exitActive: classes.menuExitActive }}
      >
        <div className={classes.menu}>
          <TransitionGroup className={classes.menuContentContainer}>
            <CSSTransition
              key={location.key}
              timeout={200}
              classNames={{ enter: classes.routeEnter, enterActive: classes.routeEnterActive, exit: classes.routeExit, exitActive: classes.routeExitActive }}
            >
              <Routes location={location}>
                <Route path="/" element={<MainMenu />} />
                <Route path="/about" element={<HelpMenu />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <div className={classes.sepDiv} />
          <div className={classes.linkContainer}>
            <Link url="https://github.com/V9X/MPVD-FE" text="MPVD frontend"><GithubIcon /></Link>
            <Link url="https://github.com/" text="MPVD backend"><GithubIcon /></Link>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Menu;
