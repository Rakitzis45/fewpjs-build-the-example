// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeGlyph = document.querySelector(".like-glyph")
let post = document.querySelector(".media-post")
let body = document.querySelector("body")


body.addEventListener('click', turnRed)
function turnRed(e) {
  mimicServerCall("url")
  .then


  if (e.target.className === "like-glyph" || e.target.className === "activated-heart"){
    if (e.target.className === "activated-heart"){
      e.target.innerHTML = EMPTY_HEART;
      e.target.className = "like-glyph";
    } else{
        e.target.innerHTML = FULL_HEART;
        e.target.className = "activated-heart";
    }
  }
}






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
