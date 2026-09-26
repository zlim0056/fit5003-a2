const data = new URLSearchParams();
data.append("email", "Hi, Hacker");
data.append("password", "");

fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: data
});
