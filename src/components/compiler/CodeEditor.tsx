// src/components/CodeEditor.tsx
import React from "react";
import { Paper, Typography } from "@mui/material";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <Paper sx={{ padding: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        JavaScript Editor
      </Typography>
      <CodeMirror
        value={code}
        height="500px"
        theme="dark"
        extensions={[javascript()]}
        onChange={(value) => onChange(value)}
      />
    </Paper>
  );
};

export default CodeEditor;
