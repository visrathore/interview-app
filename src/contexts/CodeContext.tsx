import React, { createContext } from "react";

interface CodeContextType {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export default CodeContext;
