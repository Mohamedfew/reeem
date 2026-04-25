// بعرف هنا متغيراتي اللي موجوده في html
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  //رساله لو الباسورد والتاكيد بتاعها مش زي بعض 
  if (password !== confirmPassword) {
    alert("Passwords do not match ❌");
    return;
  }
 
// عملت هنا اللوكل ستورج
  const userData = {
    name: name,
    dob: dob,
    email: email,
    password: password
  };

  // خلي بالك ان لما تحطي ده فكل الويبسايتات هيبقى كلهم جو نفس اللوكل ستورج فالاكاونت اللي هتعمليه فواحد هيفتح فكله فلو عاوزه غيري اساميهم بس عن نفسي سيباهم  لاني عملته مره وحطيته في الباقي وكده كده هتفتح ع اجهزه تيمات مختلفه

  localStorage.setItem("userData", JSON.stringify(userData));
// رساله انه سجل
  alert("Registration successful ✅");

// بدليه بالحاجه اللي عوزاه يفتح عليها
  window.location.href = "index.html";
});
