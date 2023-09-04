const rainContainer = document.getElementById("rain");
const flowerContainer = document.getElementById("garden");

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
const createFlower = (num) => {
    for (var i = num; i > 0; i--) {
      var flower = document.createElement("div");
      flower.className = "flower";
      flower.style.cssText = getRandomStyles();
      flowerContainer.append(flower);
    }
  }

  const createRain = (num) => {
    for (var i = num; i > 0; i--) {
      console.log("rain");
      var raindrop = document.createElement("div");
      raindrop.className = "raindrop";
      raindrop.style.cssText = getRandomStyles();
      rainContainer.append(raindrop);
    }
  }

window.addEventListener("load", () => {
    createFlower(35);
    createRain(35);
    
  });