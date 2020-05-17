import React,{ useState, useEffect } from "react";
import { Link } from '@reach/router';
import axios from 'axios';
const People = props => {
  const api = `https://swapi.dev/api/people/${props.id}`
  const [profile,setProfile] = useState({})
  const [starships,setStarShips]=useState([])
  useEffect(()=>{
    axios.get(api)
      .then(res => {setProfile(res.data);setStarShips(res.data.starships)})
      .catch (err => alert(err));
    },[api]);
  let homeworld=`${profile.homeworld}`;
  // setStarShips(profile.starships)
  // console.log("*****************")
  // console.log(starships)
  return (
    <>
      <div className="container text-white bg-dark">
        <h1>{profile.name}</h1>
        <p>Eye color: {profile.eye_color}</p>
        <p>Hair color: {profile.hair_color}</p>
        <p>Skin color: {profile.skin_color}</p>
        <p><Link to = {homeworld.slice(20)}>Homeworld</Link></p>
        <p>Starships:
        { starships.length!==0?
          starships.map((ship,i)=>
            <b key={i}> <Link to ={ship.slice(20)}>Ship {i+1}</Link> |</b>
          )
          :
          " don't have spaceship"
        }
        </p>
      </div>
    </>
  );
}
export default People;