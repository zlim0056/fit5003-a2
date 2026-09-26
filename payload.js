async function sendRequest(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return await response.json();
}

sendRequest("http://localhost:5001/profile", {
  email: "Hi, Hacker",
  password: ""
})
  .then(result => console.log(result))
  .catch(error => console.error(error));
