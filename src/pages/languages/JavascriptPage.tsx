import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const JS_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/javascript/javascript-interview?tabValue=0",
  },
];

const JavascriptPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {JS_TYPE.map((jsData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={jsData.imageUrl}
              imgAlt={jsData.imageAlt}
              text={jsData.imageText}
              redirectUrl={jsData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JavascriptPage;
