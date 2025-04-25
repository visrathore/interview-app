import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import InterviewLogo from "../../assets/interview-logo.png";

const HTML_TYPE = [
  {
    imageUrl: InterviewLogo,
    imageAlt: "Interview Image",
    imageText: "Interview",
    redirectUrl: "/html/html-interview?tabValue=0",
  },
];

const HtmlPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {HTML_TYPE.map((htmlData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={htmlData.imageUrl}
              imgAlt={htmlData.imageAlt}
              text={htmlData.imageText}
              redirectUrl={htmlData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HtmlPage;
