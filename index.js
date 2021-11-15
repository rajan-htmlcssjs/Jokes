const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

function getSetJoke() {
  const payload = {
    headers: {
      Accept: "application/json"
    }
  };
  jokeBtn.innerText = "Thinking";
  fetch("https://icanhazdadjoke.com", payload)
    .then((res) => res.json())
    .then((joke) => {
      jokeBtn.innerText = "Next";
      jokeContainer.innerText = joke.joke;
    })
    .catch((e)=>{
        if(e){
            jokeContainer.innerText = "GOT ERROR. RETRY!!"
        }
    })
}

getSetJoke();

jokeBtn.addEventListener("click", () => {
  getSetJoke();
});
