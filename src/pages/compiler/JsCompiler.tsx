import { Grid } from "@mui/material";
import CodeEditor from "../../components/compiler/CodeEditor";
import CodeExecuter from "../../components/compiler/CodeExecuter";
import { useContext } from "react";
import CodeContext from "../../contexts/CodeContext";

const JsCompiler = () => {
  const { code, setCode } = useContext(CodeContext)!;

  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid size={6}>
        <CodeEditor code={code} onChange={setCode} />
      </Grid>
      <Grid size={6}>
        <CodeExecuter code={code} />
      </Grid>
    </Grid>
  );
};

export default JsCompiler;
