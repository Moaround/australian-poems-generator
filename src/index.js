function displayPoem(response) {
  // response.data.answer
  console.log("poem generated");

  // let poemElement = document.querySelector("#poem");
  // poemElement.innerHTML = `Poem will be created here`;
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();
  // alert("Generating poem");

  let instructionsInput = document.querySelector("#user-instructions");
  // build the API key
  let apiKey = "tb462323aaaf0beaa9691f3od034f454";
  let context =
    "You are a romantic AI assistant that loves to write beautiful short poems. Please be polite, provide a short answer and use the user instructions. Your mission is to write a 4 line poem. Write each sentence on a separate line. Sign the poem with 'SheCodes AI' in <strong>. The poem must be provided in HTML format. Example: <p>this is a poem</p>";
  let prompt = `User instructions: Generate a short and unique Australian poem aobut ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
