import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type MuiCardTypes = {
  imgUrl: string;
  imgAlt: string;
  text: string;
  redirectUrl: string;
};

const MuiCard = ({ imgUrl, imgAlt, text, redirectUrl }: MuiCardTypes) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(redirectUrl);
        }}
      >
        <CardMedia component="img" height="150" image={imgUrl} alt={imgAlt} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MuiCard;
