import { Box, Grid } from "@mui/material";
import MuiCard from "../../components/UI/MuiCard";
import ConceptLogo from "../../assets/concept-logo.png";

const CONTEXT_TYPE = [
  {
    imageUrl: ConceptLogo,
    imageAlt: "Concept Image",
    imageText: "Concept",
    redirectUrl: "/context/context-concepts?tabValue=0",
  },
];

const ContextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {CONTEXT_TYPE.map((contextData) => (
          <Grid size={4}>
            <MuiCard
              imgUrl={contextData.imageUrl}
              imgAlt={contextData.imageAlt}
              text={contextData.imageText}
              redirectUrl={contextData.redirectUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContextPage;
