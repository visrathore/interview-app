import React, { useState } from "react";
import { Button, Paper, Typography, Box } from "@mui/material";

interface CodeExecuterProps {
  code: string;
}

const CodeExecuter: React.FC<CodeExecuterProps> = ({ code }) => {
  const [output, setOutput] = useState("");

  const runCode = () => {
    const capturedLogs: string[] = [];

    const originalLog = console.log;

    // eslint-disable-next-line
    console.log = (...args: any[]) => {
      const formatted = args.map((arg) => {
        if (typeof arg === "object") {
          try {
            return JSON.stringify(arg, null, 2); // pretty print
          } catch {
            return "[Circular]";
          }
        }
        return String(arg);
      });
      capturedLogs.push(formatted.join(" "));
    };

    try {
      new Function(code)();
      setOutput(capturedLogs.join("\n") || "(No output)");
      // eslint-disable-next-line
    } catch (err: any) {
      setOutput("Error: " + err.message);
    }

    console.log = originalLog;
  };

  return (
    <Paper sx={{ padding: 2, height: "100%" }}>
      <Button variant="contained" onClick={runCode} sx={{ mb: 2 }}>
        Run Code
      </Button>
      <Typography variant="h6">Output:</Typography>
      <Box component="pre" sx={{ whiteSpace: "pre-wrap" }}>
        {output}
      </Box>
    </Paper>
  );
};

export default CodeExecuter;
