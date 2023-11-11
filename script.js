const startNumber = 9;
const flipCard = document.querySelector(".flip-card");
const topHalf = flipCard.querySelector(".top");
const bottomHalf = flipCard.querySelector(".bottom");
const topFlip = document.createElement("div");
topFlip.classList.add("top-flip");
const bottomFlip = document.createElement("div");
bottomFlip.classList.add("bottom-flip");

// [...flipCard.children].forEach((child) => {
//   child.textContent = startNumber;
// });

top.textContent = startNumber;
bottomHalf.textContent = startNumber;

flipCard.dataset.currentNumber = startNumber;
flipCard.dataset.nextNumber = startNumber - 1;
flipCard.addEventListener("animationstart", (e) => {
  topHalf.textContent = startNumber - 1;
});
flipCard.addEventListener("animationend", (e) => {
  bottomHalf.textContent = startNumber - 1;
});
flipCard.classList.add("flip");
