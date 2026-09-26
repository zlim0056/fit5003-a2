const formData = new FormData();

formData.append("email", "Hi, Hacker");
formData.append("password", "");

fetch("http://127.0.0.1:5001/profile", {
  method: "POST",
  body: formData
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
