const data = new URLSearchParams();
data.append("email", "Hi, Hacker");
data.append("password", "");

fetch("/profile", {
  method: "POST",
  body: data
});
