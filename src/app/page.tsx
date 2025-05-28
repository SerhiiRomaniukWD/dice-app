"use client";

import {
  Container,
  Box,
  Typography,
  Paper,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  Button,
} from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";

const marks = [
  { value: 0, label: "0" },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100, label: "100" },
];

export default function Home() {
  const [guessType, setGuessType] = useState<"under" | "over">("under");

  const handleGuessTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuessType(event.target.value as "under" | "over");
  };

  return (
    <div className={styles.page}>
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ maxWidth: 320, width: "100%" }}
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
              100
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
                <FormControlLabel
                  value="under"
                  control={
                    <Radio
                      color="primary"
                      sx={{
                        color: "#9C27B0",
                        "&.Mui-checked": {
                          color: "#9C27B0",
                        },
                      }}
                    />
                  }
                  labelPlacement="start"
                  label="Under"
                  sx={{}}
                />

                <FormControlLabel
                  value="over"
                  control={
                    <Radio
                      sx={{
                        color: "#9C27B0",
                        "&.Mui-checked": {
                          color: "#9C27B0",
                        },
                      }}
                    />
                  }
                  labelPlacement="start"
                  label="Over"
                  sx={{}}
                />
              </RadioGroup>
            </FormControl>

            <Slider
              aria-label="Temperature"
              defaultValue={20}
              valueLabelDisplay="auto"
              shiftStep={30}
              marks={marks}
              min={0}
              max={100}
              sx={{
                color: "#9C27B0",
                "& .MuiSlider-thumb": { borderColor: "#d9ade1" },
                "& .MuiSlider-mark": { backgroundColor: "#9C27B0" },
                "& .MuiSlider-markLabel": { color: "#666666" },
                marginBottom: "2rem",
              }}
            />

            <Button
              variant="contained"
              sx={{
                width: "100%",
                backgroundColor: "#9C27B0",
                lineHeight: "1.625rem",
								fontWeight: "semibold",
                paddingY: "0.5rem",
              }}
            >
              PLAY
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
