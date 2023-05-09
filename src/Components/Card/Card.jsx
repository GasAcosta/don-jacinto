import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const card = ({ element }) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "space-around",
        marginTop: "10px",
        boxShadow: "0px 4px 9px 3px rgba(0, 0, 0, 0.02)",
        borderRadius: "10px",
      }}
    >
      <CardMedia></CardMedia>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            sx={{
              color: "#6E6A70",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "21px",
            }}
          >
            {element.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#948D97",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "12px",
              lineHeight: "18px",
            }}
          >
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/itemDetail/${element.title}`}>
          <Button size="small" color="primary">
            <ArrowForwardIosIcon />
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default card;
