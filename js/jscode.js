var link=document.querySelector(".open-form-button");
var modal=document.querySelector(".modal");
var arrival=document.querySelector("[name=arrival]");
var input=document.querySelectorAll(".form-searching input");
var form=document.querySelector("form");

link.addEventListener("click",function(evt){
  evt.preventDefault();
  modal.classList.toggle("modal-show");
  login.focus();
})
form.addEventListener("submit",function(evt){
  if (!input.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");

} else {
  localStorage.setItem("login", login.value)
}
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
