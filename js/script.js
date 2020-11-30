// Using Fetch to call the API


var token = config.MY_TOKEN; //Hidden token, of course

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer " + token);

var graphql = JSON.stringify({
  query: "query($username: String!) {\n user(login: $username) {\n name\n repositories(last: 20){\n edges{\n node{\n name\n description\n updatedAt\n}\n}\n}\n}\n}",
  variables: {"username":"Michie1001"}
})
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: graphql,
  redirect: 'follow'
};

fetch("https://api.github.com/graphql", requestOptions)
  .then(response => response.text())
  .then(result => {
  	document.getElementById('repos').innerHTML = JSON.stringify(JSON.parse(result)); //Just to display on the page
  })
  .catch(error => console.log('error', error));

// document.getElementById('repos').innerHTML = JSON.stringify(result);

//   .then(result => console.log(result))
