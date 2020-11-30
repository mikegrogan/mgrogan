document.getElementById('burgertoggle').addEventListener("click", function(){
  this.classList.toggle('open');
  document.body.classList.toggle('overflow');
  let nav=document.querySelector('nav');
  nav.style.display = nav.style.display == "block" ? "none" : "block";
});