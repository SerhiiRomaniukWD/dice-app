"use client";

import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  RadioGroup,
  Button,
} from "@mui/material";
import styles from "./page.module.css";
import ResultsTable from "../components/table";
import RadioBtn from "../components/radio";
import { ResultItem } from "@/types/result";
import Slider from "@/components/slider";

export default function Home() {
  const [guessType, setGuessType] = useState<"under" | "over">("under");
  const [sliderValue, setSliderValue] = useState(20);
  const [gameResult, setGameResult] = useState<"won" | "lost">("lost");
  const [gameHistory, setGameHistory] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const gameHistoryFromStorage = localStorage.getItem("gameHistory");

      if (gameHistoryFromStorage) {
        try {
          const parsed = JSON.parse(gameHistoryFromStorage);
          setGameHistory(Array.isArray(parsed) ? parsed.filter(Boolean) : []);
        } catch {
          setGameHistory([]);
        }
      }
    }
  }, []);

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

    if (
      (guessType === "under" && randomResult < sliderValue) ||
      (guessType === "over" && randomResult > sliderValue)
    ) {
      setGameResult("won");
    } else {
      setGameResult("lost");
    }

    const newEntry = {
      time: currentTime,
      guess: newGuess,
      result: randomResult,
      resultStatus: gameResult,
    };

    setGameHistory([newEntry, ...gameHistory.slice(0, 9)]);
    localStorage.setItem(
      "gameHistory",
      JSON.stringify([newEntry, ...gameHistory.slice(0, 9)]),
    );
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
          justifyContent: "center",
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
            {gameHistory[0]?.result || "0"}
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
              backgroundColor: "#9C27B0",
              lineHeight: "1.625rem",
              fontWeight: "semibold",
              paddingY: "0.5rem",
            }}
            onClick={handlePlay}
          >
            PLAY
          </Button>
        </Box>

        <Box
          sx={{
            minHeight: "24.2rem",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {gameHistory.length > 0 && <ResultsTable results={gameHistory} />}
        </Box>
      </Container>
    </div>
  );
}
