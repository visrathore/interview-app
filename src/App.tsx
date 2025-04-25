import CodeProvider from "./contexts/CodeProvider";
import MainLayout from "./layout/MainLayout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <CodeProvider>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </CodeProvider>
  );
}

export default App;
