import { Component } from "react";

import NavBr from "../Navbar/Header";
import "./index.css";
class PostApi extends Component {
  state = { name: "", email: "", message: "" };

  getcallTheapi = async (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const url = "https://admin.srkprojects.com/web/api/client/v1/contact-us/";

    const user_details = {
      email: email,
      message: message,
      name: name,
    };

    const options = {
      method: "post",
      headers: { "content-type": "text/html" },
      body: user_details,
    };

    const response = await fetch(url, options);
    console.log(response);
  };

  setTheemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  setmessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  setname = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <NavBr />
        <div className="maincontainer">
          <form className="formcontaienr" onSubmit={this.getcallTheapi}>
            <h1>Apicall</h1>
            <div className="inputcontaienr">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={this.setTheemail}
              />
            </div>
            <div className="inputcontaienr">
              <label htmlFor="message">Message</label>
              <input
                id="message"
                value={message}
                type="text"
                onChange={this.setmessage}
              />
            </div>
            <div className="inputcontaienr">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={this.setname}
              />
            </div>
            <button className="btn btn-primary my-3" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostApi;
