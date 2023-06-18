// Seleciona o elemento #menu-toggle
const menuToggle = document.getElementById("menu-toggle");

// Adiciona um listener de evento para a mudança de estado (checked/unchecked) do #menu-toggle
menuToggle.addEventListener("change", function () {
  // Seleciona o elemento .ul
  const ul = document.querySelector(".ul");

  // Adiciona ou remove a classe 'expanded' no elemento .ul dependendo do estado do #menu-toggle
  if (menuToggle.checked) {
    ul.classList.add("expanded");
  } else {
    ul.classList.remove("expanded");
  }
});
