import FacebookIcon from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Topbar = () => {
  return (
    <div id="top-bar" style={{width:"100%",height:"40px",backgroundColor:"rgb(60,60,60)",display:"flex",body:0}}>
      <div id='levi-top-bar' style={{width:"33%",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",color:"white"}}> 
      <FacebookIcon/>
      <Instagram/>
      <LinkedInIcon/>
      </div>
      <div id='sredina-top-bar' style={{width:"33%",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
      </div>
      <div id='desni-top-bar' style={{width:"33%",height:"40px",display:"flex",justifyContent:"center",gap:"15px ",color:"white"}}>
        <p>Kako kupiti</p>
        <p>Cesta pitanja</p>
        <p>Blog</p>
        <p>O nama</p>
        <p>Kontakt</p>
      </div>
    </div>

    
  );

 
};

export default Topbar;
