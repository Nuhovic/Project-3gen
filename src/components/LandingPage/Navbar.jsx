import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const Navbar = () => {
  return (
    <div
      id="navbar"
      style={{
        body:0,
        width: "100%",
        height: "100px",
        backgroundColor: "black",
        display: "flex",
      }}
    >
      <div
        id="desni-navbar"
        style={{
          width: "33%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          height="474"
          width="199"
          src="https://gameshopsrbija.com/wp-content/uploads/2021/05/logov3.svg"
        />
      </div>
      <div id="srednji-navbar" style={{ width: "33%", height: "100px" }}>
        <input
          type="text"
          placeholder="Pretrazi... Npr,Roblox,Gta,V-Bucks"
          style={{
            width: "90%",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "30px",
          }}
        />
      </div>
      <div
        id="desni-navbar"
        style={{
          width: "33%",
          height: "100px",
          color: "orange",
          display: "flex",
        }}
      >
        <div
          id="desni-levi-navbar"
          style={{
            width: "51%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadsetMicIcon /> <p>gameshopsrbija</p>
          <AccessTimeIcon /> <p>Svaki dan:12-22h</p>
        </div>

        <div
          id="desni-desni-navbar"
          style={{
            width: "51%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>0 RSD</h4>
          <LocalMallIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
