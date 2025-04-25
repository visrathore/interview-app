import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const TS_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/typescript/typescript-interview?tabValue=0",
  },
];

const TypescriptPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {TS_TYPE.map((tsData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={tsData.imageUrl}
              imgAlt={tsData.imageAlt}
              text={tsData.imageText}
              redirectUrl={tsData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TypescriptPage;
