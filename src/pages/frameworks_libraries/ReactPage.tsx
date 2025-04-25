import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";
import ProductLogo from "../../assets/products-design.png";

const REACT_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/react/react-interview?tabValue=0",
  },
  {
    imageUrl: ProductLogo,
    imageAlt: "Products Image",
    imageText: "Products",
    redirectUrl: "",
  },
];

const ReactPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {REACT_TYPE.map((reactData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={reactData.imageUrl}
              imgAlt={reactData.imageAlt}
              text={reactData.imageText}
              redirectUrl={reactData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReactPage;
