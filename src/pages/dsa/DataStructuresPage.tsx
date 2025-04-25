import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const DSA_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/data-structures/data-structures-interview?tabValue=0",
  },
];

const DataStructuresPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {DSA_TYPE.map((dsaData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={dsaData.imageUrl}
              imgAlt={dsaData.imageAlt}
              text={dsaData.imageText}
              redirectUrl={dsaData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DataStructuresPage;
