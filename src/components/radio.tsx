import { FormControlLabel, Radio } from "@mui/material";

type Props = {
  value: "under" | "over";
  label: "Under" | "Over";
};

export default function RadioBtn({ value, label }: Props) {
  return (
    <FormControlLabel
      value={value}
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
      label={label}
    />
  );
}
