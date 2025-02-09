import { useEffect, useState } from "react";
import axiosinstance from "../utils/axiosinstance";

const File = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState([]);
  const handleChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axiosinstance.post("uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response && response.data) {
        console.log(response.data);
        getAllImages();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);
  const getAllImages = async () => {
    try {
      const response = await axiosinstance.get("file");
      if (response && response.data) {
        setImage(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <div className="heading">
        <h2>File Upload Using React Js</h2>
      </div>
      <div className="file">
        <input id="file" type="file" onChange={handleChange} />
      </div>
      {file && (
        <section>
          File Details:
          <ul>
            <li>Name:{file.name}</li>
            <li>Type:{file.type}</li>
            <li>Size:{file.size}</li>
          </ul>
        </section>
      )}
      {file && (
        <button onClick={handleUpload} className="submit">
          Upload a file
        </button>
      )}
      <div className="imgdata">
        <h2>Image data</h2>
        <div className="imgcol">
          {image.length > 0 ? (
            image.map((img, index) => <img key={index} src={img} alt="img" />)
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default File;
