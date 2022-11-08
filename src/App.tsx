import Content from "./components/Content";
import { ThemeProvider } from "react-jss";
import useAppClasses from "./useAppClasses";

export interface Theme {
  background: string;
  fontMainColor: string;
  fontLinkColor: string;
  fontErrorColor: string;
}

const theme: Theme = {
  background: "rgb(0, 0, 0, 0.3)",
  fontMainColor: "rgb(255, 255, 255, 0.8)",
  fontLinkColor: "#edf4ff",
  fontErrorColor: "rgb(255, 92, 92, 0.8)"
}

function App() {
  const classes = useAppClasses();
  return (
    <ThemeProvider theme={theme}>
      <div id="app" className={classes.app}>
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
