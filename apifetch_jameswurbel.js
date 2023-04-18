const visitorEndpoint = process.env.VISITOR_ENDPOINT;
fetch('visitorEndpoint')
  .then(response => response.json())
  .then(data => document.getElementById('N').innerText=data)
