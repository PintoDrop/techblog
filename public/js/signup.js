console.log("login js");
const login = document.querySelector("#login");

login.addEventListener("click", async () => {
  const response = await fetch("/api/users/login");

  console.log("button clicked");
});
