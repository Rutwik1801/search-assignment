import logo from './logo.svg';
import './App.css';
import {data} from "./utils/dummyData"
import React from 'react';
import {useEffect, useState} from "react"
import { Container, Grid } from '@mui/material';
import Card from './components/Card';

function App() {
  const [price,setPrice]=useState("select")
  const [bedrooms,setBedrooms]=useState(0)
  const [status,setStatus]=useState("select")
  const [location,setLocation]=useState("select")
const [housingData,setHousingData]=useState(data)
let locationData=[];
housingData.forEach((house)=>{
if(!locationData.includes(house.location)){
  locationData.push(house.location)
}
})
const [locations,setLocations]=useState(locationData)

const handleLocationFilter=(data,val)=>{

  if(val==="select"){
    console.log(val,"statusssss")
    return data;
  }
  
  else{
    console.log(val,"sta")
    return data.filter((e)=>{
      return(e.location===val);
    })
  }
}

const handleStatusFilter=(data,val)=>{
if(val==="select"){
  console.log(val,"statusssss")
  return data;
}else{
  console.log(val,"sta")
  return data.filter((e)=>{
    return(e.status===val);
  })
}
}

const handleBedroomFilter=(data,val)=>{
  if(val===0){
    return data;
  }else{
    return data.filter((e)=>{
      return(e.bedrooms>=val);
    })
  }
}

const handlePriceFilter=(data,val)=>{
  if(val==="select"){
    console.log(val,"statusssss")
    return data;
  }else{
      const minVal=parseInt(price.split("-")[0])
  const maxVal=parseInt(price.split("-")[1])
    console.log(val,"sta")
    return data.filter((e)=>{
      return(e.price>=minVal && e.price<maxVal);
    })
}}
const handleSearch=()=>{

  setHousingData(handleLocationFilter(handleStatusFilter(handlePriceFilter(handleBedroomFilter(data,bedrooms),price),status),location))
  console.log(housingData)
}
  return (
    <Container>
   <div>
      <Grid style={{padding:"20px"}}>
        <label>
          Status
        <select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
          <option>Select</option>
          <option>For Rent</option>
          <option>For Sale</option>
        </select>
        </label>
        <label>
          Location
        <select value={location} onChange={(e)=>{setLocation(e.target.value)}}>
          <option>Select</option>
           {locations && locations.map((location)=>{
            return(
              <option>{location}</option>
            );
           })}
        </select>
        </label>
        <label>
          Number Of Bedrooms
         <input type='number' min={0} value={bedrooms} onChange={(e)=>{setBedrooms(e.target.value)}} />
        </label>
        <label>
          Price
      <select value={price} onChange={(e)=>{setPrice(e.target.value)}}>
        <option>select</option>
        <option>0-5000</option>
        <option>5000-20000</option>
        <option>20000-50000</option>
        <option>50000-100000</option>
        <option>100000-500000</option>
      </select>
        </label>
        <button onClick={handleSearch}>Search</button>
      </Grid>
      <Grid container spacing={2}  sx={{marginTop:12}}>
      {housingData.length!==0?housingData.map((house)=>{
        return(
        <Grid item xs={12} sm={6} md={4}>
        <Card image={house.image} location={house.location} title={house.title} description={house.description} price={house.price} status={house.status} bedrooms={house.bedrooms} bathrooms={house.bathrooms}/>
        </Grid>)
      }):
      <h1>No results match your search</h1>
      }
      </Grid>
    </div>
    </Container>

  );
}

export default App;
