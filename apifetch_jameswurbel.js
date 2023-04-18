const visitorEndpoint = process.env.VISITOR_ENDPOINT;
console.log("<<<<<<<Visitor Endpoint>>>>>>")
console.log(visitorEndpoint)
fetch(visitorEndpoint)  
  .then(response => response.json())
  .then(data => document.getElementById('N').innerText=data)
