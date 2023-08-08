const snowContainer = document.getElementById("snow-container");
const myID = document.getElementById("testing");
const snowContent = ['&#10052', '&#10053', '&#10054'];
const animate = document.getElementById("appear");


const sentence = "Hello, my name is Brandon"

function displayCharacterByCharacter() {
  let index = 0;
  let flag = 0;
  const interval = setInterval(() => {
    if (index < sentence.length && flag == 0) {
      animate.textContent += sentence.charAt(index);
      index++;

      if ( index == sentence.length ) {
        flag = 1;
      }
      
    } else {
      animate.textContent = sentence.substring(0, index);
      index--;
        if ( index < 0) {
          flag = 0;
        }
    }
  }, 100);
}

const random = (num) => {
    return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    return ` 
    top: -${top}%; 
    left: ${left}%; 
    font-size: ${size}px; 
    animation-duration: ${dur}s; 
    `;
}

const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
      var snow = document.createElement("div");
      snow.className = "snow";
      snow.style.cssText = getRandomStyles();
      snow.innerHTML = snowContent[random(2)]
      snowContainer.append(snow);
    }
  }

  window.addEventListener("load", () => {
    createSnow(35)
  });

  displayCharacterByCharacter();

  // const animateElements = document.querySelectorAll('.appear-animation');
  // console.log(animateElements);
  // const animateOnScroll = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('animate__animated', 'animate__bounce');
  //       observer.unobserve(entry.target);
  //     }
  //   });
  // };

  // const observer = new IntersectionObserver(animateOnScroll, {
  //   root: null, // Use the viewport as the root
  //   threshold: 0.1, // Adjust the threshold value based on your needs
  // });

  // animateElements.forEach((element) => {
  //   observer.observe(element);
  // });

//const myID = document.getElementsByClassName("animate hide appear-animation animate__animated animate__bounce");
//const myID = document.getElementById("testing");
console.log(myID);
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y > 400 && y < 1000) {
    myID.className = "show animate__animated animate__backInLeft";
  } else {
    myID.className = "hide";
  }
};

window.addEventListener("scroll", myScrollFunc);