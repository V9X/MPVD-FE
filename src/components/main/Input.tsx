import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { VideoStateContext } from "../Content";
import { ReactComponent as SearchIcon } from "../../icons/Search.svg";
import { ReactComponent as InvalidIcon } from "../../icons/Invalid.svg";
import useInputClasses from "./useInputClasses";



function Input() {
  const [inputContent, setInputContent] = React.useState("");
  const [isPageSupported, setIsPageSupported] = React.useState(true)
  const videoStateContext = React.useContext(VideoStateContext);

  const response = useQuery<{ regex: RegExp; name: string }[], Error>(
    ["supportedPagesData"], 
    () => axios.get(`${process.env.REACT_APP_API_URL}/supportedUrls`)
      .then((res) => (res.data as { regex: string; name: string }[])
        .map((page) => ({ regex: new RegExp(page.regex), name: page.name }))),
    { staleTime: Infinity, cacheTime: Infinity }
  );
  const validation = response.isSuccess
    ? response.data
    : [{ regex: /.*/, name: "all" }];
  React.useEffect(() => {
    inputContent === ""
      ? setIsPageSupported(true)
      : setIsPageSupported(validation.some((page) => page.regex.test(inputContent)))
  }, [inputContent])

  const classes = useInputClasses({isPageSupported, inputContent});

  return (
    <form className={classes.form} onSubmit={(ev) => {
        ev.preventDefault();
        videoStateContext.dispatchVidState({ setUrl: { url: inputContent } });
        setInputContent("");
      }}
    >
      <div className={classes.inputContainer}>
        <input type="text" placeholder="Url to video" value={inputContent} className={classes.input} onChange={(e) => setInputContent(e.target.value)}/>
        <div className={classes.invalidContainer}>
          <div className={classes.invalidWindow}>This url is invalid, or not supported.</div>
          <InvalidIcon className={classes.invalidIcon} />
        </div>
      </div>
      <button type="submit" disabled={inputContent === "" ? true : !isPageSupported} className={classes.inputSubmit}>
        <SearchIcon className={classes.searchIcon} />
      </button>
    </form>
  );
}
export default Input;
