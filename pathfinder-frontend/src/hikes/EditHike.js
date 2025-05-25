import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import './EditHike.css';
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import Search from "../components/Search";
import Image from "./Image";



export default function EditHike() {

    const [hikeDate, changeHikeDate] = useState("");
    const [level,setLevel] = useState("");
    let navigate = useNavigate();
    const { id } = useParams();

    const [allhikes, setAllHikes] = useState({
        trailName: "",
        areaName: "",
        walkable: "",
        bikeFriendly: "",
        distance: "",
        date: "",
        levels:""
    })
    const { trailName, areaName, walkable, bikeFriendly, distance, date,levels } = allhikes
const onInputChange = (e) => {
        setAllHikes({ ...allhikes, [e.target.name]: e.target.value });
    }
    const [editHike, setEditHike] = useState({
        trailName: "",
        areaName: "",
        walkable: "",
        bikeFriendly: "",
        distance: "",
        date: "",
        levels:""
    })

const onSubmit = async (e) => {
    e.preventDefault();
   await axios.put(`http://localhost:9090/edithike/${id}`, allhikes);

    navigate("/allhikes")
  }


   function changeValue(val) {
     const formatted = val instanceof Date ? val.toISOString().split("T")[0] : val;
     changeHikeDate(formatted);
     setAllHikes({ ...allhikes, date: formatted });
   }
    useEffect(() => {
        loadAllHikes();
    }, []);

    const loadAllHikes = async () => {
        const result = await axios.get(`http://localhost:9090/viewhike/${id}`);
        setAllHikes(result.data);

    }

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
      };


  return(

    <div >

        <div className="section">


        <div className="center">
        <h2>Edit Hike Details</h2><hr/>
                        </div>

            <div className="center">
            <div className="mb-3">
                                                <label>Trail Name : </label>
                                                <label>{allhikes.trailName}</label>
                                            </div>
                                            <div className="mb-3">
                                                <label>Area Name :  </label>
                                                <label>{allhikes.areaName}</label>
                                            </div>
                                            <div className="mb-3">
                                                <label>Walkable :</label>
                                                <label>{allhikes.walkable}</label>
                                              </div>
                                            <div className="mb-3">
                                                <label>Bike Friendly :</label>
                                                <label>{allhikes.bikeFriendly}</label>
                                                </div>
                                            <div className="mb-3">
                                                <label>Distance :</label>
                                                <label>{allhikes.distance}</label>
      </div>
      <div className="mb-3">
<label>Previous Date :</label>
<label>{allhikes.date}</label>
</div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Date changed to :</label>
          <input
            type="date"
            onChange={(e) => changeValue(e.target.value)}
            value={hikeDate}
          />
        </div>
        <button type="submit" className="btn btn-primary mx-2">Update</button>
        <Link className="btn btn-primary mx-2" to="/allhikes">Back</Link>
      </form><hr/>
                    <div>
                <Image/>
            </div>

            </div>
</div>

          </div>
  );
}