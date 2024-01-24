const highchartsURL = "https://www.highcharts.com/chat/gpt/message";

function postman() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
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
  };

  fetch(highchartsURL, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

postman();
