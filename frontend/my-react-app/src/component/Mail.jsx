import { useState } from "react";
import "../App.css";
import axiosinstance from "../utils/axiosinstance";
export const Mail = () => {
  const [FormData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
    console.log(FormData);
  };
  const handlesendMail = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosinstance.post("email", FormData);
      if (response && response.data) {
        console.log("success");
        FormData("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h2>send mail using nodemailer</h2>
      <form className="formdata" onSubmit={handlesendMail}>
        <label className="labeldata">
          Your mail address:
          <input
            type="text"
            name="email"
            value={FormData.name}
            onChange={handleChange}
          />
        </label>
        <label className="labeldata">
          Subject:
          <textarea
            name="subject"
            rows={2}
            cols={20}
            value={FormData.name}
            onChange={handleChange}
          />
        </label>
        <label className="labeldata">
          Text:
          <textarea
            name="message"
            rows={3}
            cols={30}
            value={FormData.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};
