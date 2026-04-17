document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-more");
  const form = document.querySelector("form");
  let projects = [];
  const buttonSelector = document.getElementById("submit-button");
  addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter text here";
    form.appendChild(input);
  });

  buttonSelector.addEventListener("click", function (event) {
    event.preventDefault();
    const textInputs = document.querySelectorAll('input[type="text"]');
    projects = []; 
    for (let i = 0; i < textInputs.length; i++) {
      projects.push(textInputs[i].value);
    }
    console.log(projects);
    const paragraph = document.getElementById("stuff");
    paragraph.innerHTML= "";
    for (let i = 0; i < projects.length; i++) {
      paragraph.innerHTML += `<li>${projects[i]}</li>`
    }
  });
});
