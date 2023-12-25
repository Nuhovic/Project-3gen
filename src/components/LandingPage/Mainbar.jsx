import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import GppGood from "@mui/icons-material/GppGood";
import MessageIcon from "@mui/icons-material/Message";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Mainbar = () => {
  return (
    <div
      id="main-bar"
      style={{
        width: "80%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "35px",
        marginLeft: "170px",
      }}
    >
      <div
        id="prvi-main-bar"
        style={{ width: "100%", height: "auto", display: "flex", gap: "25px" }}
      >
        <div
          id="levi-prvi-main"
          style={{ width: "70%", height: "", display: "flex" }}
        >
          <img
            width="1056"
            height="418"
            src="https://gameshopsrbija.com/wp-content/uploads/2021/02/igre-za-pc-snizenje-cena-srbija.jpg.webp"
            alt=""
          />
        </div>
        <div id="desni-prvi-main" style={{ width: "30%", height: "400px" }}>
          <img
            width="370"
            height="418"
            src="https://gameshopsrbija.com/wp-content/uploads/2021/05/roblox-robux-kartice-dopune-prodaja-cena.jpg.webp"
            alt=""
          />
        </div>
      </div>
      <div
        id="ispod-prvi-main"
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "snow",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          id="prvi"
          style={{
            width: "25%",
            height: "100px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center ",
            gap: "20px",
            fontSize: "35px",
          }}
        >
          <CloudDownloadIcon />
          <h6>Brzo i Online</h6>
        </div>
        <div
          id="drugi"
          style={{
            width: "25%",
            height: "100px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            fontSize: "35px",
          }}
        >
          <GppGood />
          <h6>Sigurno i Bezbedno</h6>
        </div>
        <div
          id="treci"
          style={{
            width: "25%",
            height: "100px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            fontSize: "35px",
          }}
        >
          <MessageIcon />
          <h6>Premium Podrska</h6>
        </div>
        <div
          id="cetvrta"
          style={{
            width: "25%",
            height: "100px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            fontSize: "35px",
          }}
        >
          <h5>Game shop Srbija</h5>
        </div>
      </div>
      <div>
        <Card sx={{height:"700px",width:"1520px",backgroundColor:"red"  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height=""
              image=""
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                
              </Typography>
              <Typography variant="body2" color="text.secondary">
               
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div id="prva kartica"></div>
      <div id="druga kartica"></div>
      <div id="treca kartica"></div>
      <div id="cetvrta kartica"></div>
      <div id="peta kartica"></div>
    </div>
  );
};

export default Mainbar;
