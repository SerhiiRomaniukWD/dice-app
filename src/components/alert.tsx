"use client";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type Props = {
  status?: "won" | "lost";
  isOpen: boolean;
  onCloseAction: () => void;
};

export default function CustomAlert({ status, isOpen, onCloseAction }: Props) {
  if (!status) {
    return null;
  }

  return (
    <Snackbar
      open={isOpen}
      onClose={onCloseAction}
      autoHideDuration={800}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      sx={{ zIndex: 1400, maxWidth: "600px", width: "100%" }}
    >
      <Alert
        variant="filled"
        severity={status === "won" ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {status === "lost" ? "You lost" : "You won"}
      </Alert>
    </Snackbar>
  );
}
