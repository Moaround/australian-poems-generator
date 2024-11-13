function generatePoem(event) {
  event.preventDefault();
  // alert("Generating poem");

  // let poemElement = document.querySelector("#poem");
  // poemElement.innerHTML = `Poem will be created here`;
  new Typewriter("#poem", {
    strings: "Poem will be created here",
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
