function toggleMenu() {
  document.querySelector('.menulist').classList.toggle('active');
}

function togglePhone() {
  const popup = document.getElementById("phonePopup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}
