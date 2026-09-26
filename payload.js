const formData = new FormData();

formData.append("email", "Hi, Hacker");
formData.append("password", "");

fetch("/profile", {
  method: "POST",
  body: formData
})
  .then(response => response.text())
  .then(data => {
    console.log(data);
  });
