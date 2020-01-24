const http = new Http();
const goBack = document.getElementById("goBack");
const oneJokeBtn = document.getElementById("one");
const numOfJokes = document.getElementById("number");
const submitBtn = document.getElementById("btn");
const jokePage = document.getElementById("jokePage");
const jokes = document.getElementById("jokes");

oneJokeBtn.addEventListener("click", getOneJoke);

function getOneJoke(){
 http.getOne()
  .then(data => {    
    let joke = `<p>${data.joke}</p>`;
    jokes.innerHTML = joke;
  })
  .catch(err => console.log(err))
}

submitBtn.addEventListener("click", getMultiJoke);

function getMultiJoke(e){
 http.getMultiple(numOfJokes.value)
  .then(data => {  
    let num =1;  
    let joke = "";
    data.forEach(element => {
      joke += `<p>${num++}. ${element.joke}</p>`
    });
    jokes.innerHTML = joke;
    document.body.style.overflow = "auto";
  })
  .catch(err => console.log(err))

}

goBack.addEventListener("click", clear);
function clear(){
  document.body.style.overflow = "hidden";
}
