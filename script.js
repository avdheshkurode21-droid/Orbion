function startTest() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const regid = document.getElementById("regid").value;
  const domain = document.getElementById("domain").value;

  if (!name || !phone || !regid || !domain) {
    document.getElementById("status").innerText =
      "❌ Please fill all details";
    return;
  }

  document.getElementById("status").innerText =
    "✅ Test started. AI questions will appear here.";
}

