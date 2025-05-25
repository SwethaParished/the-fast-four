import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import NavbarBS from '../layout/NavbarBS';
import Search from '../components/Search';

export default function AllHikes() {

 const [feature, setFeature] = useState({});
const [allComments, setAllComments] = useState();
    const [allhikes, setAllHikes] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {
        loadAllHikes();
    }, []);


 const handleSearchResults = (results) => {
    if (results.length > 0) {
      setFeature(results[0]);
      if (results[0].properties) {
        axios.get("http://localhost:9090/comments/" + results[0].properties.TRAIL_NAME)
          .then((response) => {
            setAllComments(response.data);
          })
          .catch(error => console.log(error));
      }
    }
  };
    const loadAllHikes = async () => {
        const result = await axios.get("http://localhost:9090/allhikes");
        setAllHikes(result.data);
    }


    useEffect(() => {
        loadAllHikes()
    }, [])
    const { id } = useParams();


   {/*const deletehike = async (id) => {
           const result = await axios.delete(`http://localhost:9090/deletehike/${id}`)

           loadAllHikes();
       }*/}
       const deleteHike = async (id) => {
         const confirmDelete = window.confirm("Are you sure you want to delete this hike?");
         if (confirmDelete) {
           try {
             await axios.delete(`http://localhost:9090/deletehike/${id}`);
             alert("Hike deleted successfully.");
             loadAllHikes();
           } catch (error) {
             console.error("Delete failed:", error);
             alert("Failed to delete hike.");
           }
         }
       };
    const edithike = async (id) => {
        await axios.put(`http://localhost:8080/edithike/${id}`)
        loadAllHikes();
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.get("http://localhost:9090/allhikes");
        navigate("/createhike");
    };
    return (
        <section className='section'>
            <div >
                <div className='py-4'>
                    <h1 align="center">List of all Hikes</h1>
<hr/>
<label align="right">Total Hikes: {allhikes.length}</label>
<hr/>
      <Link className="btn btn-primary mx-2" to="/createhike">Create Hike</Link>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#Id</th>
                                <th scope="col">Trail Name</th>
                                {/*<th scope="col">Area Name</th>
                                <th scope="col">Walkable</th>
                                <th scope="col">Bike Friendly</th>
                                <th scope="col">Distance</th>*/}
                                <th scope="col">Date</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {allhikes.map((hike, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{hike.trailName}</td>
                                    {/*<td>{hike.areaName}</td>
                                    <td>{hike.walkable}</td>
                                    <td>{hike.bikeFriendly}</td>
                                    <td>{hike.distance}</td>*/}
                                    <td>{hike.date}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/viewhike/${hike.id}`}>View</Link>
                                        <Link className="btn btn-primary mx-2" to={`/edithike/${hike.id}`}>Edit</Link>
                                        <button className='btn btn-danger' to="/allhikes" onClick={() => deleteHike(hike.id)}>Delete</button>

                                    </td>
                                </tr>
                            ))}


                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    )
}
