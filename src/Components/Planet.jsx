import React,{ useState, useEffect } from "react";
import axios from 'axios';
const Planet = props => {
  const api = `https://swapi.dev/api/planets/${props.id}`
  const [profile,setProfile] = useState({})
  useEffect(()=>{
    axios.get(api)
      .then(res => setProfile(res.data))
      .catch (err => alert(err));
    },[api]);
  return (
    <>
      <div className="container text-white bg-dark">
        <h1>Planet {profile.name}</h1>
        <p>Climate: {profile.climate}</p>
        <p>Terrain: {profile.terrain}</p>
        <p>Surface_water: {profile.surface_water}</p>
      </div>
    </>
  );
}
export default Planet;