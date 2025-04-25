import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import ConceptLogo from "../../assets/concept-logo.png";

const REDUX_TYPE = [
  {
    imageUrl: ConceptLogo,
    imageAlt: "Concept Image",
    imageText: "Concept",
    redirectUrl: "/redux/redux-concepts?tabValue=0",
  },
];

const ReduxPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {REDUX_TYPE.map((reduxData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={reduxData.imageUrl}
              imgAlt={reduxData.imageAlt}
              text={reduxData.imageText}
              redirectUrl={reduxData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReduxPage;
