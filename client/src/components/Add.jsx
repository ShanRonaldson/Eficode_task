import React from "react";
import axios from "axios"

require('dotenv').config()

const getURL = process.env.EFICODE_URL
const token = process.env.EFICODE_TOKEN



class Add extends React.Component(){

    constructor(props){
        super(props);
        this.state = {dataList: []}
    }

    componentDidMount(){
        axios.get(getURL, {
            headers: { Authorization: `Bearer + ${token}`}
            }
        )
    }

    // get data from api 

    // onchange hook

    // call for new data every hour

    // https://hackernoon.com/how-to-fetch-data-from-an-api-in-reactjs-j11q34k0






}