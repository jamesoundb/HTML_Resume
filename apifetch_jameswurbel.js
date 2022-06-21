fetch('https://wz6lgbxjji.execute-api.us-east-1.amazonaws.com/MyAPI/visitorcount')
  .then(response => response.json())
  .then(data => document.getElementById('N').innerText=data)
