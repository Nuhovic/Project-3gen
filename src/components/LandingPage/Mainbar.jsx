import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import GppGood from '@mui/icons-material/GppGood';
import MessageIcon from '@mui/icons-material/Message';


const Mainbar = () => {
  return (
    <div
      id="main-bar"
      style={{
        width: "80%",
        height: "auto",
        backgroundColor: "gainsboro",
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems:"center",
        marginTop:"35px",
        marginLeft:"170px"
      }}
    >
      <div id="prvi-main-bar"style={{ width: "100%", height: "auto" ,display:"flex",gap:"25px"}} >
        <div id="levi-prvi-main" style={{width:"70%",height:"", display:"flex"}}>
         <img width="1056" height="418" src="https://gameshopsrbija.com/wp-content/uploads/2021/02/igre-za-pc-snizenje-cena-srbija.jpg.webp" alt="" />
        </div>
        <div id="desni-prvi-main" style={{width:"30%", height:"400px"}}>
          <img width="370" height="418" src="https://gameshopsrbija.com/wp-content/uploads/2021/05/roblox-robux-kartice-dopune-prodaja-cena.jpg.webp" alt="" />
        </div>
      </div>
      <div id="ispod-prvi-main" style={{width:"100%",height:"100px",backgroundColor:"snow",marginTop:"30px",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"sans-serif"}}>
        <div id="prvi" style={{width:"25%",height:"100px",display:"flex",justifyContent:"flex-start",alignItems:"center ",gap:"20px",fontSize:"35px",}}>
<CloudDownloadIcon/>
<h6>Brzo i Online</h6>
        </div>
        <div id="drugi" style={{width:"25%",height:"100px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px",fontSize:"35px"}}>
<GppGood/>
<h6>Sigurno i Bezbedno</h6>
        </div>
        <div id="treci" style={{width:"25%",height:"100px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px",fontSize:"35px"}}>
          <MessageIcon/>
          <h6>Premium Podrska</h6>
        </div>
        <div id="cetvrta" style={{width:"25%",height:"100px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px",fontSize:"35px"}}>
<h5>Game shop Srbija</h5>

        </div>
      </div>

    </div>

    
  );
};

export default Mainbar;
