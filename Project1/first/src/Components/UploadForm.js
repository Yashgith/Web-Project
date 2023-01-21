import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URI } from "./Constants";

const UploadForm = ({ getAllMedias }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);

    axios.post(`${BACKEND_URI}/api/v1/media/create`, formdata)
      .then((success) => {
        getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  

  return (
    <>


      <p className="text-primary">Teachers Should Add Courses For Students To Improve Their Progress and Skills.Based on Their Academic Progress and Performance Students Will Learn Particular Skills To Improve Their Skills.</p>
      <br /><br />

    <h1 className="text-success">Add Courses For Students</h1><br />
      <form className="p-3 mb-2 bg-info text-dark" onSubmit={hadleSubmit}>
        <div className="form-group text-body">
          <label className="text-dark" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="text-dark" htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2 text-white bg-dark">
          Submit
        </button>
      </form>

    </>
  );
};

export default UploadForm;