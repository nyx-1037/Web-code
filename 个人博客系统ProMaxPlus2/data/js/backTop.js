var scrollFunction = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

window.onscroll = scrollFunction;

document.getElementById("back-to-top").addEventListener("click", function() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome、Firefox、IE和Opera
});
