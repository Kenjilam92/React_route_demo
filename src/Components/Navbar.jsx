import React,{useState} from "react";

const Navbar = props => { 
  const [subject,setSubject]=useState("people");
  const [id,setId] = useState (1);
  const selectSubject = (e) =>{
    setSubject(e.target.value);
  }
  const selectID = (e) =>{
    setId(e.target.value);
  } 
  
  return (
  <form 
  onSubmit={(e)=>props.showResults(
    e, {subject: subject, id: id} 
  )} 
  className="form-group row jumbotron"
  >
    <div className="input-group col">
      <label htmlFor="seachtag">Search for: </label>
      <select className="custom-select" 
              name="searchtag" 
              id="searchtag"
              value={subject} 
              onChange={e=>selectSubject(e)} 
      >
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
    </div>
    <div className="input-group col">
      <label htmlFor="id">ID: </label>
      <input type="number" min={1} value={id} onChange={e=>selectID(e)}/>
    </div>
    <button className="btn btn-info">Search</button>
  </form>
  );
}

export default Navbar;