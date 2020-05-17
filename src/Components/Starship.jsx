import React,{ useState, useEffect } from "react";
import axios from 'axios';
const Starship = props => {
  const api = `https://swapi.dev/api/starships/${props.id}`
  const [profile,setProfile] = useState({})
  useEffect(()=>{
    axios.get(api)
      .then(res => setProfile(res.data))
      .catch (err => alert(err));
    },[api]);
  return (
    <>
      <div className="container text-white bg-dark">
        <h1>{profile.name}</h1>
        <p>Model: {profile.model}</p>
        <p>Manufacture: {profile.manufacture}</p>
        <p>Cost: {profile.cost_in_credits}</p>
      </div>
    </>
  );
}
export default Starship;