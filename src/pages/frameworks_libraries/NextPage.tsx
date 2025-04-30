import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const NEXT_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/next/next-interview?tabValue=0",
  },
];

const NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {NEXT_TYPE.map((nextData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={nextData.imageUrl}
              imgAlt={nextData.imageAlt}
              text={nextData.imageText}
              redirectUrl={nextData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NextPage;
