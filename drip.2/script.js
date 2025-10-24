// Handle Signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const res = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    const msg = document.getElementById("signupMsg");
    if (res.ok) {
      msg.style.color = "green";
      msg.textContent = "✅ Registration successful!";
      signupForm.reset();
    } else {
      msg.style.color = "red";
      msg.textContent = data.error || "Error registering user.";
    }
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    const msg = document.getElementById("loginMsg");

    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      msg.style.color = "red";
      msg.textContent = data.error || "Invalid login.";
    }
  });
}
