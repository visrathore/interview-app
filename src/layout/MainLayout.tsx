import { Box } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

type MainLayoutTypes = {
  children: React.ReactNode;
};

const appBarHeight = 64;

const MainLayout = ({ children }: MainLayoutTypes) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: `${appBarHeight}px`,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
