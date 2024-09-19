import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log('exercise-videos', exerciseVideos);
  if(!exerciseVideos.length){
    return 'Loading...'
  }
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" color="#350166" fontWeight={700}>
        Watch{" "}
        <span style={{ color: "#c75b02", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos.
      </Typography>
      <Stack
        justifyContent="center"
        alignContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "75px", xs: "0" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"

          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              <Typography variant="h5" color="#011059">{item.video.title}</Typography>
              <Typography variant="h6" color="#3e5bed">{item.video.channelName}</Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
