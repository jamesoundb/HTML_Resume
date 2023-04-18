const visitorCount = process.env.VISITOR_COUNT;
fetch(visitorCount)
  .then(response => response.json())
  .then(data => document.getElementById('N').innerText=data)
