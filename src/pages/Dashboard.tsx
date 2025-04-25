import { Box, Grid } from "@mui/material";
import MuiCard from "../components/UI/MuiCard";
import ReactImage from "../assets/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg";
import JavascriptImage from "../assets/js-image.png";
import TypescriptImage from "../assets/ts-image.webp";
import DataStructureImage from "../assets/ds.jpg";
import AlgorithmsImage from "../assets/algo.png";
import ReduxToolkitImage from "../assets/redux-toolkit.webp";
import ContextApiImage from "../assets/APIContext-PURPLE-BG.png";
import HTMLImage from "../assets/html-img.jpg";
import CSSImage from "../assets/css-img.jpg";
import TimeComplexityImage from "../assets/time-c-img.webp";
import SpaceComplexityImage from "../assets/space-img.jpg";

const TECH_DATA = [
  {
    imageUrl: ReactImage,
    imageAlt: "React Image",
    imageText: "React",
    redirectUrl: "/react",
  },
  {
    imageUrl: JavascriptImage,
    imageAlt: "Javascript Image",
    imageText: "Javascript",
    redirectUrl: "/javascript",
  },
  {
    imageUrl: TypescriptImage,
    imageAlt: "Typescript Image",
    imageText: "Typescript",
    redirectUrl: "/typescript",
  },
  {
    imageUrl: ReduxToolkitImage,
    imageAlt: "Redux Toolkit Image",
    imageText: "Redux / Redux Toolkit",
    redirectUrl: "/redux",
  },
  {
    imageUrl: ContextApiImage,
    imageAlt: "Context API Image",
    imageText: "Context",
    redirectUrl: "/context",
  },
  {
    imageUrl: HTMLImage,
    imageAlt: "HTML Image",
    imageText: "HTML",
    redirectUrl: "/html",
  },
  {
    imageUrl: CSSImage,
    imageAlt: "CSS Image",
    imageText: "CSS",
    redirectUrl: "/css",
  },
  {
    imageUrl: TimeComplexityImage,
    imageAlt: "Time Complexity Image",
    imageText: "Time Complexity",
    redirectUrl: "/time-complexity",
  },
  {
    imageUrl: SpaceComplexityImage,
    imageAlt: "Space Complexity Image",
    imageText: "Space Complexity",
    redirectUrl: "/space-complexity",
  },
  {
    imageUrl: DataStructureImage,
    imageAlt: "Data Structures Image",
    imageText: "Data Structures",
    redirectUrl: "/data-structures",
  },
  {
    imageUrl: AlgorithmsImage,
    imageAlt: "Algorithms Image",
    imageText: "Algorithms",
    redirectUrl: "/algorithms",
  },
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {TECH_DATA.map((techData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={techData.imageUrl}
              imgAlt={techData.imageAlt}
              text={techData.imageText}
              redirectUrl={techData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
