import React from 'react'
import { Box, Container, Icon, Typography } from '@mui/material'
function Card({image,title,description,price,status,bedrooms}) {
    console.log("fff")
  return (
    <Box sx={{width:"400px",textAlign:"center",position:"relative",padding:0}}>
        <span style={{position:"absolute",top:5,left:0,backgroundColor:"green",color:"white",padding:"2px 4px",borderRadius:"3px"}}>{status}</span>
          <Container sx={{overflow:"hidden"}}>
            <img src={image} style={{height:"200px"}} />
          </Container>
          <Container sx={{padding:"20px"}}>
            <Typography fontWeight="bold" fontSize="18px">
            {title}
          </Typography>
          <Typography fontSize="14px">{description}</Typography>

            <Container sx={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                <Typography>
                    {price}
                    </Typography>
                <Typography>{bedrooms}</Typography>

            </Container>
          </Container>
    </Box>
  )
}

export default Card