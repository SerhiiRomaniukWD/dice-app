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
} from "@mui/material";
import styles from "./page.module.css";
import { useState } from "react";

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
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
              variant="body1"
              sx={{
                maxWidth: 320,
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
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
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
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
