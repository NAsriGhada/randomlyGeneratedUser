import { useEffect, useState } from "react";
import data from "./data.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

function App() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomUser = data[randomIndex];
  useEffect(() => {
    console.log(randomIndex);
    console.log(randomUser);
  }, []);
  const [color, setColor] = useState("rgba(0, 0, 0, 0.87)");

  const handleClick = (e) => {
    e.preventDefault()
    setColor(color === "rgba(0, 0, 0, 0.87)" ? "red" : "rgba(0, 0, 0, 0.87)");
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt="image" image={randomUser.picture} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            id: {randomUser.id} <br />
            balance: {randomUser.balance}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            age: {randomUser.age} <br />
            name: {randomUser.name} <br />
            gender: {randomUser.gender} <br />
            company: {randomUser.company} <br />
            email: {randomUser.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
        <FavoriteIcon style={{ color: color }} onClick={handleClick} />
      </Card>
    </div>
  );
}

export default App;
