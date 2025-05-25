import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import NavbarBS from '../layout/NavbarBS';

export default function UserHomePage() {

  const [futureHikes, setFutureHikes] = useState()

  const [userId, setUserId] = useState();
  const [hike, setHike] = useState({
    trailName: "",
    areaName: "",
    walkable: "",
    bikeFriendly: "",
    distance: "",
    date: ""
  })
  const username = localStorage.getItem("user");
  axios.get("http://localhost:9090/user/" + username).then(res => {
    setUserId(res.data.id);
  })

  const loadAllHikes = async () => {
    const result = await axios.get("http://localhost:9090/allhikes");
    //console.log(result)
   const sortedResult = result.data.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0
    })
    setFutureHikes(sortedResult);
    setFutureHikes(result.data);
  }


  return (

    <div className='section'>
    <h1> Hi! Welcome to your HomePage!</h1><hr/>
    <h3>Click any button to start navigating!</h3>
      {/* <a className="btn btn-primary" href="#" role="button">Create Hike</a> */}
      <Link className="btn btn-primary mx-2" to="/createhike">Create Hike</Link>
      <Link className="btn btn-primary mx-2" type="submit" to="/allhikes">Hikes List</Link>

      {/* {
  futureHikes ? <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active"  aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
 
</div> : <div></div>
}


      <table className="table center" style={{ width: 600 + "px" }}>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Trail Name</th>
            <th scope="col">Hike Date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {futureHikes?.map((hike, index) => (
            <tr>
              <th scope="row" key={index}>{index + 1}</th>
              <td>{hike.trailName}</td>
              <td>{hike.date}</td>
              <td><Link to={`/viewhike/${hike.id}`}>View</Link></td>


            </tr>
          ))}


        </tbody>
      </table>

*/}
      {/* <input className="btn btn-primary" type="button" value="Input"></input>
<input className="btn btn-primary" type="submit" value="Submit"></input>
<input className="btn btn-primary" type="reset" value="Reset"></input> */}
    </div>

  )
}