import React, { Component, useEffect, useState } from "react";
import axios from "axios";

// import "~react-vis/dist/style";
// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   LineMarkSeries,
// } from "react-vis";

require("dotenv").config();

const getURL = process.env.EFICODE_URL;
const token = process.env.EFICODE_TOKEN;
const uri = process.env.ATLAS_URI;

//connect to mongodb

const { MongoClient } = require("mongodb");

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//get info from URL + add it to the mongoDB database
client.connect((err) => {
  const collection = client.db("eficode").collection("data");
  collection.insertOne(() => {
    axios.get(getURL, {
      headers: { Authorization: `Bearer + ${token}` },
    });
  });
  client.close();
});

//create a record on how the data will be shown in a table on the webpage

const Record = (props) => (
  <tr>
    <td>{props.record.date}</td>
    <td>{props.record.sensor1}</td>
    <td>{props.record.sensor2}</td>
    <td>{props.record.sensor3}</td>
    <td>{props.record.sensor4}</td>
  </tr>
);

//this is where there data will be retrieved (GET) and put into a table to see historical data

export class RecordList extends Component {
  //constructor that will hold the data
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }

  //get data from eficode

  componentDidMount() {
    axios
      .get(getURL, {
        headers: { Authorization: `Bearer + ${token}` },
      })
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //using constructor to put data into the record entries

  recordList() {
    return this.state.records.map((currentRecord) => {
      return <Record record={currentRecord} key={currentRecord.__id} />;
    });
  }

  render() {
    return (
      <div>
        <h1>List of Recorded Data</h1>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Sensor 1</th>
              <th>Sensor 2</th>
              <th>Sensor 3</th>
              <th>Sensor 4</th>
            </tr>
          </thead>

          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}

//this will create a chart using the data taken from the mongoDB database

export const Chart = () => {
  <iframe
  title="Chart showing the historic data of all sensors"
    style={{background: "#21313C", border: "none", borderRadius: "2px", boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}}
    width="640"
    height="480"
    src="https://charts.mongodb.com/charts-eficode-nlqti/embed/charts?id=d9a5e446-1157-4aba-9d36-2fb32dfeb348&autoRefresh=28800&theme=dark"
  ></iframe>;

  //   const url = "";

  //   const [date, setDate] = useState([]);

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setDate(res.data.date);
  //     });
  //   }, []);

  //   const [sensor1, setSensor1] = useState([]);

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setSensor1(res.data.sensor1);
  //     });
  //   }, []);

  //   const [sensor2, setSensor2] = useState([]);

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setSensor2(res.data.sensor1);
  //     });
  //   }, []);

  //   const [sensor3, setSensor3] = useState([]);

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setSensor3(res.data.sensor1);
  //     });
  //   }, []);

  //   const [sensor4, setSensor4] = useState([]);

  //   useEffect(() => {
  //     axios.get(url).then((res) => {
  //       setSensor4(res.data.sensor1);
  //     });
  //   }, []);

  //   const dataSensor1 = [date.map((d) => d), sensor1.map((s) => s)];

  //   const dataSensor2 = [date.map((d) => d), sensor2.map((s) => s)];

  //   const dataSensor3 = [date.map((d) => d), sensor3.map((s) => s)];

  //   const dataSensor4 = [date.map((d) => d), sensor4.map((s) => s)];

  //   return (
  //     <div>
  //       <h1> Chart of Sensor data</h1>
  //       <XYPlot width={300} height={300}>
  //         <VerticalGridLines />
  //         <HorizontalGridLines />
  //         <XAxis />
  //         <YAxis />
  //         <LineMarkSeries
  //           style={{strokeWidth: "3px"}}
  //           lineStyle={{ stroke: "red" }}
  //           markStyle={{ stroke: "blue" }}
  //           data={dataSensor1}
  //         />
  //         <LineMarkSeries
  //           style={{ strokeWidth: "3px" }}
  //           lineStyle={{ stroke: "pink" }}
  //           markStyle={{ stroke: "purple" }}
  //           data={dataSensor2}
  //         />
  //                 <LineMarkSeries
  //           style={{strokeWidth: "3px"}}
  //           lineStyle={{ stroke: "yellow" }}
  //           markStyle={{ stroke: "orange" }}
  //           data={dataSensor3}
  //         />
  //         <LineMarkSeries
  //           style={{ strokeWidth: "3px" }}
  //           lineStyle={{ stroke: "green" }}
  //           markStyle={{ stroke: "black" }}
  //           data={dataSensor4}
  //         />
  //       </XYPlot>
  //     </div>
  //   );
};
