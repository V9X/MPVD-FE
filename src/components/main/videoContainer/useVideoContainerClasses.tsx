import { createUseStyles } from "react-jss";

interface StyleProp {
  isLoading: boolean;
  isError: boolean;
}

const useStyle = createUseStyles({
  wrapper: (sp: StyleProp) => ({
    display: "flex",
    flexDirection: "row",
    minHeight: "100%",
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
    transform: sp.isLoading ? "scale(0.4)" : "scale(1)",
    transition: "all 300ms",
    alignContent: sp.isLoading || sp.isError ? "" : "flex-start",
  }),
});

export default useStyle;