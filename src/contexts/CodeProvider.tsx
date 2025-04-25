import React, { useState } from "react";
import CodeContext from "./CodeContext";
const CodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [code, setCode] = useState(
    "//Write your code here\nconsole.log('Hello, world!')"
  );

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export default CodeProvider;
