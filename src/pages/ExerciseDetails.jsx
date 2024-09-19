import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Detail from "../Components/Detail";
import SimiliarExercises from "../Components/SimiliarExercises";
import ExerciseVideos from "../Components/ExerciseVideos";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  const fetchExercisesData = async () => {
    const exerciseDBUrl = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      exerciseOptions
    );

    const ytSearchURL = await fetchData(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDBUrl.name}`,
      youtubeOptions
    );

    const targetMuscleExercisesData = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDBUrl.target}`,
      exerciseOptions
    );

    const equipmentExercisesData = await fetchData(
      `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDBUrl.equipment}`,
      exerciseOptions
    );

    setExerciseDetail(exerciseDBUrl);
    setExerciseVideos(ytSearchURL.contents);
    setTargetMuscleExercises(targetMuscleExercisesData);
    setEquipmentExercises(equipmentExercisesData);
  };

  useEffect(() => {
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimiliarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
