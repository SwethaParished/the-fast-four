import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ImageUpload(){
    const [ selectedFiles, setSelectedFiles ] = useState([]);

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

const handleUpload = async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);

  await fetch("http://localhost:9090/edit/images/upload", {
    method: "POST",
    body: formData,
  });
};
    const onSubmit = async (e) => {
        e.preventDefault();
        const result= await axios.put(`http://localhost:9090/upload`);
        console.log(result);

    }

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
            <form onSubmit={onSubmit}>
			<div className="heading"><h1>Image Upload</h1></div>
			<div className="container">
				<input type="file" id="file" multiple onChange={handleImageChange} class ="form-control"/>
                <button className="btn btn-primary mx-2">Upload</button>
                </div>
				<hr/>
				<div className="result">{renderPhotos(selectedFiles)}</div>

                </form>
        </div>



	);
}