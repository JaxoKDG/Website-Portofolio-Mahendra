function copyEmail() {
  navigator.clipboard.writeText("mahendra.smarabumi.m@gmail.com");

  document.getElementById("copy-message").textContent = " Email copied!";
}