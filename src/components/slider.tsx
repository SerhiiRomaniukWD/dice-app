import { Slider as SliderUI } from "@mui/material";

type Props = {
  value: number;
  onChange: (event: Event, newValue: number | number[]) => void;
};

const marks = [
  { value: 0, label: "0" },
  { value: 20 },
  { value: 40 },
  { value: 60 },
  { value: 80 },
  { value: 100, label: "100" },
];

export default function Slider({ value, onChange }: Props) {
  return (
    <SliderUI
      value={value}
      onChange={onChange}
      aria-label="Temperature"
      defaultValue={20}
      valueLabelDisplay="auto"
      marks={marks}
      min={0}
      max={100}
      sx={{
        color: "primary",
        "& .MuiSlider-thumb": { borderColor: "primary.light" },
        "& .MuiSlider-mark": { backgroundColor: "primary" },
        "& .MuiSlider-markLabel": { color: "#666666" },
        marginBottom: "2rem",
      }}
    />
  );
}
