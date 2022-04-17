'use strict';

const continueButton = document.getElementById("continue_button");
continueButton.addEventListener("click", continueFunction);

async function sendPostRequest(url, data) {
  console.log("about to send post request");
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'text/plain'},
    body: data });
  if (response.ok) {
    let data = await response.text();
    return data;
  } else {
    throw Error(response.status);
  }
}

function continueFunction() {
  const username = document.getElementsByName("username")[0];
  const url = document.getElementsByName("url")[0];
  const nickname = document.getElementsByName("nickname")[0];

  let info = username + " " + url + " " + nickname;

  sendPostRequest('/videoData.html', info)
  // since this page appears at 
  // https://POST-Example.profamenta.repl.co
  // the POST request goes to 
  // https://POST-Example.profamenta.repl.co/newlog
  .then(function (data) {
    console.log("got back the following string");
    console.log(data); 
  })
  .catch(function (error) {
     console.error('Error:', error);
  });
}

