import React, { useState, useEffect } from "react";
import { Pagination, Box, Stack, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 4;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const fetchExercisesData = async() => {
    let exerciseData = [];

    if(bodyPart === 'all'){
      exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
    } else {
      exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        exerciseOptions
      );
    };

    setExercises(exerciseData)
  }

  useEffect(()=>{
fetchExercisesData();
  },[bodyPart]);


  console.log("exercises", exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "75px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" ml="500px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", sm: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 4 ? (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 4)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        ) : null}
      </Stack>
    </Box>
  );
};

export default Exercises;
