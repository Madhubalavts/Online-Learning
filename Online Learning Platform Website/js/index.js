 
 
 
 
 function switchTab(tab) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginTab = document.getElementById("login-tab");
  const signupTab = document.getElementById("signup-tab");
  const title = document.getElementById("form-title");

  if (tab === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    loginTab.classList.remove("active");
    signupTab.classList.add("active");
    title.innerText = "Create your account";
  } else {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    title.innerText = "Welcome Back! Please login to your account";
  }
}