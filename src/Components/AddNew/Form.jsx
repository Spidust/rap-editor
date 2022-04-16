import { useState } from "react";

export default function () {
  const [title, setTitle] = useState("");
  const [beat, setBeat] = useState("");
  const [desc, setDesc] = useState("");
  const addHandler = () => {
    localStorage.setItem(
      "songs",
      JSON.stringify(
        localStorage.getItem("songs")
          ? [
              ...JSON.parse(localStorage.getItem("songs")),
              {
                title,
                beat,
                desc,
                content: "",
                id: JSON.parse(localStorage.getItem("songs"))
                  .length,
              },
            ]
          : [{ title, beat, desc, id: 0, content: "" }]
      )
    );
    window.location = "/edit/" + JSON.parse(localStorage.getItem("songs")).length;
  }
  return (
    <div>
      <div className="input-group-c">
        <div className="input-group mt-5">
          <span className="input-group-text" id="basic-addon1">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            aria-label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mt-4">
          <span className="input-group-text" id="basic-addon1">
            Beat
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Beat"
            value={beat}
            onChange={(e) => setBeat(e.target.value)}
            aria-label="Beat"
            aria-describedby="basic-addon1"
          />
          <div className="input-group mt-4">
            <span className="input-group-text">Description</span>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              aria-label="Description"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-primary mt-4"
          onClick={() => {
            title === "" || beat === ""
              ? alert("Fill all fields")
              : addHandler();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
