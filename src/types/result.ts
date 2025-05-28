export interface ResultItem {
  time: string;
  guess: string;
  result: number;
  resultStatus: "won" | "lost";
}
