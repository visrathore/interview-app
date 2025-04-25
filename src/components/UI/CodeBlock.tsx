import { Paper } from "@mui/material";

const CodeBlock = ({ code }: { code: string }) => (
  <Paper
    variant="outlined"
    sx={{
      p: 2,
      fontFamily: "monospace",
      backgroundColor: "#272822",
      color: "#f8f8f2",
      overflowX: "auto",
      whiteSpace: "pre-wrap",
      mb: 3,
    }}
  >
    {code}
  </Paper>
);

export default CodeBlock;
