import React from "react";
import useSWR from "swr";
import jsonData from "./data.json";

// const highchartsURL = "https://www.highcharts.com/chat/gpt/message";
const highchartsURL = "https://dummyjson.com/products/1";

function App() {
  //STEP1: Get data for chart generation
  console.error("jsonData:", jsonData);
  //const { data, error } = useSWR(null, { initialData: jsonData });
  fetch("https://dummyjson.com/products/1", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

  // STEP 2: Pass JSON data for Highcharts and get response from Highcharts

  var raw = JSON.stringify({
    messages: [
      {
        role: "user",
        content:
          "Create a chart with this data: Debit Credit 19/2 234 23 20/2 23 134 21/2 234 45",
      },
    ],
  });

  // sendDataToHighcharts(raw);
  postman();

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  //STEP3: Using HightChart response >> Draw Charts

  return <div>{/* {data && <Chart data={yourData} />} */}</div>;
}

function sendDataToHighcharts(highchartsData) {
  fetch(highchartsURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: highchartsData,
  })
    .then((res) => {
      console.log("Raw Response:", res);
      return res;
    })
    .then((response) => {
      console.log("Highcharts API response:", response);
    })
    .catch((error) => {
      console.error("Error sending data to Highcharts API:", error);
    });
}

function postman() {
  var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var raw = JSON.stringify({
    messages: [
      {
        role: "user",
        content:
          "Create a chart with this data: Debit Credit 19/2 234 23 20/2 23 134 21/2 234 45",
      },
    ],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "no-cors",
  };

  fetch(highchartsURL, requestOptions)
    .then((response) => console.log(response))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export default App;
