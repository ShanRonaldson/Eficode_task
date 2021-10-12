import React from "react";
import axios from "axios";

require("dotenv").config();

const getURL = process.env.EFICODE_URL;
const token = process.env.EFICODE_TOKEN;

class Add extends React.Component() {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    axios
      .get(getURL, {
        headers: { Authorization: `Bearer + ${token}` },
      })
      .then((response) => {
        if (response.status === 200 && response != null) {
          this.setState({
            data: response.data,
          });
        } else {
          console.log("problem");
        }
      }).catch(error => {
        console.log(error);
    });
  }

  render(){
    const { data } = this.state;
    // return (
    //    <div className="home">
    //      {Array.isArray(data) && data.map(object => (
    //           <p key={object.uid}>{object.title}</p>
    //       ))}
    //    </div>
    // )
  }

  //https://stackoverflow.com/questions/53358155/reactjs-get-data-from-api-and-map-data
  // get data from api

  // onchange hook

  // call for new data every hour

  // https://hackernoon.com/how-to-fetch-data-from-an-api-in-reactjs-j11q34k0
}
 export default Add;