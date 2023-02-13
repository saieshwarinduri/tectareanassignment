import { Component } from "react";
import NavBr from "../Navbar/Header";
import "./index.css";

class GridApi extends Component {
  state = { list: [] };

  componentDidMount() {
    this.getTheDetails();
  }

  getTheDetails = async () => {
    const url = "https://gorest.co.in/public/v1/todos";

    const response = await fetch(url);
    if (response.ok === true) {
      const data = await response.json();
      this.setState({
        list: data.data,
      });
    }
  };

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <>
        <NavBr />
        <div className="mainconateirn">
          <div className="gridContaienr">
            {list.map((each) => (
              <div className="card" key={each.id}>
                <h5 className="userid">{each.user_id}</h5>
                <p className="title">{each.title}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default GridApi;
