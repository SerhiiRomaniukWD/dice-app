"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Button,
  CircularProgress,
} from "@mui/material";
import styles from "./page.module.css";
import ResultsTable from "../components/table";
import RadioBtn from "../components/radio";
import Slider from "../components/slider";
import { ResultItem } from "../types/result";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import CustomAlert from "../components/alert";

export default function Home() {
  const [guessType, setGuessType] = useState<"under" | "over">("under");
  const [sliderValue, setSliderValue] = useState(20);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [gameHistory, setGameHistory, isLoading] = useLocalStorage<
    ResultItem[]
  >("gameHistory", []);

  const handleGuessTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuessType(event.target.value as "under" | "over");
  };
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setSliderValue(typeof newValue === "number" ? newValue : newValue[0]);
  };
  const handlePlay = () => {
    const currentTime = new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const newGuess = `${guessType === "under" ? "Under" : "Over"} ${sliderValue}`;
    const randomResult = Math.floor(Math.random() * 101);
    let gameNewResult: "won" | "lost" = "lost";

    if (
      (guessType === "under" && randomResult < sliderValue) ||
      (guessType === "over" && randomResult > sliderValue)
    ) {
      gameNewResult = "won";
    }

    const newEntry = {
      time: currentTime,
      guess: newGuess,
      result: randomResult,
      resultStatus: gameNewResult,
    };

    setIsAlertOpen(true);
    setGameHistory([newEntry, ...gameHistory.slice(0, 9)]);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  return (
    <div className={styles.page}>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "7rem",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ maxWidth: 320, width: "100%", marginBottom: "1rem" }}
        >
          <Typography
            variant="body1"
            sx={{
              height: 200,
              width: "100%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "6rem",
              fontWeight: "light",
              marginBottom: "1rem",
            }}
          >
            {gameHistory[0]?.result || "Play"}
          </Typography>

          <FormControl component="fieldset">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={guessType}
              onChange={handleGuessTypeChange}
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "2rem",
              }}
              row
            >
              <RadioBtn value={"under"} label={"Under"} />
              <RadioBtn value={"over"} label={"Over"} />
            </RadioGroup>
          </FormControl>

          <Slider value={sliderValue} onChange={handleSliderChange} />

          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "primary",
              lineHeight: "1.625rem",
              fontWeight: "semibold",
              paddingY: "0.5rem",
            }}
            onClick={handlePlay}
						disabled={isAlertOpen}
          >
            PLAY
          </Button>
        </Box>

        <CustomAlert
          status={gameHistory[0]?.resultStatus}
          isOpen={isAlertOpen}
          onCloseAction={handleAlertClose}
        />

        {isLoading ? (
          <CircularProgress
            size="3rem"
            sx={{ marginTop: "3rem", color: "primary" }}
          />
        ) : (
          <ResultsTable results={gameHistory} />
        )}
      </Container>
    </div>
  );
}
