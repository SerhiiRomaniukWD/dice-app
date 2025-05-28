import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface ResultItem {
  id: string;
  time: string;
  guess: string;
  result: number;
}

const results: ResultItem[] = [
  {
    id: "1",
    time: "2023-10-01T12:00:00Z",
    guess: "Under 12",
    result: 50,
  },
  {
    id: "2",
    time: "2023-10-01T12:05:00Z",
    guess: "Over 50",
    result: 70,
  },
  {
    id: "3",
    time: "2023-10-01T12:00:00Z",
    guess: "Under 12",
    result: 50,
  },
  {
    id: "4",
    time: "2023-10-01T12:05:00Z",
    guess: "Over 50",
    result: 70,
  },
  {
    id: "5",
    time: "2023-10-01T12:00:00Z",
    guess: "Under 12",
    result: 50,
  },
  {
    id: "6",
    time: "2023-10-01T12:05:00Z",
    guess: "Over 50",
    result: 70,
  },
  {
    id: "7",
    time: "2023-10-01T12:00:00Z",
    guess: "Under 12",
    result: 50,
  },
];

export default function ResultsTable() {
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
          {results.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.guess}</TableCell>
              <TableCell align="left">{row.result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
