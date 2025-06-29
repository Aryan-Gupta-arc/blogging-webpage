document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

document.getElementById("comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const comment = document.getElementById("comment").value.trim();
  if (name && comment) {
    document.getElementById("comment-msg").innerText = `Thanks for your comment, ${name}!`;
    e.target.reset();
  } else {
    document.getElementById("comment-msg").innerText = "Please fill in all fields.";
  }
});
