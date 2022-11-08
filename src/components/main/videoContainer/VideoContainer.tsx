import { useQuery } from "react-query";
import axios from "axios";
import React from "react";
import VideoObj from "./VideoObj";
import ErrorBox from "./ErrorBox";
import Loader from "../../ext/Loader";
import { Video, VideoStateContext } from "../../Content";
import useVideoContainerClasses from "./useVideoContainerClasses"

interface QueryData {
  status: {
    code: number;
    message?: string;
  };
  results: {
    id: string;
    url: string;
    thumbnail?: string;
    length: number;
    title: string;
    author?: {
      name: string;
      url: string;
    };
    downloadUrls: {
      url: string;
      format: string;
      quality: string;
    }[];
  }[];
}

function VideoContainer() {
  const {vidState, dispatchVidState} = React.useContext(VideoStateContext);

  const response = useQuery<QueryData, Error>(
    [vidState.currentUrl],
    () => axios.get(`${process.env.REACT_APP_API_URL}/${vidState.currentUrl}`).then((res) => res.data),
    { staleTime: Infinity, cacheTime: 600000, onSuccess: (data) => {
      if (data.status.code === 0) {
        let ctxData: { [key: string]: Video } = {};
        data.results.forEach((video, index) => {
          ctxData[String(index)] = { isSelected: false, title: video.title, selectedUrlIndex: 0, downloadUrls: video.downloadUrls, status: "idle" };
        });
        dispatchVidState({ setData: { data: ctxData } });
      }},
    }
  );
  const classes = useVideoContainerClasses({
    isLoading: response.isLoading,
    isError: response.isError || !!response.data?.status?.code,
  });

  return (
    <div className={classes.wrapper}>
      {response.isLoading && <Loader size="300px" borderSize="15px" exStyle={{ alignSelf: "center", justifySelf: "center" }}/>}
      {response.isError && <ErrorBox message={response.error.message || "unknown error"} />}
      {response.isSuccess && (response.data.status.code === 0 
        ? response.data.results.map((video, index) => {
            return <VideoObj key={index} id={String(index)} video={video} />;
          })
        : <ErrorBox message={response.data.status.message || "unknown error"} />
      )}
    </div>
  );
}

export default VideoContainer;
