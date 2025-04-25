import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const CSS_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/css/css-interview?tabValue=0",
  },
];

const CssPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {CSS_TYPE.map((cssData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={cssData.imageUrl}
              imgAlt={cssData.imageAlt}
              text={cssData.imageText}
              redirectUrl={cssData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CssPage;
