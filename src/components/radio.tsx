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
            color: "primary",
            "&.Mui-checked": {
              color: "primary",
            },
          }}
        />
      }
      labelPlacement="start"
      label={label}
    />
  );
}
