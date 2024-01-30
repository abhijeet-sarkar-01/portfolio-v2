
const quoteList = ["Remember to take things one day at a time.", "There is no need to rush the present for future’s sake.", "Know your worth.", "Make each day your masterpiece.", "Try to be a rainbow in someone’s cloud.", "Whatever you are, be a good one.", "You must be the best judge of your own happiness.", "You must be the change you wish to see in the world.", "No pressure, no diamonds.", "You do not find the happy life. You make it.", "Believe you can and you’re halfway there.", "Failure is the condiment that gives success its flavor.", "It is never too late to be what you might have been.", "Stay hungry. Stay foolish.", "You must do the things you think you cannot do.", "Wherever you go, go with all your heart.", "Dream big and dare to fail.", "To lose your path is the way to find that path.", "The beginning is the most important part of the work.", "If you learned a lesson it wasn’t a loss.", "The universe is not required to be in perfect harmony with human ambition.", "Love truth, but pardon error.", "Leave no stone unturned.", "If it matters to you, you’ll find a way.", "Tough times never last, but tough people do.", "Don’t wait, the time will never be just right."]

// variables for selectors
const linkedin = document.querySelector(".linkedin-logo")
const linkedin_svg = document.querySelector(".linkedin-svg")

const github = document.querySelector(".github-logo")
const github_svg = document.querySelector(".github-svg")

const twitter = document.querySelector(".twitter-logo")
const twitter_svg = document.querySelector(".twitter-svg")

const refreshQuoteBtn = document.querySelector(".refresh")
const quoteText = document.querySelector(".quote")
const refresh_svg = document.querySelector(".refresh-svg")

const contact_section = document.querySelector(".contact")

const education_section = document.querySelector(".education")
const edu_svg = document.querySelectorAll(".edu-svg")
const circle = document.querySelectorAll(".circle")

const edu_main = document.querySelector("#education-section")

const list = ['.cyber', '.python', '.dsp', '.git', '.html', '.dsa']

const url = ['https://www.coursera.org/account/accomplishments/verify/6566GU4VZZ7T?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course', 'https://www.coursera.org/account/accomplishments/records/AVRETFNR9AY5', 'https://www.coursera.org/account/accomplishments/records/KR6A388SXZ9W', 'https://www.coursera.org/account/accomplishments/records/LNDLPQHSSM77', 'https://www.coursera.org/account/accomplishments/records/TP8LXD8HBZDR', 'https://www.coursera.org/account/accomplishments/records/9ZMA39SEDGXH']

for (let i = 0; i<list.length; i++){
  document.querySelector(list[i]).addEventListener("click", ()=>{
    const win = open(url[i], '_blank');
    win.focus();
  })
}

// education scroll
education_section.addEventListener("click", ()=>{
  edu_main.scrollIntoView({behavior: 'smooth'})
})


const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
  document.scrollIntoView({behavior: 'smooth'})
})

const contact_link = document.querySelector(".contact-link")
const contact_banner = document.querySelector(".contact-banner")
if (screen.width <= 480){
  contact_link.textContent = "Contact";
  contact_banner.textContent = "Talk over a ☕?"
}

//Audio selectors

const night_btn = document.querySelector(".night")
const forest_btn = document.querySelector(".forest")
const fire_btn = document.querySelector(".fire")
const ocean_btn = document.querySelector(".ocean")
const mute_btn = document.querySelector(".mute")


// social buttons event listeners
linkedin.addEventListener("mouseover", ()=>{
  linkedin.classList.add("linkedin-hover-bg")
  linkedin_svg.classList.add("linkedin-hover-svg-bg")
})

linkedin.addEventListener("mouseout", ()=>{
  linkedin.classList.remove("linkedin-hover-bg")
  linkedin_svg.classList.remove("linkedin-hover-svg-bg")
})

github.addEventListener("mouseover", ()=>{
  github.classList.add("github-hover-bg")
  github_svg.classList.add("github-hover-svg-bg")
})

github.addEventListener("mouseout", ()=>{
  github.classList.remove("github-hover-bg")
  github_svg.classList.remove("github-hover-svg-bg")
})

twitter.addEventListener("mouseover", ()=>{
  twitter.classList.add("twitter-hover-bg")
  twitter_svg.classList.add("twitter-hover-svg-bg")
})

twitter.addEventListener("mouseout", ()=>{
  twitter.classList.remove("twitter-hover-bg")
  twitter_svg.classList.remove("twitter-hover-svg-bg")
})

const nightAudio = new Audio("assets/sounds/night.mp3")
const forestAudio = new Audio("assets/sounds/forest.mp3")
const fireAudio = new Audio("assets/sounds/fire.mp3")
const oceanAudio = new Audio("assets/sounds/ocean.mp3")

// sound event listeners

night_btn.addEventListener("click", ()=>{
  toggleAudio(nightAudio)
  night_btn.classList.toggle("night-selected")
})

forest_btn.addEventListener("click", ()=>{
  toggleAudio(forestAudio)
  forest_btn.classList.toggle("forest-selected")
})

fire_btn.addEventListener("click", ()=>{
  toggleAudio(fireAudio)
  fire_btn.classList.toggle("fire-selected")
})

ocean_btn.addEventListener("click", ()=>{
  toggleAudio(oceanAudio)
  ocean_btn.classList.toggle("ocean-selected")
})

// Make the divs redirect to websites on click
contact_section.addEventListener("click", scrollContact)

// educastion section event listener
education_section.addEventListener("mouseover", ()=>{
  for(const item of edu_svg){
    item.classList.add("edu-svg-bg")
  }
  for (const it of circle){
    it.classList.add("circle-bg")
  }
})

education_section.addEventListener("mouseout", ()=>{
  for(const item of edu_svg){
    item.classList.remove("edu-svg-bg")
  }
  for (const it of circle){
    it.classList.remove("circle-bg")
  }
})



// ALL FUNCTIONS!

function scrollContact(){
  console.log("Clicked!")
  const contactMain = document.querySelector("#scroll")
  contactMain.scrollIntoView({behavior: 'smooth'});
}

// Function to play/pause music
function toggleAudio(audioElement) {
  if (audioElement.paused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

// Funtion to choose a random quote
function chooseQuote(){
  let randomIndex = Math.floor(Math.random()*quoteList.length)
  quoteText.textContent = quoteList[randomIndex]
}

refreshQuoteBtn.addEventListener("click", chooseQuote)