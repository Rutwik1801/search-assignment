import React from 'react'
import { Box, Container, Icon, Typography } from '@mui/material'
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
function Card({image,title,description,price,status,bedrooms,bathrooms,location}) {
    console.log("fff")
  return (
    <Container sx={{width:"400px",textAlign:"center",position:"relative",padding:0}}>
        <span style={{position:"absolute",top:5,left:0,backgroundColor:"green",color:"white",padding:"2px 4px",borderRadius:"3px"}}>{status}</span>
          <Container sx={{overflow:"hidden"}}>
            <img src={image} style={{height:"200px"}} />
          </Container>
          <Container sx={{padding:"0 20px 20px 20px",}}>
            <Typography fontWeight="bold" fontSize="18px">
            {title}
          </Typography>
          <Typography fontSize="16px" sx={{marginBottom:"10px"}}>{location}</Typography>
          <Typography fontSize="14px" sx={{height:"100px"}}>{description}</Typography>

            <Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>
                <Typography sx={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <MonetizationOnIcon />
                    {price}
                    </Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <LocalHotelIcon />
                  {bedrooms}</Typography>
                <Typography sx={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <BathtubIcon />
                  {bathrooms}</Typography>

            </Container>
          </Container>
    </Container>
  )
}

export default Card