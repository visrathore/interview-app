import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ReactPage from "../pages/frameworks_libraries/ReactPage";
import ReduxPage from "../pages/frameworks_libraries/ReduxPage";
import ContextPage from "../pages/frameworks_libraries/ContextPage";
import JavascriptPage from "../pages/languages/JavascriptPage";
import TypescriptPage from "../pages/languages/TypescriptPage";
import HtmlPage from "../pages/languages/HtmlPage";
import CssPage from "../pages/languages/CssPage";
import DataStructuresPage from "../pages/dsa/DataStructuresPage";
import AlgorithmsPage from "../pages/dsa/AlgorithmsPage";
import TimeComplexityPage from "../pages/dsa/TimeComplexityPage";
import SpaceComplexityPage from "../pages/dsa/SpaceComplexityPage";
import ReactInterviewPage from "../pages/frameworks_libraries/ReactComponents/ReactInterviewPage";
import JavascriptInterviewPage from "../pages/languages/JavascriptComponents/JavascriptInterviewPage";
import TypescriptInterviewPage from "../pages/languages/TypescriptComponents/TypescriptInterviewPage";
import ReduxConceptsPage from "../pages/frameworks_libraries/ReduxComponents/ReduxConceptsPage";
import ContextConceptsPage from "../pages/frameworks_libraries/ContextComponents/ContextConceptsPage";
import HtmlInterviewPage from "../pages/languages/HtmlComponents/HtmlInterviewPage";
import CssInterviewPage from "../pages/languages/CssComponents/CssInterviewPage";
import DsaCodingPage from "../pages/dsa/DsaComponents/DsaCodingPage";
import JsCompiler from "../pages/compiler/JsCompiler";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/js-compiler" element={<JsCompiler />} />
      <Route path="/react" element={<ReactPage />} />
      <Route path="/javascript" element={<JavascriptPage />} />
      <Route path="/typescript" element={<TypescriptPage />} />
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="/context" element={<ContextPage />} />
      <Route path="/html" element={<HtmlPage />} />
      <Route path="/css" element={<CssPage />} />
      <Route path="/data-structures" element={<DataStructuresPage />} />
      <Route path="/algorithms" element={<AlgorithmsPage />} />
      <Route path="/time-complexity" element={<TimeComplexityPage />} />
      <Route path="/space-complexity" element={<SpaceComplexityPage />} />

      {/* React */}
      <Route path="/react/react-interview" element={<ReactInterviewPage />} />

      {/* Javascript */}
      <Route
        path="/javascript/javascript-interview"
        element={<JavascriptInterviewPage />}
      />

      {/* Typescript */}
      <Route
        path="/typescript/typescript-interview"
        element={<TypescriptInterviewPage />}
      />

      {/* Redux */}
      <Route path="/redux/redux-concepts" element={<ReduxConceptsPage />} />

      {/* Context */}
      <Route
        path="/context/context-concepts"
        element={<ContextConceptsPage />}
      />

      {/* HTML */}
      <Route path="/html/html-interview" element={<HtmlInterviewPage />} />

      {/* CSS */}
      <Route path="/css/css-interview" element={<CssInterviewPage />} />

      {/* Data Structures */}
      <Route
        path="/data-structures/data-structures-interview"
        element={<DsaCodingPage />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
