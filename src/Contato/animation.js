
document.addEventListener('DOMContentLoaded', function() {
  const openModalButton = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
  const closeButton = document.getElementsByClassName('close')[0];

  // Abrir modal ao clicar no botão
  openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  // Fechar modal ao clicar no botão de fechar
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Fechar modal ao clicar fora dele
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});

/*ANIMAÇÃO*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
