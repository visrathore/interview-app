import { AppBar, Toolbar, Typography } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <LocalLibraryIcon />
        <Typography variant="h6" noWrap component="div">
          INTER-PREP
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
