document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // 1. أولاً: التحقق إذا كان المستخدم هو المدير (Admin)
  if (email === "admin@gmail.com" && password === "123") {
  
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "admin"); // اختياري: عشان تعرف السيستم إنه مدير
    window.location.href = "/dashboardEn.html"; // التوجه لصفحة لوحة التحكم
    return; // بنوقف تنفيذ الكود هنا عشان ميكملش للخطوات اللي تحت
  }

  // 2. ثانياً: التحقق من المستخدمين العاديين في الـ Local Storage
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (!storedUser) {
    alert("You must register first ❌");
    window.location.href = "register.html";
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login successful ✅");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", "user");
    window.location.href = "/indexlogin.html"; // التوجه للصفحة الرئيسية للمستخدم العادي
  } else {
    alert("Invalid email or password ❌");
  }
});