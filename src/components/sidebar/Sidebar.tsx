import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const drawerWidth = 200;
const appBarHeight = 64;

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { text: "Dashboard", path: "/" },
    { text: "JS Compiler", path: "/js-compiler" },
    { text: "React", path: "/react" },
    { text: "Nextjs", path: "/next" },
    { text: "Javascript", path: "/javascript" },
    { text: "Typescript", path: "/typescript" },
    { text: "Redux", path: "/redux" },
    { text: "Context", path: "/context" },
    { text: "Html", path: "/html" },
    { text: "Css", path: "/css" },
    { text: "Data Structures", path: "/data-structures" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          top: `${appBarHeight}px`, // 👈 Push it below the AppBar
          height: `calc(100% - ${appBarHeight}px)`, // 👈 Fill the remaining height
        },
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={`/${location.pathname.split("/")[1]}` === item.path}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
