import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ResultItem } from "../types/result";

type Props = {
  results: ResultItem[];
};

export default function ResultsTable({ results }: Props) {
  return (
    <TableContainer
      sx={{ display: "flex", justifyContent: "center", maxWidth: "600px" }}
    >
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ py: "1rem", maxWidth: 200, width: "33.3%" }}
              align="left"
            >
              Time
            </TableCell>
            <TableCell
              sx={{ py: "1rem", maxWidth: 200, width: "33.3%" }}
              align="left"
            >
              Guess
            </TableCell>
            <TableCell
              sx={{ py: "1rem", maxWidth: 200, width: "33.3%" }}
              align="left"
            >
              Result
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row, index) => (
            <TableRow
              key={`${row.time}-${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.guess}</TableCell>
              <TableCell
                sx={{
                  color: row.resultStatus === "won" ? "#1B5E20" : "#C62828",
                }}
                align="left"
              >
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
