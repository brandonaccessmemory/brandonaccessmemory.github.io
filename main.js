const snowContainer = document.getElementById("snow-container");
const leafContainer = document.getElementById("leave-container");

const myID = document.getElementById("testing");
const snowContent = ['&#10052', '&#10053', '&#10054'];
const animate = document.getElementById("appear");

const sentence = "Dive into the Project Sandbox!"


const myList = document.getElementById("myList");
  
myList.addEventListener("click", function(event) {
  if (event.target && event.target.nodeName === "LI") {
    const targetId = event.target.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth",block: "start" });
    }
  }
});


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

const createLeaf = (num) => {
  for (var i = num; i > 0; i--) {
    var leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.style.cssText = getRandomStyles();
    leafContainer.append(leaf);
  }
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
    createSnow(35);
    createLeaf(35);
    
  });

  displayCharacterByCharacter();


  console.log(myID);
  var myScrollFunc = function() {
    var y = window.scrollY;
    if (y > 300 && y < 800) {
      myID.className = "show animate__animated animate__backInLeft";
    } else {
      myID.className = "hide";
    }
  };

  window.addEventListener("scroll", myScrollFunc);