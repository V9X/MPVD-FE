import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useContentClasses from "./useContentClasses";
import NavigationBar from "./nav/NavigationBar";
import Main from "./main/Main";
import Menu from "./menu/Menu";
import About from "./about/About";

export interface Video {
  isSelected: boolean;
  status: "idle" | "success" | "failure";
  title: string;
  selectedUrlIndex: number;
  downloadUrls: {
    url: string;
    format: string;
    quality: string;
  }[];
}

interface VideoStates {
  currentUrl: string;
  vids: { [id: string]: Video };
}

interface VideoStateCtx {
  vidState: VideoStates;
  dispatchVidState: React.Dispatch<vidReducerAction>;
}

interface vidReducerAction {
  toggleSelect?: {
    id: string;
  };
  setQuality?: {
    id: string;
    selectedUrlIndex: number;
  };
  setData?: {
    data: { [key: string]: Video };
  };
  toggleSelectAll?: {
    currentState: boolean;
  };
  setUrl?: {
    url: string;
  };
  setStatus?: {
    ids: string[];
    status: "idle" | "success" | "failure";
  };
}

enum Actions {
  toggleSelect = "toggleSelect",
  toggleSelectAll = "toggleSelectAll",
  setQuality = "setQuality",
  setData = "setData",
  setUrl = "setUrl",
  setStatus = "setStatus",
}

function vidReducer(state: VideoStates, action: vidReducerAction): VideoStates {
  switch (Object.keys(action)[0]) {
    case Actions.toggleSelect:
      return { ...state, vids: { ...state.vids, [action.toggleSelect.id]: { ...state.vids[action.toggleSelect.id], isSelected: !state.vids[action.toggleSelect.id].isSelected }}};
    case Actions.toggleSelectAll: {
      let copy = { ...state };
      for (let key of Object.keys(copy.vids)) {
        copy.vids[key].isSelected = !action.toggleSelectAll.currentState;
      }
      return copy;
    }
    case Actions.setQuality:
      return { ...state, vids: { ...state.vids, [action.setQuality.id]: { ...state.vids[action.setQuality.id], selectedUrlIndex: action.setQuality.selectedUrlIndex }}};
    case Actions.setData:
      return { ...state, vids: action.setData.data };
    case Actions.setUrl:
      return { ...state, currentUrl: action.setUrl.url };
    case Actions.setStatus: {
      let vidCopy = { ...state.vids };
      action.setStatus.ids.forEach((id) => {
        vidCopy[id].status = action.setStatus.status;
      });
      return { ...state, vids: vidCopy };
    }
  }
}

export const VideoStateContext = React.createContext<VideoStateCtx | null>(null);
export const CurrentScrollPositionContext = React.createContext<{ position: number, setPosition: React.Dispatch<React.SetStateAction<number>> } | null>(null);

function CurrentScrollProvider(props: { children: React.ReactNode }) {
  const [position, setPosition] = React.useState(0);

  return (
    <CurrentScrollPositionContext.Provider value={{ position, setPosition }}>
      {props.children}
    </CurrentScrollPositionContext.Provider>
  );
}

function Content() {
  const [menuOpen, setMenuOpen] = React.useState(window.innerWidth > 700);
  const [width, setWidth] = React.useState(window.innerWidth);
  const [vidState, dispatchVidState] = React.useReducer(vidReducer, { currentUrl: "", vids: {} });
  const location = useLocation();

  function onWindowResize() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  });
  const classes = useContentClasses();

  return (
    <>
      <div className={classes.content}>
        <NavigationBar menu={{ setMenuOpen, menuOpen }} viewWidth={width} />
        <div className={classes.pageContainer}>
          <VideoStateContext.Provider value={{ vidState, dispatchVidState }}>
            <CurrentScrollProvider>
              <TransitionGroup className={classes.pageWrapper}>
                <CSSTransition
                  key={location.key}
                  timeout={200}
                  classNames={{
                    enter: classes.routeEnter,
                    enterActive: classes.routeEnterActive,
                    exit: classes.routeExit,
                    exitActive: classes.routeExitActive,
                  }}
                >
                  <Routes location={location}>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </CSSTransition>
              </TransitionGroup>
              <Menu menu={{ setMenuOpen, menuOpen }} viewWidth={width} />
            </CurrentScrollProvider>
          </VideoStateContext.Provider>
        </div>
      </div>
    </>
  );
}
export default Content;
